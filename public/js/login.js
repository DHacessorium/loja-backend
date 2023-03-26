window.onload = () => {
  let cadastroForm = document.querySelector('form.login');

  cadastroForm.addEventListener('submit', (e) => {
  
    let errorsMessages = [];
    
    let fieldEmail = document.getElementById('email');
    if (fieldEmail.value == '') {
      errorsMessages.push('o campo email não pode estar vazio');
    }
        
    let fieldSenha = document.getElementById('password');
    if (fieldSenha.value == '') {
      errorsMessages.push('o campo senha não pode estar vazio');
    }

    if (errorsMessages.length > 0) {
      e.preventDefault();

      let divErrors = document.getElementById('div-errors');
      divErrors.classList.remove('no-errors');
      divErrors.classList.add('errors');

      let ulErrors = document.querySelector('div.errors ul');
        for (let i = 0; i < errorsMessages.length; i++) {
          ulErrors.innerHTML += '<li>' + errorsMessages[i] + '</li>'
      }
    }
  })
}

