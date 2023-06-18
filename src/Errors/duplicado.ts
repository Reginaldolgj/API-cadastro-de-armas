import { Prisma } from '@prisma/client';

export function handlePrismaUniqueConstraintError(error: any) {
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
    // console.error('Erro de unicidade: já existe um registro com o valor fornecido.');
    return 409;
  } else {
    console.error('Ocorreu um erro interno:', error);
  }
  return false;
}
