/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../dataBase/';
import { TipoDeArma } from '../../types/types';

class TipoDeArmaService{
	async listaTipoDeArma(ativoReq: Boolean){
		try {
			const ativo = ativoReq === true ? true : false;
			const result = await prismaClient.tiposDeArmas.findMany({
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
	async insereTipoDeArma(requestBody: TipoDeArma, id_usuario: number){
		try {
			const { id_user_create, ...data } = requestBody;
			const create = await prismaClient.tiposDeArmas.create({
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
	async atualizaTipoDeArma(requestBody: TipoDeArma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.tiposDeArmas.update({
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
	async desativaTipoDeArma(requestBody: TipoDeArma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.tiposDeArmas.update({
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

export {TipoDeArmaService};
