/* eslint-disable @typescript-eslint/no-unused-vars */
import { handlePrismaUniqueConstraintError } from '../../Errors/duplicado';
import prismaClient from '../../dataBase/';
import { converteTexto } from '../../funcoes/funcoes';
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
	async insereMarcaDeArma(requestBody: MarcaDeArma, id_usuario: number, marcaUpperTrim: string){
		try {
			const { id_user_create, marca, ...data } = requestBody;
			const create = await prismaClient.marcasDeArmas.create({
				data: {
          marca: marcaUpperTrim,
					id_user_create: id_usuario,
					...data,
				}
			});
			return create;
		} catch (error) {
      return handlePrismaUniqueConstraintError(error);
		}
	}
	async atualizaMarcaDeArma(requestBody: MarcaDeArma, id_usuario: string){
		try {
			const { id, id_user_alt,...data} = requestBody; 
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
