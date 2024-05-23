# Maime

This is a Movie information app, kinda like [IMDb](https://imdb.com/), for learning purposes written in [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/) and [Vuetify](https://vuetifyjs.com). It's a Front-end application designed for mobile devices, using the free and open APIs of [The Movie Database (TMDB)](https://www.themoviedb.org)

This is a educational project.

| Home                         | Search                           | Movie                          |
| ---------------------------- | -------------------------------- | ------------------------------ |
| ![Home Page](/docs/Home.png) | ![Search Page](/docs/Search.png) | ![Movie Page](/docs/Movie.png) |

## Features

It's a very simple application, with the intention to get the feel and vibes of Vue, so it has just a couple of features

- Popular recent movies shown on Home screen, with infinite scroll;
- A search page;
- A detailed information for movies;
- Multilanguage support (english and portuguese);
- Theme selection;

## Development

```sh
npm install
npm run dev
npm run build
```

Application will be available in https://localhost:3000

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Design choices

It was past the time I should learn Vue, so I decided to make a very simple app, no auth, no user information, just a simple display of movie's information. I went for a very conventional UI inspired by IMDb desigs but simplified.

## Exaustive dependencies list

- Vue 3, Vuetify, tailwind, sass
- vue-i18n
- axios, @tanstack/vue-query
- Vite

## Considerations (2024)

Not much to say about it. Nowadays JS frameworks are converging into a more unified developer experience, so by been a main React developer I didn't had major issues.
Apart from the different "syntax", all react architectures I needed (hooks and providers) exists in a similar way in Vue.
I found Vuetify a little (just a little) more cumbersome to use compared to Material UI, but all went smooth.

In the end, I'm happy about the results and more confident that, if I happens to work with Vue in the future, I would have a good experience.

## Special Thanks

- [TMDB](https://developer.themoviedb.org/docs/getting-started) for it's great and free API.
