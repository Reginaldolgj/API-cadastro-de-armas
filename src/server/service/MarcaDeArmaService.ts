/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../dataBase/';
import { MarcaDeArma } from '../../types/types';

class MarcaDeArmaService{
	async listaMarcaDeArma(ativoReq: Boolean){
		try {
			const ativo = ativoReq === true ? true : false;
			const result = await prismaClient.marcasDeArmas.findMany({
				where: {
					ativo: ativo,
				}
			});
			return result;
		} catch (error) {
			console.error(error);
			return false;
      
		}
	}
	async insereMarcaDeArma(requestBody: MarcaDeArma, id_usuario: number){
		try {
			const { id_user_create, ...data } = requestBody;
			const create = await prismaClient.marcasDeArmas.create({
				data: {
					id_user_create: id_usuario,
					...data,
				}
			});
			return create;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	async atualizaMarcaDeArma(requestBody: MarcaDeArma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.marcasDeArmas.update({
				where: { id },
				data:{
					id_user_alt: parseInt(id_usuario),
					...data
				}
			});
			return atualiza;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	async desativaMarcaDeArma(requestBody: MarcaDeArma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.marcasDeArmas.update({
				where: { id },
				data:{
					id_user_alt: parseInt(id_usuario),
					...data
				}
			});
			return atualiza;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}

export {MarcaDeArmaService};
