import Future from 'fluture'

export const theme = new Future((_, res) => res(getCurrentTheme()))

const getCurrentTheme = () => localStorage.theme || '_default'
