const colorPicker = document.querySelector('#colorPicker')
const colorPreview = document.querySelector('.colorpreview')
const colorHistory = document.querySelector('#color-history')
const clearButton = document.querySelector('#clear-btn')

function updateColor(preview, colorPicker, colorHistory) {
  const color = colorPicker.value

  preview.style.backgroundColor = color
  colorHistory.textContent = color
  colorHistory.style.color = color
}

colorPicker.addEventListener('input', function () {
  updateColor(colorPreview, colorPicker, colorHistory)
})
