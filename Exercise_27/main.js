function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = true
      if (person) {
        resolve({ name: 'abdirahmana', age: 22 })
      } else {
        reject('this fetch failed')
      }
    }, 1000)
  })
}
fetchUserData()
  .then((data) => {
    console.log('user data', data)
  })
  .catch((error) => {
    console.log(error)
  })
