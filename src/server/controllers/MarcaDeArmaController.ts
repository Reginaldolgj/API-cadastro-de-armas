import { Request, Response } from 'express';
import { MarcaDeArmaService } from '../service/MarcaDeArmaService';
import { converteTexto } from '../../funcoes/funcoes';

const MarcaDeArmaController = {
	
	async lista(request: Request,response: Response) {
		try {
			const {ativo} = request.params;
			const service = new MarcaDeArmaService();
			const result = await service.listaMarcaDeArma(ativo === 'true' ? true : false);
			if (result) return response.status(200).json(result);
			else return response.status(400).json({ message: 'Erro ao listar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	},
	async insere(request: Request, response: Response) {
		try {
			const service = new MarcaDeArmaService();
			const requestBody = request.body; 
      const {marca} = requestBody;
      const marcaUpperTrim = converteTexto(marca)
			const id_usuario = 1;
			const result = await service.insereMarcaDeArma(requestBody, id_usuario, marcaUpperTrim);
			if (result === 409) return response.status(409).json({ message: 'Erro de unicidade: já existe uma marca de arma com o mesmo nome.' });
			if (result) return response.status(200).json({ message: 'Sucesso ao cadastrar.' });
			else return response.status(400).json({ message: 'Erro ao cadastrar.' });
		} catch (error) {
      console.log(error);
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	},
	async atualiza(request: Request, response: Response) {
		try {
			const service = new MarcaDeArmaService();
			const requestBody = request.body; 
			const id_usuario = '1';
			const result = await service.atualizaMarcaDeArma(requestBody, id_usuario);
			if (result === 409) return response.status(409).json({ message: 'Erro de unicidade: já existe uma marca de arma com o mesmo nome.' });
			if (result) return response.status(200).json({ message: 'Sucesso ao alterar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	},
	async desativa(request: Request, response: Response) {
		try {
			const service = new MarcaDeArmaService();
			const requestBody = request.body; 
			const id_usuario = '1';
			const result = await service.desativaMarcaDeArma(requestBody, id_usuario);
			if (result) return response.status(200).json({ message: 'Sucesso ao alterar.' });
		} catch (error) {
			return response.status(400).json({ message: 'Erro interno do servidor.' });
		}
	}
};

export { MarcaDeArmaController };