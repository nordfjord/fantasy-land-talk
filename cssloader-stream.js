import f from 'flyd'
const { stream, on } = f

import { tap } from 'ramda'

import Maybe from 'data.maybe'

const basePath = stream('./styles')
const themePath = stream(localStorage.theme || '_default')
const cssPath = stream(base => theme => `${base}/${theme}`)
  .ap(basePath)
  .ap(themePath)

const loadCSS = cssPath =>
  Maybe.fromNullable(document.head.querySelector('link'))
    .orElse(() =>
      Maybe.Just(document.createElement('link')).map(
        tap(l => document.head.append(l))
      )
    )
    .map(link => {
      link.rel = 'stylesheet'
      link.href = `${cssPath}/main.css`
    })

on(loadCSS, cssPath)
on(theme => (localStorage.theme = theme), themePath)

document.querySelectorAll('.theme-selector').forEach(el => {
  el.onclick = () => {
    themePath(el.dataset.theme)
  }
})
