document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        "pt": {
            "home": "Home",
            "about": "Sobre",
            "projects": "Projetos",
            "resume": "Currículo",
            "contact": "Contato",
            "intro": "Transformando ideias em experiências digitais envolventes.Me chamo Ary Hauffe Neto, um Desenvolvedor Fullstack apaixonado por criar soluções inteligentes e escaláveis que geram impacto real.",
            "hire": "Contratar",
            "cv": "Currículo",
            "aboutTitle": "Sobre Mim",
            "aboutText": `<p>Sou Ary Hauffe Neto, um <strong>profissional em transição para o desenvolvimento Fullstack</strong>, com <strong>formação em Engenharia Sanitária e Ambiental pela UFSC</strong>. Minha trajetória combina uma <strong>base em tecnologia – dois anos de Ciência da Computação</strong> e experiência em engenharia, trazendo uma <strong>visão analítica e estruturada para a resolução de problemas</strong>.</p>
                          <p>Atualmente, estou no <strong>programa de formação Oracle One</strong> e participo como <strong>voluntário no Pipoca Ágil (simulação de projetos ágeis)</strong>.</p>
                          <p>Minha experiência internacional, vivendo no <strong>Brasil, EUA, Panamá, Itália</strong>, me proporcionou <strong>adaptabilidade, pensamento global, ambientes multiculturais</strong>.</p>
                          <p>Sou apaixonado por <strong>aprender, encarar desafios, aplicar novas tecnologias</strong> para <strong>criar soluções eficientes e bem estruturadas</strong>.</p>`,
            "projectsTitle": "Projetos",
            "resumeTitle": "Currículo",
            "contactTitle": "Contato",
            "send": "Enviar",
            "footerText": "Elaborado por Ary Hauffe Neto",
            "skillsTitle": "Habilidades",
            "escapeRoomDesc": `Escape Room Game é um jogo de aventura de quebra-cabeça simples e interativo onde o jogador deve explorar diferentes salas, encontrar itens escondidos e desbloquear a senha secreta de 4 dígitos para escapar.
            Desenvolvido com Python e Tkinter, este jogo apresenta uma interface gráfica amigável (GUI) com botões clicáveis para exploração e interações.
            Você pode jogar fazendo o download do arquivo Main.py no github e executando no seu editor de codigos.`
        },
        "en": {
            "home": "Home",
            "about": "About",
            "projects": "Projects",
            "resume": "Resume",
            "contact": "Contact",
            "intro": "Bringing ideas to life through seamless digital experiences.I'm Ary Hauffe Neto, a Fullstack Developer passionate about building smart, scalable solutions that make a real impact.",
            "hire": "Hire Me",
            "cv": "Resume",
            "aboutTitle": "About Me",
            "aboutText": `<p>I am Ary Hauffe Neto, a <strong>professional transitioning to Fullstack development</strong>, with a <strong>degree in Sanitary and Environmental Engineering from UFSC</strong>. My background combines a <strong>foundation in technology – two years of Computer Science</strong> and engineering experience, bringing an <strong>analytical and structured perspective to problem-solving</strong>.</p>
                          <p>I am currently in the <strong>Oracle One training program</strong> and volunteer with <strong>Pipoca Ágil (an agile project simulation initiative)</strong>.</p>
                          <p>My international experience, living in <strong>Brazil, the USA, Panama, and Italy</strong>, has granted me <strong>excellent adaptability, global thinking, and ease working in multicultural environments</strong>.</p>
                          <p>I am passionate about <strong>learning, facing challenges, and applying new technologies</strong> to <strong>create efficient and well-structured solutions</strong>.</p>`,
            "projectsTitle": "Projects",
            "resumeTitle": "Resume",
            "contactTitle": "Contact",
            "send": "Send",
            "footerText": "Created by Ary Hauffe Neto",
            "skillsTitle": "Skills",
            "escapeRoomDesc": `Escape Room Game is a simple and interactive puzzle adventure game where the player must explore different rooms, find hidden items and unlock the secret 4-digit password to escape.
            Developed with Python and Tkinter, this game features a user-friendly graphical user interface (GUI) with clickable buttons for exploration and interactions.
            You can play by downloading the Main.py file from github and running it in your code editor.`
        },
        "it": {
            "home": "Home",
            "about": "Chi Sono",
            "projects": "Progetti",
            "resume": "Curriculum",
            "contact": "Contatto",
            "intro": `Dando vita alle idee attraverso esperienze digitali fluide.
                        Sono Ary Hauffe Neto, uno Sviluppatore Fullstack
                        appassionato di creare soluzioni intelligenti 
                        e scalabili che fanno davvero la differenza.`,
            "hire": "Assumimi",
            "cv": "Curriculum",
            "aboutTitle": "Chi Sono",
            "aboutText": `<p>Sono Ary Hauffe Neto, un <strong>professionista in transizione verso lo sviluppo full-stack</strong>, con una <strong>laurea in ingegneria sanitaria e ambientale conseguita presso l'UFSC</strong>. Il mio percorso unisce una <strong>formazione in tecnologia (con due anni di informatica)</strong> ed esperienza in ingegneria, apportando una <strong>visione analitica e strutturata alla risoluzione dei problemi</strong>.</p>
                          <p>Attualmente seguo il <strong>programma di formazione Oracle One</strong> e partecipo come <strong>volontario a Pipoca Ágil (un'iniziativa di simulazione di progetti Agile)</strong>.</p>
                          <p>La mia esperienza internazionale, avendo vissuto in <strong>Brasile, negli Stati Uniti, a Panama e in Italia</strong>, mi ha dato <strong>una grande adattabilità, un pensiero globale e facilità nel lavorare in ambienti multiculturali</strong>.</p>
                          <p>Mi appassiona <strong>imparare, affrontare le sfide e applicare nuove tecnologie</strong> per <strong>creare soluzioni efficienti e ben strutturate</strong>.</p>`,
            "projectsTitle": "Progetti",
            "resumeTitle": "Curriculum",
            "contactTitle": "Contatto",
            "send": "Invia",
            "footerText": "Creato da Ary Hauffe Neto",
            "skillsTitle": "Competenze",
            "escapeRoomDesc": `Escape Room Game è un gioco di avventura rompicapo semplice e interattivo in cui il giocatore deve esplorare diverse stanze, trovare oggetti nascosti e sbloccare la password segreta di 4 cifre per fuggire.
            Puoi giocare scaricando il file Main.py da github ed eseguirlo nel tuo editor di codice.`
        }
    };

    const elements = document.querySelectorAll(".lang");
    const resumeLink = document.getElementById("resume-link");
    const languageSwitcher = document.getElementById("languageSwitcher");
    const flags = languageSwitcher.querySelectorAll(".flag-icon");

    function updateLanguage(lang) {
        // Atualiza a classe 'selected' nos ícones das bandeiras
        flags.forEach(f => f.classList.remove("selected"));
        const selectedFlag = languageSwitcher.querySelector(`.flag-icon[data-lang="${lang}"]`);
        if (selectedFlag) {
            selectedFlag.classList.add("selected");
        }

        // Atualiza os textos conforme a tradução
        elements.forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                if (el.hasAttribute("data-html")) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Atualiza o link do currículo
        const resumeFiles = {
            "pt": "assets/CV/CV_ARY_PT.pdf",
            "en": "assets/CV/CV_ARY_EN.pdf",
            "it": "assets/CV/CV_ARY_IT.pdf"
        };
        const cvButton = document.getElementById("cv-button");
        if (cvButton) {
            cvButton.href = resumeFiles[lang];
        }
    }

    flags.forEach(flag => {
        flag.addEventListener("click", function() {
            const lang = this.getAttribute("data-lang");
            updateLanguage(lang);
        });
    });

    // Define o idioma padrão para inglês ao carregar a página
    updateLanguage('en');
});
