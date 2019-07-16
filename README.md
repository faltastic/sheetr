# sheetr

**React for Frontend**
**+**
**Google Sheets for Content**

This is a website template built on React and a filterable database on Google Sheets.

You can use the database to hold any type of linked media content, text, or even HTML snippets. This means you can create pages like a portfolio, an events program, or a personal blog.

[live demo](https://faltastic.github.io/sheetr/)

[demo Google Sheet](https://docs.google.com/spreadsheets/d/117qsaEFQLenUyr6RPyYMPYJtkur_7vBK_NA9hepH6xQ/)

### Why?

Because the content creators' working spreadsheet is already a database.

Because when working with a small team, they already use spreadsheets to prepare their data before publishing them online. Using the Google sheet as database means they don't have to re-enter the data somewhere else, and they can update it whenever they want.

Using [tabletop](https://www.npmjs.com/package/tabletop), this app fetches the data directly from the working sheet, and whenever it's updated, it's instantly visible on the live website.

### Usage

`npm install` to install dependencies

The rest is standard Create React App

`npm run start` to run and start a dev server

`npm run build` to build the app into `/public`

As I am deploying the demo to github, i set up a `homepage` in `package.json` and i run `npm run deploy` to update the live page

#### Sheets API

If you are familiar with publishing a Google Sheet, you can simply copy the demo sheet linked above and update the SheetID variable to your newly created one in `/src/Sheetr/Sheetr.js`.

If not, here is an excellent [step-by-step tutorial](https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59) on how to setup your Google Sheet and use it with Tabletop React.

#### .env

`SASS_PATH=node_modules:src` is to set the root directory for node-sass

`REACT_APP_RELOAD_SHEET_ALWAYS=false`

- **false** to only load the data once and save it to the browser's sessionStorage and grab it locally afterwards. This is to optimize speed for a production-ready data.
- use **true** if the data is not final yet and you want to reload the newest version of the Google Sheet on each refresh

### App Architecture

#### Structure

```
├── About.js
├── Footer.js
├── index.js
├── Intro.js
├── NavBar.js
├── styles/...
└── Sheetr
    ├── AllArticles.js
    ├── Article.js
    ├── ArticleOpen.js
    ├── formatDateTime.js
    └── Sheetr.js
```

#### Routing

The app has standard webpage structure and in `src/index.js` routing is used for the body of the page while the NavBar and Footer are on every page.

The body of the page is either `Intro.js` which is the homepage or `About.js` or `/Sheetr/Sheetr.js` which show the whole program or a specific "article" if the article ID is included in URL, for example https://faltastic.github.io/sheetr/#/program/8

#### Design and Styling Articles

As much as possible, I tried to de-couple the components logic and routing from the design.

The two components `Article` and `ArticleOpen` use as props only the data content of the article to be displayed. In this way, it's easy to change what they render independently from the rest of the app. They also call their own sass files in `/src/styles/` with corresponding names.

Likewise, the program page with its filters and grid components are separate and editable in `/src/Sheetr/AllArticles.js`. While the filters are developed into custom functions and are called into React Hooks, the grid is made with the help of `react-masonry-css`.

I am loading images using the excellent react-progressive-image.

### Demo Content

The program section is a demo of a program of events filterable by dates and categories. Each event has data such as title, artist/author, photo, location, teaser_text, and text.

This dataset is a small experiment in using machine generated demo content for webpages. The text data were entirely generated with the help of [TalkToTransformer](https://talktotransformer.com/) which uses the OpenAI [GPT-2 language model](https://openai.com/blog/better-language-models/).

The images are custom curated to the text. Each photo is credited in its article's text and they are "beautiful, free images gifted by the world's most generous community of photographers" from [Unsplash](https://unsplash.com/).
