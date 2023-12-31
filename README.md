This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📈 🌽 POC Bunge & EY - FINCROP

Esse projeto foi construído de acordo com os requisitos da Bunge no formato de POC para validação da proposta de prestação de serviços da EY como consultoria de Tecnologia para desenvolvimento de soluções digitais.

## 📝 Pré Requisitos

Essa aplicação frontend foi construída utilizando [React.js](https://react.dev/) & [Next.js](https://nextjs.org/). Abaixo seguem alguns pré-requisitos para executá-la em ambiente local:

- Um terminal de sua preferência (Ex: Windows [prompt de comando, Windows Terminal, Powershell, etc...], Linux [Gnome Terminal, Konsole, etc...], McOS [Terminal, iTerm2, etc...])
- Editor de código - (Recomendamos o VS Code): [Baixar e instalar VsCode](https://code.visualstudio.com/download)
- Node.js (versão LTS - 18.16.1): [Baixar e instalar o Node.js](https://nodejs.org/en)

## 💻️ Executando o projeto localmente

Primeiramente acesse a pasta do projeto e vá até o nível da raiz do código fonte da aplicação. Em um terminal, certifique-se que está utilizando a versão 18.16.1 do Node.js. Para verificar basta digitar o comando abaixo:

```bash
node -v
```

Após confirmado a versão correta do Node.js, estando dentro da pasta raiz do projeto, digite o comando para instalar as dependências necessária para executar a aplicação:

```bash
npm install
```

Aguarde finalização da instalação de todos os pacotes.

Após a instalação das dependências, digite o seguinte comando para executar o projeto frontend localmente:

```bash
npm run dev
```

A aplicação subirá um servidor local do projeto que estará rodando na porta `http://localhost:3000`

Abra um browser de sua preferência e digite na barra de endereço: `localhost:3000` para acessar o conteúdo da aplicação.

### >>> Observação Importante: 

A aplicação front está configurada para se comunicar com o serviço backend (desenvolvido em Java + SpringBoot) através da porta `localhost:8183` , dessa forma para que o app funcione como esperado é necessário executar paralelamente o projeto backend em sua máquina.

## 💻️ Subindo o projeto em um servidor WEB
Para inicializar a aplicação Frontend a Bunge deverá subir a aplicação e configurar um servidor web como por exemplo Nginx e colocar a pasta do projeto. O artefato com os arquivos estáticos do projeto frontend está localizado dentro da pasta frontend presente no arquivo zip enviado em `/build`.

Lembrando que a aplicação foi construída usando também Next.js, e caso necessite de algum detalhamento a mais para deploy você pode acessar a [página da documentação do Next.js sobre deploying](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).

## Opção 02 de servidor WEB - Deploy na Vercel
Alternativamente pode também ser usado a plataforma da [VERCEL](https://vercel.com/) por se tratar de uma aplicação Next.js, o que facilita bastante o deploy da aplicação frontend como também a configuração das variáveis de ambiente.

## ⚙️ Requisitos para excutar o projeto Backend

O backend para esta aplicação foi desenvolvido em [Java 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html). Para Instalar o Java 11 seguem abaixo algumas opções:

- Windows: [Instalar Java 11](https://www.ic.unicamp.br/~ra100621/class/2020.1/LPOO_files/curso/prologo/00-instalacao/windows/00-tuto_instal_windows.html)
- Linux: [Exemplo instalar Java 11 no Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-20-04-pt)
- MacOS: [Instalar Java 11 no MacOS](https://www.java.com/pt-BR/download/help/mac_install.html)

Além do Java 11 é necessário uma IDE para compilação e build do projeto. Recomendam⚙️os utilizar a IDE Eclipse:

[Baixar a instalar a IDE Eclipse release 2022-06](https://www.eclipse.org/downloads/packages/release/2022-06/r)

### >>> Obs:

Após instalar a IDE Eclipse, antes de executar o projeto é necessário instalar o plugin do SpringBoot 4. Acesse o Marketplace dentro da IDE e procure pelo termo "spring" e instale o plugin [Spring Tools 4 (aka Spring Tool Suite 4)](https://marketplace.eclipse.org/content/spring-tools-4-aka-spring-tool-suite-4) 

## Autor

Desenvolvido com 💛 pela [EY](https://www.ey.com/pt_br/consulting/transformation-platform)
