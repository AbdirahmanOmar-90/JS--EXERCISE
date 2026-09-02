async function getData() {
  try {
    const response = await fetch(`https://api.github.com/users/mchamoudadev`)
    if (!response.ok) {
      throw new Error(`http error status,${response.status}`)
    }
    console.log('rospnse before json', response)
    const data = await response.json()
    console.log('response after json', data.public_repos)
  } catch (error) {}
}
getData()
