(function addPrint() {
  var print = function(str) {
    let body = document.querySelector('body')
    let p = document.createElement('P')
    p.innerText = str
    body.appendChild(p)
  }
  window.print = print
})()
