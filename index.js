const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value

    // details.innerHTML = `<em>$[personName]</em>`
    
    const em = document.createElement('em')
    em.textContent = personName
    details.appendChild(em)
}