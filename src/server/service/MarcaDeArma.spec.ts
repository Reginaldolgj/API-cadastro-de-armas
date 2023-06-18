/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import request from 'supertest';
import { server } from '../Server';
 
describe('Rota: Marca de armas', () => {
	it('Lista todas as marcas de armas', async () => {
		const res = await request(server).get('/marcadearma/:ativo' + true);
		expect(res.status).toBe(200);
	});
  it('Cria marca de armas', async () => {
		const res = await request(server)
    .post('/marcadearma/')
    .send({
      marca: "Taurus",
      ativo: true
    })
		expect(res.status).toBe(200);
	});
  it('Cria marca de armas duplicada', async () => {
		const res = await request(server)
    .post('/marcadearma/')
    .send({
      marca: "Taurus",
      ativo: true
    })
		expect(res.status).toBe(409);
	});
});