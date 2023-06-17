import { Request, Response } from 'express';
import { MunicoesDeArmaService } from '../service/MunicaoDeArmaService';

const MunicaoDeArmaController = {
	
	async lista(request: Request,response: Response) {
		try {
			const {ativo} = request.params;
			const service = new MunicoesDeArmaService();
			const result = await service.listaMunicaoDeArma(ativo === 'true' ? true : false);
			if (result) return response.status(200).json(result);
			else return response.status(400).json({ message: 'Erro ao listar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	},
	async insere(request: Request, response: Response) {
		try {
			const service = new MunicoesDeArmaService();
			const requestBody = request.body; 
			const id_usuario = 1;
			const result = await service.insereMunicaoDeArma(requestBody, id_usuario);
			if (result) return response.status(200).json({ message: 'Sucesso ao cadastrar.' });
			else return response.status(400).json({ message: 'Erro ao cadastrar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	},
	async atualiza(request: Request, response: Response) {
		try {
			const service = new MunicoesDeArmaService();
			const requestBody = request.body; 
			const id_usuario = '1';
			const result = await service.atualizaMunicaoDeArma(requestBody, id_usuario);
			if (result) return response.status(200).json({ message: 'Sucesso ao alterar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	},
	async desativa(request: Request, response: Response) {
		try {
			const service = new MunicoesDeArmaService();
			const requestBody = request.body; 
			const id_usuario = '1';
			const result = await service.desativaMunicaoDeArma(requestBody, id_usuario);
			if (result) return response.status(200).json({ message: 'Sucesso ao alterar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	}
};

export { MunicaoDeArmaController };