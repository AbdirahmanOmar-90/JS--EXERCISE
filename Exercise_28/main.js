function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = true
      if (person) {
        resolve({ name: 'ali', age: 55 })
      }
    })
  })
}
