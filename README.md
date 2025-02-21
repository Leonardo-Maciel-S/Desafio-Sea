# Desafio Sea Tecnologia
- Desafio feito no prazo de 7 dias.
  
### Stacks 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)


## Funcionalidades
- Uma tela de gerenciamento de funcionários, onde podemos fazer algumas coisas como:
- Recebemos uma lista de todos cadastrados (GET)
- Podemos filtrar por apenas ativo (filtros)
- Uma tela de cadastro (POST)
- Uma tela de edição (PUT)
- Um botão para excluir (DELETE)
  
## Requisitos / Ferramenta utilizadas
- Utilização de Redux: Redux Toolkit
- Utilizar biblioteca de estilo: Tailwindcss
- Framework para requisições: Axios
- Simular backend: Json Server
- Criar Link para cada etapa e página: React Router Dom
- Controle de versão: git
- Repositório remoto: Github
- Validação de formulário: React Hook Form + Zod
  
# Get started
- Clone o repositório

```
git clone https://github.com/Leonardo-Maciel-S/Desafio-Sea.git
```
- Instale as dependências
```
npm i
```
- Inicie o Json Server
```
npx json-server db.json 
```
- Em outra aba do terminal inicie o projeto
```
npm run dev
```

## Telas
### Inicial
- Onde é possível ver todos os funcionários, filtar por apenas ativos, editar ou excluir.
![Image](https://github.com/user-attachments/assets/0fa0d6fc-1c9c-4a2f-af4f-9a2510a80f00)
![Image](https://github.com/user-attachments/assets/6a9c2d8c-5a87-490d-9450-360c99375fb0)

### Botão de Editar/Excluir
- Menu dropdown que aparece quando clica no ... e filtro apenas ativo.
![Image](https://github.com/user-attachments/assets/20c42ba3-58de-4979-8eb0-9d8beb1b7a1b)

### Etapa concluída
- Quando marcado a chave de "etapa concluída" libera outras paginas.
![Image](https://github.com/user-attachments/assets/cf37d2c0-68e8-4719-9168-3c0ffa7149f3)
- Onde podemos avançar para a proxima com o botão no rodapé ou pelas etapas na parte superior
![Image](https://github.com/user-attachments/assets/262431ca-b749-423c-aa11-36fc5215a856)
