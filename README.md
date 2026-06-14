# LuisFernando-dso.github.io

Data Science Portfolio | Projetos, analises, visualizacoes e estudos desenvolvidos ao longo da minha formacao em Ciencia de Dados.

Este projeto e um portfolio profissional, moderno e responsivo para um estudante de Ciencia de Dados do primeiro periodo. Ele foi pensado para apresentar a evolucao academica desde o inicio da graduacao, com espaco para adicionar futuros projetos de Estatistica, Machine Learning, Visualizacao de Dados e Python.

## Tecnologias utilizadas

- HTML5 semantico
- CSS3 com variaveis, responsividade, glassmorphism e animacoes
- JavaScript ES6+
- JSON para manutencao dos projetos
- SVGs locais para imagens, icones e favicon
- Formspree para formulario de contato estatico
- GitHub Pages para publicacao

## Estrutura de arquivos

```text
portfolio/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
|-- assets/
|   |-- images/
|   |   |-- profile.svg
|   |   |-- project-analysis.svg
|   |   |-- project-dashboard.svg
|   |   |-- project-ml.svg
|   |   |-- project-sql.svg
|   |   |-- project-statistics.svg
|   |   `-- project-viz.svg
|   |-- icons/
|   |   |-- excel.svg
|   |   |-- favicon.svg
|   |   |-- git.svg
|   |   |-- github.svg
|   |   |-- jupyter.svg
|   |   |-- matplotlib.svg
|   |   |-- ml.svg
|   |   |-- numpy.svg
|   |   |-- pandas.svg
|   |   |-- powerbi.svg
|   |   |-- python.svg
|   |   |-- scikit.svg
|   |   |-- sql.svg
|   |   `-- statistics.svg
|   `-- data/
|       |-- curriculo.pdf
|       `-- projects.json
`-- README.md
```

## Como publicar no GitHub Pages

1. Crie um repositorio no GitHub.
2. Envie a pasta `portfolio` para o repositorio.
3. No GitHub, acesse `Settings` > `Pages`.
4. Em `Build and deployment`, selecione `Deploy from a branch`.
5. Escolha a branch principal, normalmente `main`, e a pasta `/root`.
6. Salve as alteracoes e aguarde a URL publica ser gerada.

Se o conteudo estiver dentro da pasta `portfolio`, voce pode mover os arquivos para a raiz do repositorio ou configurar a publicacao a partir de uma branch/pasta compativel com sua organizacao.

## Como personalizar o conteudo

No arquivo `index.html`, substitua:

- `Seu Nome Completo`
- `Nome da Universidade`
- `seu-usuario`
- `seu.email@exemplo.com`
- Links do GitHub e LinkedIn
- Textos de apresentacao
- Dados da formacao academica

Substitua tambem o arquivo `assets/data/curriculo.pdf` pelo seu curriculo real.

## Como configurar o Formspree

1. Acesse [https://formspree.io](https://formspree.io).
2. Crie uma conta gratuita.
3. Crie um novo formulario.
4. Copie o endpoint gerado.
5. No `index.html`, altere:

```html
action="https://formspree.io/f/SEU_ENDPOINT"
```

para o endpoint real do seu formulario.

## Como adicionar novos projetos

Edite o arquivo `assets/data/projects.json` e adicione um novo objeto seguindo este modelo:

```json
{
  "title": "Nome do Projeto",
  "description": "Descricao curta e objetiva do projeto.",
  "image": "assets/images/sua-imagem.svg",
  "imageAlt": "Descricao acessivel da imagem",
  "categories": ["Analise de Dados", "Python"],
  "technologies": ["Python", "Pandas", "Matplotlib"],
  "github": "https://github.com/seu-usuario/seu-projeto",
  "demo": "https://seu-usuario.github.io/seu-projeto/"
}
```

Categorias disponiveis:

- Analise de Dados
- Machine Learning
- Visualizacao
- Estatistica
- Python

## Funcionalidades

- Tema escuro por padrao com alternancia para tema claro
- Navbar fixa com destaque da secao ativa
- Menu responsivo para celular
- Scroll suave
- Botao voltar ao topo
- Hero com particulas e parallax discreto
- Cards de habilidades com barras animadas
- Timeline academica
- Projetos carregados via JSON
- Filtros de projetos por categoria
- Contadores animados no dashboard
- Carrossel automatico de tecnologias
- Formulario visual preparado para Formspree
- SEO, Open Graph, favicon e Schema.org

## Boas praticas aplicadas

- Separacao entre HTML, CSS, JavaScript e dados
- HTML semantico
- CSS com variaveis para facilitar manutencao
- JavaScript modular e sem dependencias externas
- Assets locais para melhor desempenho
- Suporte a `prefers-reduced-motion`
- Textos alternativos em imagens relevantes
- Layout responsivo para desktop, tablet e celular

## Proximos passos sugeridos

- Adicionar uma foto real em `assets/images/profile.svg` ou trocar por `.jpg`/`.png`.
- Substituir o curriculo placeholder pelo curriculo final.
- Atualizar o arquivo `projects.json` conforme projetos reais forem criados.
- Incluir certificados concluidos na timeline.
- Conectar links reais de demonstracao dos projetos.
