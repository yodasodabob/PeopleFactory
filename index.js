const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    colorDiv.style.backgroundColor = hairColor
    return colorDiv
}

const renderListItem = (name, value) => {
    const li = document.createElement('li')
    li.textContent = `${name}: ${value}`
    return li
}

const renderList = (person) => {
    const list = document.createElement('ul')
    for(let i = 0; i < Object.keys(person).length; i++) {
        let li = renderListItem(Object.keys(person)[i], person[Object.keys(person)[i]])
        list.appendChild(li)
    }
    return list
}

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

const person = {
    name: form.personName.value,
    hairColor: form.hairColor.value,
    age = form.age.value,
    birthplace: form.birthplace.value,
}

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