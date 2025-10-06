# Sistema de Calculadora - Backend

## Description
Calculadora apenas de Soma - Backend REST API

## Features
- Soma de números: Permite ao usuário inserir dois números e obter o resultado da soma entre eles
- Interface numérica: Disponibiliza botões numéricos de 0 a 9 para entrada de valores
- Botão de soma: Fornece um botão específico para a operação de soma (+)
- Exibição de resultado: Apresenta o resultado da operação de soma em um display digital
- Botão de limpar: Permite ao usuário limpar a entrada atual e reiniciar a operação

## Technology Stack
- Node.js with Express 5.1.0
- TypeScript 5.9.3
- SQL Server Database
- Zod for validation

## Getting Started

### Prerequisites
- Node.js 20.x LTS or higher
- SQL Server instance
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## API Documentation

### Base URL
- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check
```
GET /health
```

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts              # Application entry point
```

## Contributing

Please follow the established coding standards and patterns defined in the project documentation.

## License

Private - All rights reserved