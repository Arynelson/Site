document.addEventListener("DOMContentLoaded", function() {
    const translations = {
        "pt": {
            "home": "Home",
            "about": "Sobre",
            "projects": "Projetos",
            "resume": "Currículo",
            "contact": "Contato",
            "intro": "Meu nome é Ary Hauffe Neto<br>Sou desenvolvedor Full Stack.",
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
            Você pode jogar fazendo o download do arquivo Main.py no github e executando no seu editor de codigos.`,
            "JobSearchProject" : "Job Finder é uma aplicação web projetada para ajudar usuários a buscar oportunidades de emprego na Alemanha, salvar vagas, acompanhar candidaturas e gerenciar eficientemente seu processo de contratação. A plataforma integra-se à API do Arbeitnow para obter listas de empregos em tempo real e oferece autenticação segura para que os usuários possam acompanhar vagas personalizadas.",
            "MelodiaProject" : "Melodia é um clone do Spotify desenvolvido para transmitir música com uma interface de usuário elegante e responsiva. Ele permite aos usuários navegar, reproduzir músicas e gerenciar suas próprias playlists.",
            "RestaurantManProject":"Este é um Sistema de Gerenciamento de Pedidos de Restaurante projetado para agilizar o processo de gerenciamento de pedidos dentro de um restaurante. O aplicativo é personalizado para uso por garçons, caixas, gerentes e equipe de cozinha. Ele fornece uma interface intuitiva para lidar com itens de menu, pedidos de clientes e atualizações em tempo real."
        },
        "en": {
            "home": "Home",
            "about": "About",
            "projects": "Projects",
            "resume": "Resume",
            "contact": "Contact",
            "intro": "My name is Ary Hauffe Neto<br>I’m a Full Stack Developer.",
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
            You can play by downloading the Main.py file from github and running it in your code editor.`,
            "JobSearchProject" : "Job Finder is a web application designed to help users search for job opportunities in Germany, save jobs, track applications, and manage their hiring process efficiently. The platform integrates with the Arbeitnow API for real-time job listings and provides secure user authentication for personalized job tracking.",
            "MelodiaProject" : "Melodia  is a Spotify clone built to stream music with a sleek and responsive user interface. It allows users to browse, play songs, and manage their own playlists.",
            "RestaurantManProject":"This is a Restaurant Order Management System designed to streamline the process of managing orders within a restaurant. The application is tailored for use by waiters, cashiers, managers, and kitchen staff. It provides an intuitive interface for handling menu items, customer orders, and real-time updates."
        },
        "it": {
            "home": "Home",
            "about": "Chi Sono",
            "projects": "Progetti",
            "resume": "Curriculum",
            "contact": "Contatto",
            "intro": "Mi chiamo Ary Hauffe Neto<br>Sono uno sviluppatore Full Stack.",
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
            Puoi giocare scaricando il file Main.py da github ed eseguirlo nel tuo editor di codice.`,
            "JobSearchProject" : "Job Finder è un'applicazione web progettata per aiutare gli utenti a cercare opportunità di lavoro in Germania, salvare offerte di lavoro, monitorare candidature e gestire in modo efficiente il processo di assunzione. La piattaforma si integra con l'API di Arbeitnow per annunci di lavoro in tempo reale e fornisce un'autenticazione sicura per un tracciamento personalizzato delle candidature.",
            "MelodiaProject" : "Melodia è un clone di Spotify creato per lo streaming di musica con un'interfaccia utente elegante e reattiva. Consente agli utenti di esplorare, riprodurre brani e gestire le proprie playlist.",
            "RestaurantManProject":"Questo è un sistema di gestione degli ordini di ristoranti progettato per semplificare il processo di gestione degli ordini all'interno di un ristorante. L'applicazione è pensata per essere utilizzata da camerieri, cassieri, manager e personale di cucina. Fornisce un'interfaccia intuitiva per gestire voci di menu, ordini dei clienti e aggiornamenti in tempo reale."
        }
    };

    const elements = document.querySelectorAll(".lang");
    const languageSwitcher = document.getElementById("languageSwitcher");
    const flags = languageSwitcher.querySelectorAll(".flag-icon");

    function updateLanguage(lang) {
        // Update text based on translations
        elements.forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                if (el.hasAttribute("data-html")) {
                    el.innerHTML = translations[lang][key]; // Render HTML content
                } else {
                    el.textContent = translations[lang][key]; // Render plain text
                }
            }
        });

        // Update resume link
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

    // Set default language to English on page load
    updateLanguage('en');

    // Modal logic
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementById("closeModal");

    function showImageModal(imageSrc) {
        modalImage.src = imageSrc;
        imageModal.classList.remove("hidden");
    }

    closeModal.addEventListener("click", () => {
        imageModal.classList.add("hidden");
    });

    window.showImageModal = showImageModal;

    // Close modal on outside click
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
            imageModal.classList.add("hidden");
        }
    });
});
