# Sistema de Calculadora

Calculadora simples de soma desenvolvida com React, TypeScript e TailwindCSS.

## Recursos

- Interface numérica (0-9)
- Operação de soma (+)
- Display de resultado
- Botão de limpar

## Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.1.9
- TailwindCSS 4.1.14
- React Router 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3001`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/              # Configuração da aplicação
├── assets/           # Recursos estáticos
├── core/             # Componentes e utilitários compartilhados
├── domain/           # Domínios de negócio
└── pages/            # Páginas da aplicação
```

## Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Licença

MIT