const createStyleSheet = href => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'

  link.href = href

  document.head.append(link)

  return link
}

const createStyleSheet = href => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'

  link.href = href

  document.head.append(link)

  return link
}

const loadCSS = cssPath => createStyleSheet(`./styles/_default/main.css`)

document.querySelectorAll('.theme-selector').forEach(el => {
  el.onclick = () => {
    localStorage.theme = el.dataset.theme
  }
})
