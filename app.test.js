const request = require('supertest');
const { app, server } = require('./index');

describe('Pruebas de la API', () => {
  afterAll(() => {
    server.close();
  });

  it('Debe retornar un mensaje de éxito en la raíz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Pipeline DevSecOps funcionando correctamente');
  });
});