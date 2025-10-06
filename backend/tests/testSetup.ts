import { config } from '../src/config';

beforeAll(async () => {
  console.log('Test environment setup');
});

afterAll(async () => {
  console.log('Test environment cleanup');
});

export const testConfig = {
  ...config,
  database: {
    ...config.database,
    database: 'calculadora_test',
  },
};
