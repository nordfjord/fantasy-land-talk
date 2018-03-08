const loadCSS = href => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'

  link.href = href

  document.head.append(link)

  return link
}

loadCSS('./styles/_default/main.css')

document.querySelectorAll('.theme-selector').forEach(el => {
  el.onclick = () => {
    localStorage.theme = el.dataset.theme
  }
})
