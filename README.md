# 🗣️ Let me Ask

Projeto desenvolvido durante o evento NLW Agents para a praticar o uso de agentes inteligentes na web.

## 📝 Sobre o projeto
Este projeto é uma aplicação web chamada Let me Ask, desenvolvida para facilitar a criação de salas de perguntas e respostas em tempo real. Ele permite que os usuários criem salas, façam perguntas e recebam respostas geradas por inteligência artificial. A aplicação é ideal para eventos, palestras, workshops ou qualquer situação em que seja necessário coletar e responder perguntas de forma organizada e interativa.

## 🛠️ Funcionalidades Principais

- Criação de Salas: Os usuários podem criar salas personalizadas para organizar perguntas e respostas.
- Envio de Perguntas: Participantes podem enviar perguntas para as salas criadas.
- Respostas com IA: As perguntas podem ser respondidas automaticamente utilizando inteligência artificial.
- Gravação de Áudio: Permite gravar áudios dentro de uma sala e enviá-los para o servidor.
- Interface Intuitiva: Design moderno e responsivo, com integração ao TailwindCSS para uma experiência de usuário fluida.
- Gerenciamento de Salas: Exibição de salas recentes e contagem de perguntas realizadas.

## 🚀 Tecnologias

- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Biblioteca de roteamento
- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones

## 📂 Padrões de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
src/
├── components/ui/    # Componentes de interface
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── app.tsx          # Componente raiz
``` 
