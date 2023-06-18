/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import request from 'supertest';
import { server } from '../Server';
 
describe('Rota: Marca de armas', () => {
	it('Lista todas as armas', async () => {
		const res = await request(server).get('/arma/:ativo' + true);
		expect(res.status).toBe(200);
	});
  it('Cria uma arma', async () => {
		const res = await request(server)
    .post('/arma/')
    .send({
        registro: "12345",
        calibre: "9mm",
        capacidadeMunicao: "15",
        acessorios: "Lanterna",
        Funcionamento: "Semi-automático",
        ativo: true,
        tiposDeArmasId: 1,
        marcasDeArmasId: 1,
        municoesDeArmasId: 1,
    })
		expect(res.status).toBe(200);
	});
});