# SpaceX Launches

![Image SpaceX Launches Nathan](https://raw.githubusercontent.com/nathanopereira/spacex-launch/main/public/print.png)

## Demo
[https://spacex-launches-nathan.vercel.app/](https://spacex-launches-nathan.vercel.app/)

## Resumo
SpaceX Launches exibe os detalhes sobre todos os lançamentos realizados e os previsto pela SpaceX.

Os dados são extraídos a partir da API da SpaceX [https://github.com/r-spacex/SpaceX-API](https://github.com/r-spacex/SpaceX-API).

## Rodar o projeto

## Estrutura do projeto
- O projeto utiliza [Next.js](https://nextjs.org/)
- Na pasta `pages/api` estão contidas os endpoins que responsáveis por consultar a API da SpaceX e formatar para retornar ao front.

### Requisitos
- Necessário ter o [NodeJS](https://nodejs.org/en/download/) instalado

### Rodando o projeto
- Clone este repositório
- Acesse a pasta do projeto e rode `npm install`
- Aguarde a instalação dos pacotes
- Copie o arquivo `.env.sample` e renomeie para `.env`
- Abra o arquivo `.env` e altere o valor de `SPACEX_URL=` com a url da API da SpaceX
- Rode `npm run dev`
- Acesse [http://localhost:3000](http://localhost:3000)


