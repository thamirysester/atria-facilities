/* ==========================================
   ATRIA FACILITIES
   JavaScript Profissional
========================================== */

// HEADER

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});


// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const alvo = document.querySelector(this.getAttribute("href"));

        if(!alvo) return;

        e.preventDefault();

        alvo.scrollIntoView({

            behavior:"smooth"

        });

    });

});


// BOTÃO VOLTAR AO TOPO

const topo = document.createElement("a");

topo.href="#inicio";

topo.className="topo";

topo.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topo.classList.add("mostrar");

    }else{

        topo.classList.remove("mostrar");

    }

});


/* ==========================================
   CONTADORES
========================================== */

const observerNumero = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const el = entry.target;

            const texto = el.textContent.trim();

            const numero = parseInt(texto.replace(/\D/g, ""));

            if (isNaN(numero)) return;

            // Prefixo
            const prefixo = texto.startsWith("+") ? "+" : "";

            // Sufixo
            let sufixo = "";

            if (texto.includes("%")) {
                sufixo = "%";
            } else if (texto.toUpperCase().includes("H")) {
                sufixo = "H";
            }

            let atual = 0;

            const incremento = Math.max(1, Math.ceil(numero / 70));

            const timer = setInterval(() => {

                atual += incremento;

                if (atual >= numero) {

                    atual = numero;

                    clearInterval(timer);

                }

                el.textContent = prefixo + atual + sufixo;

            }, 25);

            observerNumero.unobserve(el);

        }

    });

});

document.querySelectorAll(".numero h2").forEach(item => {

    observerNumero.observe(item);

});


document.querySelectorAll(".numero h2").forEach(item=>{

    observerNumero.observe(item);

});


// APARECER AO ROLAR

const observerCards = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("ativo");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".service-card,.segmento-card,.item,.numero").forEach(card=>{

    observerCards.observe(card);

});


// PARALLAX DA IMAGEM

const hero = document.querySelector(".hero-image img");

if(hero){

window.addEventListener("mousemove",(e)=>{

    let x=(window.innerWidth/2-e.clientX)/60;

    let y=(window.innerHeight/2-e.clientY)/60;

    hero.style.transform=`translate(${x}px,${y}px)`;

});

}


// BOTÕES

document.querySelectorAll(".btn-primary,.btn-secondary,.btn-header").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});


console.log("Atria Facilities carregado.");