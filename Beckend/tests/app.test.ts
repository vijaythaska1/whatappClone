import request from 'supertest';
import { app } from '../src/app';

describe('App', () => {
  it('should respond to health check', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});