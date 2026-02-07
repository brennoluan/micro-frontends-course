# 📚 Plano Completo - Curso Micro Frontends na Prática

## 🎯 Visão Geral do Curso

### Objetivos Pedagógicos
- Compreender os conceitos fundamentais de Micro Frontends
- Implementar a mesma aplicação usando 3 abordagens diferentes
- Comparar vantagens e desvantagens de cada técnica
- Entender quando usar cada abordagem

### Público-Alvo
- Desenvolvedores Frontend com experiência em React
- Arquitetos de software interessados em escalabilidade
- Tech leads planejando migração para micro frontends

### Pré-requisitos
- JavaScript/TypeScript intermediário
- React (hooks, context, estado)
- Conhecimento básico de build tools (Webpack/Vite)
- Git e terminal

---

## 🏗️ Arquitetura do Projeto

### Estrutura do Monorepo (Turborepo)

```
micro-frontends-course/
├── apps/
│   ├── api-backend/              # Backend Express
│   ├── shell-singlespa/          # Container Single-spa (Aula 2)
│   ├── shell-mf/                 # Container Module Federation (Aula 3)
│   ├── shell-native/             # Container Native Federation (Aula 4)
│   ├── mfe-login-singlespa/      # Login com Single-spa
│   ├── mfe-login-mf/             # Login com Module Federation
│   ├── mfe-login-native/         # Login com Native Federation
│   └── web-simple/               # App monolítica (Aula 1)
├── packages/
│   ├── ui/                       # Design system
│   ├── store/                    # Redux store compartilhada
│   ├── types/                    # TypeScript types
│   └── utils/                    # Utilities
└── docs/                         # Documentação do curso
```

### Stack Tecnológica

#### Geral
- **Node.js**: 18+ LTS
- **Package Manager**: pnpm 8+ (workspaces + eficiência)
- **Build Tool**: Turborepo (cache, paralelização)
- **TypeScript**: 5.3+
- **React**: 18.2+

#### Design System (`packages/ui`)
- **Styling**: Tailwind CSS 3.4 + Class Variance Authority
- **Animations**: Framer Motion 11.0
- **Theme**: Modern & Clean (Indigo primary color)
- **Componentes**: Button, Input, Card, Modal, Form, LoadingSpinner

#### State Management (`packages/store`)
- **Redux Toolkit**: 2.0+
- **Slices**: auth, cart, books, favorites
- **Pattern**: Store factory para compartilhamento entre MFEs

#### Backend (`apps/api-backend`)
- **Framework**: Express 4.18
- **Authentication**: JWT com bcryptjs
- **Validation**: Zod
- **Data**: Mock data em memória (30 livros)

---

## 📖 Plano de Aulas Detalhado

### 🎬 Aula 1: Introdução a Micro Frontends

#### Vídeos Teóricos (60min)
1. **O problema dos Monolitos Frontend** (8min)
   - Scaling teams vs scaling code
   - Deploy coupling
   - Technology lock-in

2. **O que são Micro Frontends** (10min)
   - Definição e conceitos
   - Analogia do shopping (lojas independentes)
   - Vertical slicing vs horizontal

3. **Tipos de integração** (12min)
   - Build-time integration
   - Server-side composition
   - Client-side composition (runtime)

4. **Comunicação entre Micro Frontends** (10min)
   - Custom events
   - Shared state (Redux)
   - URL-based communication
   - Cross-MFE messaging

5. **Visão geral das 3 abordagens** (10min)
   - Single-spa: Pioneiro, framework-agnostic
   - Module Federation: Webpack native, code sharing
   - Native Federation: Vite-based, fast DX

6. **Arquitetura do projeto do curso** (10min)
   - Tour pelo monorepo
   - Pacotes compartilhados
   - Backend API

#### Vídeos Práticos (90min)
7. **Configurando o Monorepo com Turborepo** (15min)
   - Setup pnpm workspaces
   - Configurar turbo.json
   - Scripts úteis (dev:aula1, dev:aula2)
   - Demonstração de cache e paralelização

