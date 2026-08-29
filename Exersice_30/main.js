function Oprate(a, b, callback) {
  return callback(a, b)
}
function add(a, b) {
  return a + b
}
function sup(a, b) {
  return a - b
}
console.log('iskudarku waa', Oprate(44, 44, add))
console.log('kala jarku waa', Oprate(30, 20, sup))
