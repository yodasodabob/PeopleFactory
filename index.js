const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const labels = document.getElementsByTagName('label')
    const types = document.getElementsByTagName("input")
    const unList = document.createElement("ul")
    for (i = 0; i < form.length - 1; i++) {
        let li = document.createElement("li")
        if (types[i].type == 'color') {
            let colorDiv = document.createElement("div")
            colorDiv.style = `display=inLine-block;height: 50px; width: 100px; background-color: ${form[i].value}`
 
            li.textContent = `${labels[i].innerText}:`
            li.appendChild(colorDiv)
        } else if (types[i].type == "text" || types[i].type == "number"){
            li.textContent =labels[i].innerHTML + ": " + form[i].value
        }
        unList.appendChild(li)
    }
    details.appendChild(unList)
    }



personForm.addEventListener('submit', handleSubmit)