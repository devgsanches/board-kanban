# Board Kanban

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Firebase](https://img.shields.io/badge/Firebase-11.7-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-38B2AC)

## 📋 Sobre o Projeto

Board Kanban é uma aplicação moderna de gerenciamento de tarefas, desenvolvida com as mais recentes tecnologias do ecossistema React. O projeto implementa um sistema completo de autenticação, gerenciamento de estado e interface responsiva.

## 🚀 Tecnologias Utilizadas

- React 19
- TypeScript
- Firebase (Autenticação e Banco de Dados)
- TailwindCSS
- React Hook Form + Zod
- React Router
- Vite

## ✨ Funcionalidades

- Sistema de autenticação completo
- Interface responsiva e moderna
- Validação de formulários com Zod
- Gerenciamento de estado com Context API
- Rotas protegidas
- Persistência de dados com Firebase

## 🛠️ Instalação

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/board-kanban.git
```

2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Preencha as variáveis no arquivo `.env` com suas credenciais do Firebase.

4. Inicie o projeto

```bash
npm run dev
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza a build de produção localmente

## 🔧 Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Habilite a autenticação por email/senha
3. Configure o Firestore Database
4. Copie as credenciais do projeto para o arquivo `.env`

## 📁 Estrutura do Projeto

    src/
    ├── assets/        # Arquivos estáticos
    ├── components/    # Componentes reutilizáveis
    ├── contexts/      # Contextos do React
    ├── layouts/       # Layouts da aplicação
    ├── pages/         # Páginas da aplicação
    ├── routes/        # Configuração de rotas
    ├── services/      # Serviços e integrações
    └── ...            # Outros arquivos ou diretórios

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor - Guilherme Sanches
