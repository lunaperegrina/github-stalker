<center>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
</center>
<br>
<center>
    <h1>GitHub Stalker</h1>
</center>
<center>
    <h2>Este software faz o monitoramento de forks em repositorios do GitHub com apoio da API do GitHub.</h2>
</center>

## Instalação:

Estou assumindo que você possui [Git](https://git-scm.com/) e [NodeJS](https://nodejs.org/en/) em seu sistema.

Usei yarn neste projeto, então digite: (caso não tenha instalado)

    npm install -g yarn

Download do código:

    git clone https://github.com/pedroperegrinaa/github-stalker

Download dos módulos:

    yarn install

(aviso: as dependências pesam cerca de **428MB**)

## .env

Crie um arquivo .env e preencha com os seguintes valores:

    USER_STALKED=
    REPO_STALKED=

**USER_STALKED:** O dono do repositório.

**REPO_STALKED:** ...e o repositório.

É, não tem segredo :)

## Iniciando

    node.js index

Isso iniciará o monitoramento. Ao final do arquivo `index.js` temos a seguinte função:

    setInterval(getTweets, 60000);

O segundo parâmetro é o tempo entre cada verificação de ultimo fork feito e está em milissegundos. O valor padrão é 1 minuto.
