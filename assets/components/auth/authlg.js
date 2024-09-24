document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInputLg = document.getElementById("Email-lg");
    const passInputLg = document.getElementById("Pass-lg");
    const loginErrors = document.getElementById("loginErrors");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
    
        const email = emailInputLg.value;
        const password = passInputLg.value;
    
        // Recupera os dados do Local Storage
        const userData = JSON.parse(localStorage.getItem("userData"));
    
        // Valida as credenciais
        if (userData && userData.email === email && userData.pass === password) { 
            alert("Login bem-sucedido!");
            // Redireciona para a página inicial ou dashboard
            window.location.href = "../../pages/home/Home.html";
        } else {
            loginErrors.textContent = "Email ou senha incorretos.";
        }
    });
});
