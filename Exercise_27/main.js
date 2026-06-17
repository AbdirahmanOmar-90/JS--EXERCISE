function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true
      if (success) {
        resolve({ name: 'abdirahmana', age: 22 })
      } else {
        reject('this fetch failed')
      }
    }, 1000)
  })
}
fetchUserData().then((date) => {
  console.log('user data', data)
})
