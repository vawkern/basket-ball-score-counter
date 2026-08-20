let homePointText = document.getElementById("home-point")
homePoint = parseInt(homePointText.innerText, 10)

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
guestPoint = parseInt(guestPointText.innerText, 10)

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