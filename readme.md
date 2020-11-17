Nodejs - API Rest
========
Criação de uma api utilizando express com banco de dados mongodb e docker. Objetivo desde projeto é realizar operações CRUD.

  &nbsp;  

## Docker
---
Projeto criado utilizanbdo docker + imagem slim do nodejs v12 como plataforma de desenvolvimento.

### Docker compose
O arquivo **docker/docker-compose.yaml** precisa ser ajustado antes de rodar o build do container. 

  &nbsp;  

Atente-se para o ajuste que deve ser realizado no path do projeto:  
> **Observação:**   
> 1. **drive**: /d/  ( ou /c/ )  
> 2. **path**: [path para ajustar]  
> 3. **projeto**: rest-api (pasta desse projeto)  
    &nbsp;    
>   /d/ ou /c/ são referencias a c:\ e d:\
    
  &nbsp;  

Arquivo: docker/docker-compose.yaml
```
...
volumes:
      - [path para ajustar]/rest-api:/home/node/app
...
```

  &nbsp;  

## Comandos  
Os comandos abaixo devem ser executados na raiz do projeto.

```
$ docker-compose -f "./docker/docker-compose.yaml" up -d --build
```

Após rodar o comando, o projeto utilizará a porta 3210 para expor a API localmente;

```
$ docker-compose -f "./docker/docker-compose.yaml" down --remove-orphans
``` 

  &nbsp;  

## Banco de dados
---
Utilizei uma conta gratuita na AWS através da interface Cloud Atlas (mongoDB) para realizar estes desenvolvimento

  &nbsp;  

## Referencias:  
https://www.mongodb.com/cloud/atlas

  &nbsp;  

## Melhorias
Previsto para adicionar o mongoDB local, através do docker como serviço.