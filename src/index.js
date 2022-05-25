
function fetchPups(){
    return fetch ("http://localhost:3000/pups")
    .then (res => res.json())
    .then (data => addPups(data))
}

function addPups(pups){
    pups.forEach(pup => {
    const makeSpan = document.createElement("span")
    makeSpan.textContent = pup.name
    document.querySelector("#dog-bar").append(makeSpan)

    makeSpan.addEventListener("click", (e) => {
        const dogInfo = document.querySelector("#dog-info")

        const pupImage = document.createElement("img")
        pupImage.setAttribute("src", pup.image)

        const pupName = document.createElement("h2")
        pupName.textContent = pup.name

        const pupButton = document.createElement("button")
        if (pup.isGoodDog === true){
            pupButton.textContent = "Good Dog!"
        } else {
            pupButton.textContent = "Bad Dog!"
        }

    pupButton.addEventListener("click", (e) => {
        if (pup.isGoodDog === true){
            pupButton.textContent = "Bad Dog!"
            pup.isGoodDog = false
        } else {
            pupButton.textContent = "Good Dog!"
            pup.isGoodDog = true
        }
    })

        dogInfo.textContent = ""
        dogInfo.append (pupImage, pupName, pupButton)
    })

    }
    )
}

document.addEventListener("DOMContentLoaded", (e) => {
    fetchPups()
});