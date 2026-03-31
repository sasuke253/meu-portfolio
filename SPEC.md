# Portfolio - Especificação do Projeto

## 1. Visão Geral do Projeto
- **Nome**: Portfolio Pessoal
- **Tipo**: Site single-page com navegação por abas
- **Funcionalidade**: Apresentação profissional com abas interativas para projetos, sobre, skills e contato
- **Público-alvo**: Recrutadores, clientes e visitantes em geral

## 2. Estrutura UI/UX

### Layout
- **Header fixo** com navegação por abas
- **Seção Hero** com destaque pessoal
- **Abas principais**: Sobre | Projetos | Skills | Contato
- **Footer** com redes sociais

### Design Visual
- **Paleta de cores**:
  - Background: #0a0a0f (preto profundo)
  - Surface: #14141f (card escuro)
  - Primary: #00d4aa (verde água vibrante)
  - Secondary: #7c3aed (roxo)
  - Text: #e4e4e7 (cinza claro)
  - Muted: #71717a (cinza)

- **Tipografia**:
  - Headings: "Outfit" (Google Fonts) - weights 600, 700
  - Body: "DM Sans" (Google Fonts) - weights 400, 500

- **Efeitos**:
  - Gradiente sutil no hero
  - Hover nos cards com scale e glow
  - Transições suaves (0.3s)
  - Borda sutil nos cards

### Componentes
1. **Navegação por abas** - estilo pills, ativo com highlight
2. **Cards de projetos** - imagem, título, descrição, tags, links
3. **Cards de skills** - ícone + nome, com hover
4. **Formulário de contato** - campos válidos com feedback visual
5. **Links sociais** - ícones com hover effect

## 3. Funcionalidades

### Abas
- **Sobre**: Foto/avatar, bio, experiência breve
- **Projetos**: Grid de cards com projetos (placeholder)
- **Skills**: Lista de habilidades técnicas
- **Contato**: Formulário + informações de contato

### Interações
- Troca de abas sem reload
- Animações de entrada nos elementos
- Hover states em todos elementos interativos
- Scroll suave

## 4. Critérios de Aceitação
- [ ] Site carrega sem erros
- [ ] Abas funcionam corretamente
- [ ] Design responsivo (mobile/tablet/desktop)
- [ ] Animações suaves
- [ ] Formulário com validação básica
- [ ] Todos os links funcionais (placeholder #)
