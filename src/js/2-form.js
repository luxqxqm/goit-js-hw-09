const formData = {
    email: "",
    message:""
}
const form = document.querySelector('.feedback-form')

const LOCAL_KEY = "feedback-form-state"


if (localStorage.getItem(LOCAL_KEY)) {
    let value = localStorage.getItem(LOCAL_KEY)
    let final = JSON.parse(value)
    formData.email = final.email
    formData.message = final.message
    form.elements.email.value = final.email    
    form.elements.message.value = final.message    
    console.log(formData);
    
}



form.addEventListener('input', hanldeInput)
function hanldeInput(event) {
    
    if (event.target.tagName === "INPUT") {
        formData.email = event.target.value
        localStorage.setItem(LOCAL_KEY,JSON.stringify(formData))
    }
    else if (event.target.tagName === "TEXTAREA") {
        formData.message = event.target.value
        localStorage.setItem(LOCAL_KEY, JSON.stringify(formData))
        
    }
}



form.addEventListener('submit', handleClick)

function handleClick(event) {
    event.preventDefault()
    
    if (formData.email.length === 0 || formData.message.length === 0) {
        alert('Fill please all fields')
        return
    }
    console.log(formData);
    localStorage.removeItem(LOCAL_KEY)

    form.reset()
}




