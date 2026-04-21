let clcAria = (widht, hight = widht) => {
  return `result of aria is ${widht * hight}`
}
let getAria = clcAria(1000)
console.log(getAria)
getAria = clcAria(200, 200)
console.log(getAria)
