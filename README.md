# Portfólio de Ciência de Dados

Portfólio profissional, moderno e responsivo para um estudante de Ciência de Dados do primeiro período. O projeto foi pensado para apresentar a evolução acadêmica desde o início da graduação, com espaço para adicionar futuros projetos de Estatística, Machine Learning, Visualização de Dados e Python.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 com variáveis, responsividade, glassmorphism e animações
- JavaScript ES6+
- JSON para manutenção dos projetos
- SVGs locais para imagens, ícones e favicon
- Formspree para formulário de contato estático
- GitHub Pages para publicação

## Estrutura de arquivos

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.svg
│   │   ├── project-analysis.svg
│   │   ├── project-dashboard.svg
│   │   ├── project-ml.svg
│   │   ├── project-sql.svg
│   │   ├── project-statistics.svg
│   │   └── project-viz.svg
│   ├── icons/
│   │   ├── excel.svg
│   │   ├── favicon.svg
│   │   ├── git.svg
│   │   ├── github.svg
│   │   ├── jupyter.svg
│   │   ├── matplotlib.svg
│   │   ├── ml.svg
│   │   ├── numpy.svg
│   │   ├── pandas.svg
│   │   ├── powerbi.svg
│   │   ├── python.svg
│   │   ├── scikit.svg
│   │   ├── sql.svg
│   │   └── statistics.svg
│   └── data/
│       ├── curriculo.pdf
│       └── projects.json
└── README.md
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie a pasta `portfolio` para o repositório.
3. No GitHub, acesse `Settings` > `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch principal, normalmente `main`, e a pasta `/root`.
6. Salve as alterações e aguarde a URL pública ser gerada.

Se o conteúdo estiver dentro da pasta `portfolio`, você pode mover os arquivos para a raiz do repositório ou configurar a publicação a partir de uma branch/pasta compatível com sua organização.

## Como personalizar o conteúdo

No arquivo `index.html`, substitua:

- `Seu Nome Completo`
- `Nome da Universidade`
- `seu-usuario`
- `seu.email@exemplo.com`
- Links do GitHub e LinkedIn
- Textos de apresentação
- Dados da formação acadêmica

Substitua também o arquivo `assets/data/curriculo.pdf` pelo seu currículo real.

## Como configurar o Formspree

1. Acesse [https://formspree.io](https://formspree.io).
2. Crie uma conta gratuita.
3. Crie um novo formulário.
4. Copie o endpoint gerado.
5. No `index.html`, altere:

```html
action="https://formspree.io/f/SEU_ENDPOINT"
```

para o endpoint real do seu formulário.

## Como adicionar novos projetos

Edite o arquivo `assets/data/projects.json` e adicione um novo objeto seguindo este modelo:

```json
{
  "title": "Nome do Projeto",
  "description": "Descrição curta e objetiva do projeto.",
  "image": "assets/images/sua-imagem.svg",
  "imageAlt": "Descrição acessível da imagem",
  "categories": ["Análise de Dados", "Python"],
  "technologies": ["Python", "Pandas", "Matplotlib"],
  "github": "https://github.com/seu-usuario/seu-projeto",
  "demo": "https://seu-usuario.github.io/seu-projeto/"
}
```

Categorias disponíveis:

- Análise de Dados
- Machine Learning
- Visualização
- Estatística
- Python

## Funcionalidades

- Tema escuro por padrão com alternância para tema claro
- Navbar fixa com destaque da seção ativa
- Menu responsivo para celular
- Scroll suave
- Botão voltar ao topo
- Hero com partículas e parallax discreto
- Cards de habilidades com barras animadas
- Timeline acadêmica
- Projetos carregados via JSON
- Filtros de projetos por categoria
- Contadores animados no dashboard
- Carrossel automático de tecnologias
- Formulário visual preparado para Formspree
- SEO, Open Graph, favicon e Schema.org

## Boas práticas aplicadas

- Separação entre HTML, CSS, JavaScript e dados
- HTML semântico
- CSS com variáveis para facilitar manutenção
- JavaScript modular e sem dependências externas
- Assets locais para melhor desempenho
- Suporte a `prefers-reduced-motion`
- Textos alternativos em imagens relevantes
- Layout responsivo para desktop, tablet e celular

## Próximos passos sugeridos

- Adicionar uma foto real em `assets/images/profile.svg` ou trocar por `.jpg`/`.png`.
- Substituir o currículo placeholder pelo currículo final.
- Atualizar o arquivo `projects.json` conforme projetos reais forem criados.
- Incluir certificados concluídos na timeline.
- Conectar links reais de demonstração dos projetos.
