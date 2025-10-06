import { z } from 'zod';

export const zString = z.string().min(1, 'stringRequired');

export const zNullableString = z.string().nullable();

export const zName = z.string().min(1, 'nameRequired').max(100, 'nameMaxLength');

export const zNullableDescription = z
  .string()
  .max(500, 'descriptionMaxLength')
  .nullable()
  .default('');

export const zBit = z.union([z.literal(0), z.literal(1)]);

export const zFK = z.coerce.number().int().positive('idMustBePositive');

export const zNullableFK = z.coerce.number().int().positive('idMustBePositive').nullable();

export const zDateString = z.string().datetime();

export const zEmail = z.string().email('invalidEmail');

export const zNumeric = z.coerce.number();

export const zPositiveNumeric = z.coerce.number().positive('valueMustBePositive');

export const zNonNegativeNumeric = z.coerce.number().nonnegative('valueMustBeNonNegative');