8. **Criando o Design System** (25min)
   - Setup Tailwind + CVA
   - Implementar Button (variants + animações)
   - Implementar Input + Form
   - Build com tsup
   - Consumir em outra app

9. **Configurando Redux (RTK) Compartilhado** (20min)
   - Setup do pacote store
   - Criar authSlice, booksSlice, favoritesSlice
   - Factory pattern: createSharedStore()
   - Testar store isoladamente

10. **Conhecendo o Backend da Aplicação** (15min)
    - Visão geral da API REST
    - Endpoints disponíveis
    - Testar com Thunder Client
    - Types TypeScript compartilhados

11. **Implementando a App Web Simples** (15min)
    - Setup Vite + React
    - Listagem de livros com busca e filtros
    - Sistema de favoritos
    - Header com autenticação

**Duração total**: ~2h 30min

---

### ⚡ Aula 2: Single-spa

#### Vídeos (2h)
1. **Entendendo Single-spa** (15min)
   - Conceitos: apps, parcels, utility modules
   - Lifecycle methods
   - Import maps
   - Quando usar Single-spa

2. **Configurando o Shell (Root Config)** (20min)
   - Criar projeto shell
   - Setup import maps
   - Registrar aplicações
   - Layout básico

3. **Criando o MFE de Login** (25min)
   - Setup single-spa-react
   - Implementar formulários
   - Usar design system compartilhado
   - Integrar com Redux

4. **Comunicação MFE ↔ Shell** (20min)
   - Custom events (auth:login, auth:logout)
   - Sincronizar estado
   - Passar props entre MFEs

5. **Compartilhando dependências** (15min)
   - Shared dependencies no import map
   - Evitar duplicação de React
   - Versionamento

6. **Testando e debugando** (15min)
   - Single-spa Inspector
   - DevTools
   - Debug de lifecycle

7. **Deploy** (10min)
   - Build para produção
   - Deploy independente dos MFEs
   - CDN strategy

**Duração total**: ~2h

---

### 🔌 Aula 3: Module Federation

#### Vídeos (2h)
1. **O que é Module Federation** (15min)
   - Webpack 5 native feature
   - Host vs Remote
   - Shared modules
   - Comparação com Single-spa

2. **Configurando o Shell (Host)** (20min)
   - Setup Webpack 5
   - ModuleFederationPlugin
   - Definir remotes
   - Shared dependencies

3. **Criando o MFE de Login (Remote)** (25min)
   - Setup como remote
   - Expor componentes
   - Reutilizar design system
   - Bootstrap pattern

4. **Consumindo o MFE no Shell** (15min)
   - Dynamic imports
   - Error boundaries
   - Loading states

5. **Compartilhamento avançado** (20min)
   - Singleton dependencies
   - Eager vs Lazy loading
   - Version mismatches

6. **Comunicação entre Host e Remote** (15min)
   - Props drilling
   - Manter Redux compartilhado
   - Cross-MFE calls

7. **Error Boundaries e fallbacks** (10min)
   - Handling remote failures
   - Graceful degradation
   - Retry strategies

**Duração total**: ~2h

---

### 🚀 Aula 4: Native Federation

#### Vídeos (2h 30min)
1. **Por que Native Federation?** (15min)
   - Vite vs Webpack
   - Performance comparison
   - Build time gains
   - HMR speed

2. **Configurando o Shell com Vite** (20min)
   - Setup Vite
   - @softarc/native-federation
   - Configurar remotes
   - Shared dependencies

3. **Criando o MFE de Login com Vite** (25min)
   - Setup como remote
   - Expor módulos
   - Fast Refresh
   - Build optimization

4. **Carregamento dinâmico** (15min)
   - Dynamic imports
   - Lazy loading
   - Code splitting

5. **Inicialização e bootstrap** (15min)
   - Bootstrap process
   - Init hooks
   - Shared runtime

6. **Desenvolvimento e HMR** (15min)
   - Fast Refresh
   - Hot reload
   - Dev experience

7. **Build e deploy** (15min)
   - Production build
   - Chunking strategy
   - CDN deployment

