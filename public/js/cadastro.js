window.onload = () => {
  let cadastroForm = document.querySelector('form.cadastro');

  cadastroForm.addEventListener('submit', (e) => {
  
    let errorsMessages = [];
    
    //todas as validações começam a partir daqui
    let fieldName = document.getElementById('name');
      if (fieldName.value == '') {
      errorsMessages.push('o campo nome não pode estar vazio');
      } else if (fieldName.value.length < 10) {
        errorsMessages.push('o tamanho do nome deve conter mais que 10 caractres')
      }
    
    let fieldEmail = document.getElementById('email');
    if (fieldEmail.value == '') {
      errorsMessages.push('o campo email não pode estar vazio');
    }
        
    let fieldCpf = document.getElementById('cpf');
    if (fieldCpf.value == '') {
      errorsMessages.push('o campo cpf não pode estar vazio');
    }

    let fieldDate = document.getElementById('date');
    if (fieldDate.value == '') {
      errorsMessages.push('o campo data não pode estar vazio');
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
