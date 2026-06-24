async function fetch() {
  console.log('start fetch data')
  let response = await fetch('datajson')
  const data = await response.json()
}
