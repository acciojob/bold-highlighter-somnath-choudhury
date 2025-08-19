const strongElements  = document.querySelectorAll('strong')

function highlight() {
  strongElements.forEach((item) => {
    item.style.color = 'rgb(0, 128, 0)';
  })
}

function return_normal() {
strongElements.forEach((item) => {
  item.style.color = "rgb(0, 0, 0)";
});
}