/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import request from 'supertest';
import { server } from '../Server';
 
describe('Rota: Marca de armas', () => {
  describe('Rota: Munição de armas', () => {
    it('Lista todas as munições de armas', async () => {
      const res = await request(server).get('/municaodearma/:ativo' + true);
      expect(res.status).toBe(200);
    });
  });
  it('Cria marca de armas', async () => {
		const res = await request(server)
    .post('/municaodearma/')
    .send({
      descricao: "9MM",
      ativo: true
    })
		expect(res.status).toBe(200);
	});
});