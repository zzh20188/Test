(function () {
  window.print = function () {
    let body = document.querySelector('body')
    let p = document.createElement('P')
    p.innerText = str
    body.appendChild(p)
  }
})()
