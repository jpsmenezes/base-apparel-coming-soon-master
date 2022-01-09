let validator = {
    handleSubmit: (event) => {
        event.preventDefault(); // não enviar formulário

        let send = true;
        let input = form.querySelector('input');

        validator.clearError(); // Limpar os error dos inputs

        let check = validator.checkInput(input);
        if (check !== true) {
            send = false;
            validator.showError(input, check);
        }
        else if (send) {            
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        rules = rules.split('|');
        for (let k in rules) {
            let rDetails = rules[k];
            switch (rDetails) {
                case 'required':
                    if (input.value == "") {
                        return 'Campo Obrigatório';
                    }
                    break;
                case 'email':
                    if (input.value != '') {
                        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (!regex.test(input.value.toLowerCase())) {
                            return 'E-mail digitado não é válido!';
                        }
                    }
                    break;
            }
        }
        return true
    },
    showError: (input, erro) => {
        input.style.borderColor = '#ff0000'; // adicionando uma borda vermelha no input com o erro

        let errorElement = document.createElement('div'); // criando uma div 
        errorElement.classList.add('error'); // adiciionando uma class na div
        errorElement.innerHTML = erro;

        //A propriedade parentElement retorna o elemento pai do elemento especificado.
        //O método insertBefore () insere um nó como filho, logo antes de um filho existente, que você especifica.
        //A propriedade nextElementSibling retorna o elemento imediatamente após o elemento especificado, no mesmo nível de árvore.
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearError: () => {
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
        }

        let errorElement = document.querySelectorAll('.error');
        for (let i = 0; i < errorElement.length; i++) {
            errorElement[i].remove();
        }
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', validator.handleSubmit);
