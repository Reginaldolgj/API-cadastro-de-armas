/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import request from 'supertest';
import { server } from '../Server';




describe('Rota: Tipos de armas', () => {
	it('Lista todos os tipos de armas', async () => {
		const res = await request(server).get('/tipodearma/:ativo' + true);
		expect(res.status).toBe(200);
	});

  it('Cria tipos de armas', async () => {
		const res = await request(server)
    .post('/tipodearma/')
    .send({
      tipo: "Pistola",
      ativo: true
    })
		expect(res.status).toBe(200);
	});
});