/* eslint-disable @typescript-eslint/no-unused-vars */
import prismaClient from '../../dataBase/';
import { MunicoesDeArma } from '../../types/types';

class MunicoesDeArmaService{
	async listaMunicaoDeArma(ativoReq: Boolean){
		try {
			const ativo = ativoReq === true ? true : false;
			const result = await prismaClient.municoesDeArmas.findMany({
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
	async insereMunicaoDeArma(requestBody: MunicoesDeArma, id_usuario: number){
		try {
			const { id_user_create, ...data } = requestBody;
			const create = await prismaClient.municoesDeArmas.create({
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
	async atualizaMunicaoDeArma(requestBody: MunicoesDeArma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.municoesDeArmas.update({
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
	async desativaMunicaoDeArma(requestBody: MunicoesDeArma, id_usuario: string){
		try {
			const { id, id_user_alt, ...data} = requestBody; 
			const atualiza = await prismaClient.municoesDeArmas.update({
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

export {MunicoesDeArmaService};
