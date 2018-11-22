# Interface Pagamento

Este projeto cria uma interface de pagamento como teste técnico
para a Vality.

## Scripts disponíveis

No diretório raiz do projeto você pode rodar:

`npm start`

Rode a aplicação no modo de desenvolvimento<br>
Abra [http://localhost:1234](http://localhost:1234) para ver no navegador.

## Testes

Para rodar os testes do projeto:

`npm test`

## Build

Para gerar o pacote de produção rodar o comando:

`npm run-script build`

## Tecnologias Utilizas

Foram utilizadas as seguintes tecnologias

### Parcel

Utilizada como servidor de desenvolvido e build. O Parcel
consegue compilar a aplicação e entregar um pacote completo
com seus arquivos processados. Possui Hot-module-replacement
nativo e sua configuração é praticamente nenhuma.

### Boostrap

Como framework css foi escolhido o Bootstrap v.4. Tanto pela sua
versatilidade, quanto pela quantidade de Helpers que praticamente
elimina a necessidade de escrever estilos, o bootstrap ajuda na
tarefa de deixar as interfaces responsivas com pouquíssima intervenção.

### Sass

Apesar de pouco necessário, foi utilizado o Sass para gerar o css. O Sass
permite uma melhor organização dos estilos e utilizado junto ao React e Parcel
fica atrelado ao componente que é desenvolvido.

### React

As interface foram criados utilizado principalmente a biblioteca React. Os componentes
foram separados e isolados sempre que possível. O React permite que sejam criados componentes
mínimos, que podem ser reaproveitados em varias partes do código.
