import Future from 'fluture'

const createStyleSheet = href => {
  const link = document.createElement('link')

  link.rel = 'stylesheet'
  link.href = href

  return link
}

const loadCSS = cssPath => {
  const link = createStyleSheet(`${cssPath}/main.css`)

  document.head.append(link)
}

loadCSS(`./styles/_default`)

document.querySelectorAll('.theme-selector').forEach(el => {
  el.onclick = () => {
    localStorage.theme = el.dataset.theme
  }
})
