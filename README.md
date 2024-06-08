# Expo Sandbox

## Introdução

Projeto voltado para estudos de CI/CD, Builds/Deploys OTA e boas práticas.

## Estrutura de Pastas

```
|-- src
  |-- app
    |-- index.tsx
    |-- message.tsx

```

- `src`: ("src" ou "source" é Pasta que contém o Código Fonte do aplicativo)
- `app`: (Pasta onde as telas do aplicativo vão ser desenvolvidas)
- `index.tsx`: (Primeira tela a ser exibida, já que arquivos "index" só considerados arquivos principais)
- `message.tsx`: (Tela que exibe uma simples mensagem)

## Descrição

Foram criadas 2 branches `development` e `main` para que seja possível realizar uma integração com o Dashboard
do **Expo.Dev** visando a automação de **Builds** e **Deploys** ao realizar um commit.

Com isso, não será necessário realizar **Builds** e **Deploys** manualmente.

Será necessário estudar:

- Variáveis de Ambiente no Expo (EXPO_PUBLIC...)
- Configuração do arquivo `eas.json`

## TODO

- [X] Criar tela de Login para teste da Autenticação do ambiente do atual
- [X] Criar tela de "Hello World", onde será executada uma chamada de API para teste do ambiente atual
- [X] Linkar projeto com **Cognito da Fenix**
- [X] Criar projeto no Dashboard do `Expo.Dev`
- [X] Configurar corretamente as `Variáveis de Ambiente`
- [X] Configurar builds para serem instaladas através do Dashboard do Expo
- [X] Configurar corretamente arquivo `aws-exports` para **Build** e **Deploy**
  - Foi utilizado o campo `channel` durante o build de **production**, o que causou em um update automático
  no `channel` de **production**. Ao realizar o `eas update` na branch de **production** as **Variáveis de Ambiente**
  e o arquivo **aws-exports.js** ainda estavam configurados como sendo de **development**. Só foi possível utilizar dados
  de **production** instalando o APK diretamente dos logs do Dashboard do Expo. Preciso ver o por que isso está acontecendo
- [ ] Criar fluxos CI/CD para automatizar **Builds**/**Deploys**