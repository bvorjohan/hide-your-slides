const main = async () => {
    

await setTimeout(() => {},3000)
const filmstrip = document.getElementById("filmstrip");
const buttonParentElement = document.getElementById("docs-title-widget")
console.log(buttonParentElement)
let myButton = document.createElement("button");
myButton.style.cssText = "padding:0;height:30px;box-sizing:border-box;"
let myButtonText = document.createElement("p")
myButtonText.innerText = "Hide Your Slides!"

myButton.append(myButtonText)
myButton.onclick=() => {
    const censor = document.createElement("div")
    censor.id = "censor"
    const censorText = document.createElement("p")
    censorText.innerText = "Your Slides are Hidden!"
    censor.style.cssText="box-sizing:border-box;padding:2em;position:absolute;color:white;width:200px;height:10000px;background-color:black;z-index:2"
    censor.appendChild(censorText)

    censorDeleteButton = document.createElement("button")
    censorDeleteButtonText = document.createElement("p")
    censorDeleteButtonText.innerText = "Show My Slides Again"
    censorDeleteButton.onclick= () => {
        const censor = document.getElementById("censor")
        censor.parentNode.removeChild(censor)
    }
    // censorDeleteButton.style.cssText="box-sizing:content-box;height:30px;width:100px;"
    censorDeleteButton.appendChild(censorDeleteButtonText)
    censor.appendChild(censorDeleteButton)


    filmstrip.style.position = "relative"
    filmstrip.prepend(censor)
    console.log(filmstrip)
    console.log("we did it", censor)
}
// await setTimeout(() => {},3000)

buttonParentElement.appendChild(myButton)

console.log(myButton)
}

 main()