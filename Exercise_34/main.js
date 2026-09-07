const list = document.querySelector('.list')

function add() {
  const newItem = document.createElement('li')

  newItem.textContent = `Item Thre`

  list.appendChild(newItem)
}

function remove() {
  if (list.lastChild) {
    list.removeChild(list.lastChild)
  } else {
    alert(`The Last Child Was daleted`)
  }
}
