import { z } from "zod";

//ARMA
export const ArmaSchema = z.object({
  registro: z.string(),
  calibre: z.string(),
  capacidadeMunicao: z.string(),
  acessorios: z.string(),
  Funcionamento: z.string(),
  ativo: z.boolean(),
  id_user_create: z.number(),
  tiposDeArmasId: z.number(),
  marcasDeArmasId: z.number(),
  municoesDeArmasId: z.number(),
});

//TIPO DE ARMA
export const MarcaSchema = z.object({
  marca: z.string().min(3, "Precisa digitar no mínimo 3 caracteres!"),
  ativo: z.boolean(),
});