/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../dataBase';
import { Arma } from '../../types/types';

class ArmaService {
	async listaArma(ativoReq: Boolean){
		try {
			const ativo = ativoReq === true ? true : false;
			const result = await prismaClient.armas.findMany({
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
	async insereArma(requestBody: Arma, id_usuario: number){
		try {
			const { id_user_create, ...data } = requestBody;
			const create = await prismaClient.armas.create({
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
	async atualizaArma(requestBody: Arma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.armas.update({
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
export {ArmaService};