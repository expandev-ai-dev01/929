import { Request } from 'express';
import { z } from 'zod';

export interface ValidationResult<T> {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: T;
}

export interface SecurityConfig {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

export class CrudController {
  private securityConfig: SecurityConfig[];

  constructor(securityConfig: SecurityConfig[]) {
    this.securityConfig = securityConfig;
  }

  async create<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidationResult<T> | null, any]> {
    return this.validate(req, schema, 'CREATE');
  }

  async read<T>(req: Request, schema: z.ZodSchema<T>): Promise<[ValidationResult<T> | null, any]> {
    return this.validate(req, schema, 'READ');
  }

  async update<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidationResult<T> | null, any]> {
    return this.validate(req, schema, 'UPDATE');
  }

  async delete<T>(
    req: Request,
    schema: z.ZodSchema<T>
  ): Promise<[ValidationResult<T> | null, any]> {
    return this.validate(req, schema, 'DELETE');
  }

  private async validate<T>(
    req: Request,
    schema: z.ZodSchema<T>,
    permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE'
  ): Promise<[ValidationResult<T> | null, any]> {
    try {
      const params = { ...req.body, ...req.params, ...req.query };
      const validated = await schema.parseAsync(params);

      const credential = {
        idAccount: 1,
        idUser: 1,
      };

      return [
        {
          credential,
          params: validated,
        },
        null,
      ];
    } catch (error) {
      return [
        null,
        {
          statusCode: 400,
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: error,
        },
      ];
    }
  }
}

export function successResponse<T>(data: T): {
  success: true;
  data: T;
  timestamp: string;
} {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

export function errorResponse(message: string): {
  success: false;
  error: {
    message: string;
  };
  timestamp: string;
} {
  return {
    success: false,
    error: {
      message,
    },
    timestamp: new Date().toISOString(),
  };
}
