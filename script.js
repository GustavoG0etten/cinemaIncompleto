function mostrarPrecos() {
    const valorIngresso = document.querySelector(".valor-ingresso");
    valorIngresso.style.display = "block";
}



function fecharValores() {
    const valorIngresso = document.querySelector(".valor-ingresso");
    valorIngresso.style.display = "none";
}

function fecharSecao(secaoId) {
    const secao = document.getElementById(secaoId);
    secao.style.display = "none";
}

function mostrarClubMax() {
    const clubMaxSection = document.getElementById("sessao-clubmax");
    const cover = document.querySelector(".cover");
    clubMaxSection.style.display = "block";
    cover.classList.remove("hidden");
}

function fecharClubMax() {
    const clubMaxSection = document.getElementById("")
}

function mostrarHome() {
    const homeSection = document.getElementById("sessao-home");
    const cover = document.querySelector(".cover");
    homeSection.style.display = "block";
    cover.classList.remove("hidden");
}

function mostrarSobre() {
    const sobreSection = document.getElementById("sessao-sobre");
    const cover = document.querySelector(".cover");
    sobreSection.style.display = "block";
    cover.classList.remove("hidden");
}
