function filterJobs() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const jobList = document.getElementById('job-list');
    const vagas = jobList.getElementsByClassName('vaga');

    for (let i = 0; i < vagas.length; i++) {
        const vaga = vagas[i];
        const title = vaga.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(filter)) {
            vaga.style.display = "";
        } else {
            vaga.style.display = "none";
        }
    }
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Alterna a classe 'show' na lista de links
}

function openChat() {
    const chat = document.getElementById("conversas");
    const chat2 = document.getElementById("chat");
    chat.classList.toggle("hidden");
    chat2.classList.add("hidden");
    
}
function entryChat(name) {
    const chat = document.getElementById("chat");
    chat.classList.toggle("hidden");
}