//  blokeng exercise
function fetchUserDateSync() {
  alert('riix kadib ayad heleys jawab')
  return { age: 55, country: 'somalia' }
}
console.log('jabwabta Kobaad')
let user = fetchUserDateSync()
console.log('user data', user)
console.log('this is blocked consle')

//   non bloking//
function getUserData(callback) {
  setTimeout(() => {
    let user = { id: 43, name: 'abdi' }
    callback(user)
  }, 4000)
}
console.log('FIRST CONSOLE')
getUserData(function (user) {})
