import prismaClient from '../src/dataBase';

async function main() {
	const tipoCreate = {
		tipo: 'Pistola',
		ativo: true,
		id_user_create: 1
	};
	await prismaClient.tiposDeArmas.createMany({
		data: { 
			tipo: tipoCreate.tipo,
			ativo: tipoCreate.ativo,
			id_user_create: tipoCreate.id_user_create,
		}
	});
	const MunicaoCreate = {
		descricao: '762',
		ativo: true,
		id_user_create: 1
	};
	await prismaClient.municoesDeArmas.createMany({
		data: { 
			descricao: MunicaoCreate.descricao,
			ativo: MunicaoCreate.ativo,
			id_user_create: MunicaoCreate.id_user_create,
		}
	});
	const MarcaCreate = {
		marca: 'taurus',
		ativo: true,
		id_user_create: 1
	};
	await prismaClient.marcasDeArmas.createMany({
		data: { 
			marca: MarcaCreate.marca,
			ativo: MarcaCreate.ativo,
			id_user_create: MarcaCreate.id_user_create,
		}
	});
	const Arma = {
		registro: '12345',
		calibre: '9mm',
		capacidadeMunicao: '15',
		acessorios: 'Lanterna',
		Funcionamento: 'Semi-automático',
		ativo: true,
		id_user_create: 1,
		tiposDeArmasId: 1,
		marcasDeArmasId: 1,
		municoesDeArmasId: 1
	};
	await prismaClient.armas.createMany({
		data: { 
			registro: Arma.registro,
			calibre: Arma.calibre,
			capacidadeMunicao: Arma.capacidadeMunicao,
			acessorios: Arma.acessorios,
			Funcionamento: Arma.Funcionamento,
			ativo: Arma.ativo,
			id_user_create: Arma.id_user_create,
		}
	});
}

main();