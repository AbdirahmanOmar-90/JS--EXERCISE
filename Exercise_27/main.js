function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = true
      if (person) {
        resolve({ name: 'abdirahmana', age: 22 })
      } else {
        reject('this fetch failed')
      }
    })
  })
}
