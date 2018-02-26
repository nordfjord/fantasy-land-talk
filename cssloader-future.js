import Future from 'fluture'
import Maybe from 'data.maybe'
import { theme } from './user'

import { always, identity, compose, path } from 'ramda'

const request = Future.encaseP(url => fetch(url).then(res => res.json()))

const basePath = Future.of('./styles')
const themePath = theme
const cssPath = Future.of(basePath => themePath => `${basePath}/${themePath}`)
  .ap(basePath)
  .ap(themePath)

const createStyleSheet = () => {
  const link = document.createElement('link')

  link.rel = 'stylesheet'

  document.head.append(link)

  return link
}

const loadCSS = cssPath => {
  const href = Maybe.Just(`${cssPath}/main.css`)
  const link = Maybe.fromNullable(document.head.querySelector('link')).orElse(
    () => Maybe.Just(createStyleSheet())
  )

  Maybe.Just(link => href => (link.href = href))
    .ap(link)
    .ap(href)
}

const setTheme = theme => (localStorage.theme = theme)

const reloadTheme = () => cssPath.fork(console.error, loadCSS)

document.querySelectorAll('.theme-selector').forEach(el => {
  el.onclick = compose(
    reloadTheme,
    setTheme,
    path(['target', 'dataset', 'theme'])
  )
})
