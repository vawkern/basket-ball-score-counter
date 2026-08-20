let homePointText = document.getElementById("home-point")
let homePoint = parseInt(homePointText.innerText, 10)

function homePoint1() {
    homePoint += 1
    homePointText.innerText = homePoint
}

function homePoint2() {
    homePoint += 2
    homePointText.innerText = homePoint
}

function homePoint3() {
    homePoint += 3
    homePointText.innerText = homePoint
}

let guestPointText = document.getElementById("guest-point")
let guestPoint = parseInt(guestPointText.innerText, 10)

function guestPoint1() {
    guestPoint += 1
    guestPointText.innerText = guestPoint
}

function guestPoint2() {
    guestPoint += 2
    guestPointText.innerText = guestPoint
}

function guestPoint3() {
    guestPoint += 3
    guestPointText.innerText = guestPoint
}

window.homePoint1 = homePoint1
window.homePoint2 = homePoint2
window.homePoint3 = homePoint3
window.guestPoint1 = guestPoint1
window.guestPoint2 = guestPoint2
window.guestPoint3 = guestPoint3