# Expo Sandbox

## Introdução

Projeto voltado para estudos de CI/CD, Builds/Deploys OTA e boas práticas.

## Descrição

Foram criadas 2 branches `development` e `main` para que seja possível realizar uma integração com o Dashboard
do **Expo.Dev** visando a automação de **Builds** e **Deploys** ao realizar um commit.

Com isso, não será necessário realizar **Builds** e **Deploys** manualmente.

Será necessário estudar:

- Variáveis de Ambiente no Expo (EXPO_PUBLIC...)
- Configuração do arquivo `eas.json`

## TODO

- [ ] Criar tela de Login para teste da Autenticação do ambiente do atual
- [ ] Criar tela de "Hello World", onde será executada uma chamada de API para teste do ambiente atual
- [ ] Linkar projeto com **Cognito da Fenix**
- [ ] Criar projeto no Dashboard do `Expo.Dev`
- [ ] Configurar corretamente as `Variáveis de Ambiente` e arquivo `aws-exports` para **Build** e **Deploy**
- [ ] Criar fluxos CI/CD para automatizar **Builds**/**Deploys**