export type MarcaDeArma = {
  id: number;
  marca: string;
  ativo: boolean;
  create_at: Date;
  id_user_create: number;
  alter_at: Date;
  id_user_alt: number;
}

export type MunicoesDeArma = {
  id: number;
  descricao: string;
  ativo: boolean;
  create_at: Date;
  id_user_create: number;
  alter_at: Date;
  id_user_alt: number;
}

export type TipoDeArma = {
  id: number;
  tipo: string;
  ativo: boolean;
  create_at: Date;
  id_user_create: number;
  alter_at: Date;
  id_user_alt: number;
}

export type Arma = {
  id: number;
  registro: string;
  calibre: string;
  capacidadeMunicao: string;
  acessorios: string;
  Funcionamento: string;
  ativo: boolean;
  create_at: Date;
  id_user_create: number;
  alter_at: Date;
  id_user_alt: number;

  //RELACIONAMENTOS
  tiposDeArmasId?: number;
  marcasDeArmasId?: number;
  municoesDeArmasId?: number;
}

