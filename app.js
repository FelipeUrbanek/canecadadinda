function addDarkmodeWidget() {
  new Darkmode().showWidget()
}
window.addEventListener('load', addDarkmodeWidget)
/* 
$(document).ready(function () {
  const body = document.querySelector('body').classList

  if (body.contains.classList('darkmode--activated')) {
    console.log(1)
  } else {
    console.log(2)
    console.log(body.length)
  }
})
 */

$('.questao').click(function () {
  $(this).parent().children('span').toggleClass('active')
  console.log($(this).parent())
})
