import { Request, Response, NextFunction } from 'express';

export async function notFoundMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`,
    },
    timestamp: new Date().toISOString(),
  });
}
