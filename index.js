const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const birthplace = form.birthplace.value
    const age = form.age.value

    details.innerHTML = `<em> ${personName} </em>`
    details.innerHTML = `
            <ul>
            <li>Name: ${personName}</li>
            <li>Age: ${age}</li>
            <li>Birthplace: ${birthplace}</li>
            `
    
    const em = document.createElement('em')
    em.textContent = personName
    details.appendChild(em)
}