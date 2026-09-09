function changeImage() {
  const img = document.querySelector('img')
  img.src = prompt('inter your img')
  img.style.padding = prompt('inter padding as px')
  img.style.backgroundColor = prompt('inter your background color')
  img.style.borderRadius = prompt('inter border')
  img.setAttribute(
    'src',
    url,
    //     'https://media.istockphoto.com/id/95442265/photo/lottery.webp?a=1&b=1&s=612x612&w=0&k=20&c=ANzV6xRZLDMcyGXtsl7U7-YRS2fklnXVJDLEShtNgfg=',
  )
}
