async function fetch() {
  console.log('start fetch data')
  let response = await fetch('data.json')
  const data = await response.json()
  console.log('response', data)
}
fetch()
