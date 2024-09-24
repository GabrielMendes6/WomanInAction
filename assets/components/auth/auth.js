document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("Email");
    const passInput = document.getElementById("Pass");
    const cpfInput = document.getElementById("Cpf");
    const checkbox = document.querySelector("#divAccept input[type='checkbox']");
    const submitButton = document.getElementById("btnSignUp");

    // Validação básica do e-mail
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Validação básica da senha (mínimo de 6 caracteres)
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Validação e formatação do CPF
    function validateAndFormatCPF(cpf) {
        const cleanedCPF = cpf.replace(/\D/g, '');

        // Verifica se contém 11 dígitos
        if (cleanedCPF.length !== 11) {
            return false;
        }

        // Formatação do CPF para 000.000.000-00
        const formattedCPF = cleanedCPF.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        cpfInput.value = formattedCPF;

        return true;
    }

    // Exibe uma mensagem de erro
    function showError(message) {
        alert(message);
    }

    // Formata a entrada do CPF enquanto o usuário digita
    cpfInput.addEventListener("input", function (event) {
        // Mantém os caracteres permitidos: números, '.', e '-'
        const cleanedValue = event.target.value.replace(/[^0-9]/g, ''); // Remove tudo que não for número
    
        let formattedValue = '';
    
        // Formata o CPF enquanto o usuário digita
        if (cleanedValue.length > 0) {
            formattedValue += cleanedValue.slice(0, 3); // Primeiros 3 dígitos
        }
        if (cleanedValue.length >= 4) {
            formattedValue += '.' + cleanedValue.slice(3, 6); // Próximos 3 dígitos
        }
        if (cleanedValue.length >= 7) {
            formattedValue += '.' + cleanedValue.slice(6, 9); // Próximos 3 dígitos
        }
        if (cleanedValue.length >= 10) {
            formattedValue += '-' + cleanedValue.slice(9, 11); // Últimos 2 dígitos
        }
    
        event.target.value = formattedValue; // Atualiza o valor do input
    });

    // Função que lida com a submissão do formulário
    form.addEventListener("submit", function (event) {
        const email = emailInput.value;
        const password = passInput.value;
        const cpf = cpfInput.value;

        // Validação do email
        if (!validateEmail(email)) {
            showError("Por favor, insira um e-mail válido.");
            event.preventDefault();
            return;
        }

        // Validação da senha
        if (!validatePassword(password)) {
            showError("A senha deve ter no mínimo 6 caracteres.");
            event.preventDefault();
            return;
        }

        // Validação e formatação do CPF
        if (!validateAndFormatCPF(cpf)) {
            showError("Por favor, insira um CPF válido (apenas números). Deve conter 11 dígitos.");
            event.preventDefault();
            return;
        }

        // Verificar se a checkbox foi marcada
        if (!checkbox.checked) {
            showError("Você deve aceitar os termos de uso.");
            event.preventDefault();
            return;
        }

        event.preventDefault(); // Impede o envio padrão do formulário

        const userData = {
            email: emailInput.value,
            pass: passInput.value,
            cpf: cpfInput.value,
        }
        
        localStorage.setItem("userData", JSON.stringify(userData)); //armazena como String
        alert("Cadastro realizado com sucesso!");
        
        window.location.href = "../../pages/login/Login.html";
    });    
});