8. **Comparativo Final** (30min)
   - Tabela side-by-side
   - Métricas de performance
   - Casos de uso
   - Recomendações
   - Tendências futuras

**Duração total**: ~2h 30min

---

## 📊 Comparativo das Abordagens

| Aspecto | Single-spa | Module Federation | Native Federation |
|---------|-----------|-------------------|-------------------|
| **Setup Complexity** | ⭐⭐⭐ | ⭐⭐ | ⭐ |
| **Build Speed** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **HMR Speed** | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Code Sharing** | Manual | Automático | Automático |
| **Framework Agnostic** | ✅ | ⚠️ (Webpack) | ⚠️ (Vite) |
| **Community** | Grande | Muito Grande | Crescendo |
| **Quando Usar** | Multi-framework | Webpack ecosystem | Vite ecosystem |

---

## 🎨 Design System - LeiaAqui

### Paleta de Cores

```css
/* Primary Color - Indigo */
--primary-50: #eef2ff
--primary-500: #6366f1  /* Main */
--primary-600: #4f46e5
--primary-700: #4338ca

/* Grays */
--gray-50: #f9fafb
--gray-500: #6b7280
--gray-900: #111827

/* States */
--success: #10b981
--error: #ef4444
--warning: #f59e0b
```

### Tipografia
- **Font**: Inter (Google Fonts)
- **Heading 1**: 2.25rem (36px), font-bold
- **Heading 2**: 1.875rem (30px), font-semibold
- **Body**: 1rem (16px), font-normal
- **Small**: 0.875rem (14px)

### Componentes

#### Button
```tsx
<Button variant="primary" size="md">
  Clique aqui
</Button>
```
- Variants: primary, secondary, danger, outline, ghost
- Sizes: sm, md, lg
- States: isLoading, disabled

#### Modal
```tsx
<Modal isOpen={true} onClose={handleClose}>
  Conteúdo
</Modal>
```
- Animações: fade + scale com Framer Motion
- Backdrop com blur
- ESC para fechar

---

## 🔧 Scripts Úteis

```bash
# Desenvolvimento
pnpm run dev:simple          # Aula 1
pnpm run dev:aula2           # Single-spa
pnpm run dev:aula3           # Module Federation
pnpm run dev:aula4           # Native Federation

# Build
pnpm run build               # Build all
pnpm run build --filter=@repo/ui  # Build específico

# Lint & Type Check
pnpm run lint
pnpm run type-check
```

---

## ✅ Checklist de Progresso

### Aula 1 - Fundação
- [x] Setup Turborepo
- [x] Design System (UI package)
- [x] Redux Store (store package)
- [x] Backend API
- [x] App Web Simples

### Aula 2 - Single-spa
- [ ] Shell Single-spa
- [ ] MFE Login Single-spa
- [ ] Comunicação cross-MFE
- [ ] Deploy

### Aula 3 - Module Federation
- [ ] Shell Module Federation
- [ ] MFE Login Module Federation
- [ ] Shared dependencies
- [ ] Deploy

### Aula 4 - Native Federation
- [ ] Shell Native Federation
- [ ] MFE Login Native Federation
- [ ] Comparativo final
- [ ] Deploy

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Single-spa](https://single-spa.js.org/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Native Federation](https://www.npmjs.com/package/@softarc/native-federation)
- [Turborepo](https://turbo.build/)

### Artigos Recomendados
- [Micro Frontends - Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)
- [Module Federation - Zack Jackson](https://module-federation.io/)

---

## 🎯 Critérios de Sucesso

### Técnicos
- ✅ 3 implementações funcionando perfeitamente
- ✅ Backend respondendo corretamente
- ✅ Design System reutilizado
- ✅ Redux compartilhado funcionando
- ✅ Zero duplicação de React em runtime
- ✅ HMR funcionando em todas as versões

### Pedagógicos
- ✅ Aluno entende QUANDO usar cada abordagem
- ✅ Aluno sabe debugar problemas comuns
- ✅ Aluno consegue implementar próprio MFE
- ✅ Código serve como template reutilizável

---

**Última atualização**: 07/02/2026
