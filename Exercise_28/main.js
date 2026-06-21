function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = true
      if (person) {
        resolve({ name: 'ali', age: 55 })
      } else {
        reject('this fetcuh failed')
      }
    }, 4000)
  })
}
async function displayUserData() {
        try{
                
        }
}
