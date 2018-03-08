const contrivedEx1_ = str => {
  const trimmed = str.trim()
  const number = +trimmed
  const next_number = number + 1
  const char = String.fromCharCode(next_number)

  return char
}
