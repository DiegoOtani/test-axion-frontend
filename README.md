# Frontend do Projeto desenvolvido para o teste técnico da AxionCompany

## 📌 Considerações
* Este frontend foi desenvolvido como parte de um desafio técnico da empresa AxionCompany.
* O layout seguiu o protótipo https://marvelapp.com/35gh79g


## 🚀 Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jose](https://www.npmjs.com/package/jose)

## 📦 Instalação

1. **Clone o repositório**  
   ```sh
   git clone https://github.com/DiegoOtani/test-axion-frontend.git
   cd axios-test-frontend
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente**
   * Crie um arquivo **.env** na raíz do projeto e adicione
   ```sh
    BACKEND_API_URL=url_da_api
    JWT_SECRET=jwt_secret_usado_no_backend
   ```

   * Para rodar localmente com as configurações iniciais do projeto adicione:
   ```sh
    BACKEND_API_URL=http://localhost:1337
    JWT_SECRET=0e3b9387-0de2-4b74-b406-7eb5edcf869c
   ```

4. **Execute o projeto**
    ```sh
    npm run dev
    ```

    **O frontend estará disponível em:http://localhost:3000**

## 📌 Estrutura de Pastas

```bash
  /src
    ├── actions
    ├── app
    │    ├── globals.css
    │    ├── layout.tsx
    │    ├── page.tsx
    │    ├── foods
    │    │   ├── [id]/page.tsx
    │    ├── login
    │    │   ├── page.tsx
    │    ├── people
    │    │   ├── [id]/page.tsx
    │    │   ├── page.tsx
    │    ├── place
    │    │   ├── [id]/page.tsx
    │    │   ├── page.tsx
    │
    ├── components
    ├── contexts
    ├── types
    ├── utils
    ├── middleware.ts
```

## 🔗 Funcionalidades Implementadas

* ✅ Login e registro de usuário
* ✅ Listagem de alimentos
* ✅ Página de detalhes de alimentos
* ✅ Listagem de pessoas
* ✅ Página de detalhes de pessoas
* ✅ Listagem de lugares
* ✅ Página de detalhes de lugares
* ✅ Autenticação com JWT

## 🚀 Como Conectar ao Backend?

- O frontend se conecta automaticamente ao backend pelo NEXT_PUBLIC_BACKEND_API_URL. Caso o backend esteja rodando localmente, ele deve estar acessível em http://localhost:1337.

 - O backend está disponível em: https://github.com/DiegoOtani/test-axion-backend

## 📌 Considerações Finais

* O projeto foi desenvolvido como parte de um desafio técnico para AxiosCompany.
* O backend utiliza Strapi e pode ser acessado via API.
* O frontend foi desenvolvido com *Next.js 15* e *App Router*, usando fetch para consumir a API e mostrar os dados dinamicamente.
