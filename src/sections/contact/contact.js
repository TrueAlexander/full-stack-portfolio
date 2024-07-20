
const contact = () => {
  
  /*=============== INPUT ANIMATION ===============*/
  const inputs = document.querySelectorAll(".input")

  function focusFunc() {
    let parent = this.parentNode
    parent.classList.add("focus")
  }

  function blurFunc() {
    let parent = this.parentNode
    if (this.value == "") {
      parent.classList.remove("focus")
    }
  }

  inputs.forEach(input => {
    input.addEventListener("focus", focusFunc)
    input.addEventListener("blur", blurFunc)
  })

  /*=============== INPUT VALIDATION ===============*/

  function validateFormData(formData) {
    let errors = {}

   //validation nome
    if (!formData.get('nome')) {
      errors.name = 'O campo "Nome" é obrigatório.'
    } else if (formData.get('nome').length < 3) {
      errors.name = 'O nome é muito curto. Mínimo de 3 caracteres.'
    } 

    //validation email
    const email = formData.get('email')
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      errors.email = 'Digite um e-mail válido.'
    }

    //validation telefone
    const phone = formData.get('telefone')
    const phonePattern = /^\d{11}$/
    if (!phonePattern.test(phone)) {
      errors.phone = 'Digite um número de celular brasileiro válido (ex: 11999999999).'
    }

      //validation mensagem
    if (!formData.get('mensagem')) {
      errors.message = 'O campo "Mensagem" é obrigatório. Mínimo de 10 caracteres.'
    } else if (formData.get('mensagem').length < 10) {
      errors.message = 'A mensagem é muito curta. Mínimo de 10 caracteres.'
    } 
    console.log(errors)
    return errors
  }

  const form = document.querySelector('.contact__form')

    function formSubmit (e) {
      e.preventDefault()
 
      const formData = new FormData(form)
      const errors = validateFormData(formData)
   
      ////add the validation
      if (Object.keys(errors).length > 0) {
        console.log('Errors:', errors)
        displayErrors(errors)
      } else {
        console.log('Dados do formulário são válidos. Enviando formulário...')
        const formAction = 'https://formsubmit.co/caminante.msk@gmail.com'
        fetch(formAction, {
          method: 'POST',
          body: formData,
          headers: {
              'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
              return response.text() // Parse the response as text
          } else {
              return response.text().then(text => {
                  throw new Error(text)
              })
          }
        })
        .then(data => {
            // Handle successful response  
            alert('Sua mensagem foi enviada com sucesso!')
            form.reset() // Reset the form fields
            inputs.forEach(input => input.parentNode.classList.remove("focus")) //remove the "focus" class from input__container 
        })
        .catch(error => {
            // Handle network and response errors
            console.error('Submission error:', error)
            alert('Ops! Algo foi errado!')
        })
      }
  }

  function displayErrors(errors) {
    const errorContainer = document.getElementById('error-container')
    errorContainer.innerHTML = ''
  
    for (const [field, message] of Object.entries(errors)) {
      const errorDiv = document.createElement('div')
      errorDiv.classList.add('error')
      errorDiv.textContent = message
      errorContainer.appendChild(errorDiv)
    }
  }

  form.addEventListener('submit', formSubmit)
}

export default contact
