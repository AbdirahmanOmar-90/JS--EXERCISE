async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error(`http error status,${response.status}`)
    }
    console.log('rospnse before json', response)
    const data = await response.json()
    console.log('response after json', data)
  } catch (error) {}
}
getData()
