
console.log(document)

var hamburgerdiv = document.querySelector('.hamburger')
var disktoplink = document.querySelector('.disktop-link-holder')
var mybackdrop = document.querySelector('.backdrop')

function something(){
    hamburgerdiv.classList.toggle('showburger')
    disktoplink.classList.toggle('show-disktop-link-holder')
    mybackdrop.classList.toggle('showbackdrop')
}