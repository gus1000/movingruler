const size = document.querySelector(".size");


window.addEventListener("resize" , function(e) {
  let height  = document.documentElement.clientHeight;
  let width = document.documentElement.clientWidth;
  console.log(height, width);
  size.innerText = `${width}px`;

  
})
