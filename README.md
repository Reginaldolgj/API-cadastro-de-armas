Almoxarifado

Este projeto é um sistema de cadastro de itens bélicos. Ele permite o gerenciamento e registro de informações relacionadas a armamentos.
Como usar

Siga as instruções abaixo para clonar e executar o projeto:

    Clone o repositório para sua máquina local.

bash

git clone <URL do repositório>

    Navegue até o diretório do projeto.

bash

cd almoxarifado

    Instale as dependências do projeto usando o gerenciador de pacotes Yarn.

bash

yarn

    Inicie o servidor de desenvolvimento.

bash

yarn dev

Agora você pode acessar a API em http://localhost:3000 e começar a realizar as operações de cadastro de itens bélicos.
Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

    Node.js com TypeScript: Ambiente de execução e linguagem de programação.
    Express: Framework web para criação de APIs.
    Prisma: ORM (Object-Relational Mapping) para acesso ao banco de dados.
    Jest: Framework de testes.
    Zod: Biblioteca para validação de esquemas de dados.

Banco de Dados

O projeto utiliza um banco de dados PostgreSQL. A imagem abaixo ilustra a estrutura do banco de dados utilizado.

![BD](image.png)
Testes

O projeto possui testes automatizados implementados com o framework Jest. Para executar os testes, utilize o seguinte comando:

bash

yarn test

Você também pode gerar um relatório de cobertura de código executando o comando:

bash

yarn coverage

Por favor, observe que ao executar os testes, a pasta do banco de dados PostgreSQL será excluída. Se você deseja executar os testes mais de uma vez, é necessário excluir manualmente a pasta ou descomentar o código na pasta prisma-environment-jest.js conforme indicado no arquivo.
Seed

O projeto possui um comando para popular o banco de dados com dados iniciais. Para executar o comando de seed, utilize o seguinte comando:

bash

yarn seed

Observe que a pasta do banco de dados PostgreSQL será excluída ao executar o comando de seed
