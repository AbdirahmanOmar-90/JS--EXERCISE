async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
    }
  } catch (error) {}
}
