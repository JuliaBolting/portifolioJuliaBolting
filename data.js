export const educationData = [
    {
        year: "2019", title: "Curso Profissionalizante e Comportamental", description: `
        Curso com 96 horas de formação em habilidades profissionais e comportamentais, promovido pelo COLISEU.
        ` },
    {
        year: "2019", title: "Curso de Inglês Intermediário", description: `
        Formação com 175 horas em inglês intermediário pela WIZARD, com foco em comunicação técnica.
        ` },
    {
        year: "2021–2022", title: "Estágio em Desenvolvimento de Software", description: `
        Atendimento a clientes, apoio no desenvolvimento com Java e Kotlin, participação em treinamentos técnicos e reuniões com foco em desenvolvimento mobile.
        ` },
    {
        year: "2022", title: "Ensino Médio Técnico em Informática", description: `
        IFPR - Instituto Federal do Paraná - União da Vitória, PR. Formação técnica com base sólida em lógica de programação, Java e Kotlin.
        ` },
    {
        year: "2022", title: "Curso Desenvolvimento Android com Java e Kotlin", description: `
        Curso de 107 horas por Jamilton Damasceno (UDEMY), com foco em práticas de desenvolvimento mobile para Android.
        ` },
    {
        year: "2022–2023", title: "Desenvolvedora Júnior", description: `
        Desenvolvimento e manutenção de telas no app da empresa, refatoração de código de Java para Kotlin, testes de software, definição de layouts e participação em reuniões técnicas com clientes.
        ` },
    {
        year: "2026 (previsto)", title: "Bacharelado em Ciências da Computação", description: `
        IFSC - Instituto Federal de Santa Catarina - Lages, SC. Formação superior em desenvolvimento de sistemas e computação.
        ` },
];

export const servicesData = [
    {
        title: "Desenvolvimento Mobile (Kotlin/Java)", description: `
        Criação e manutenção de aplicativos Android nativos. Refatoração de código legado em Java para Kotlin e atualização de funcionalidades depreciadas.
        `
    },
    {
        title: "Desenvolvimento Web", description: `
        Interesse contínuo em backend e web, com participação em projetos educacionais e estudos em tecnologias modernas como Node.js.
        `
    },
    {
        title: "Design de Interface", description: `
        Definição de layout de aplicativos e sites com foco em usabilidade, acessibilidade e experiência do usuário.
        `
    },
    {
        title: "Suporte Técnico e Testes", description: `
        Atendimento a usuários, testes manuais e validação de funcionalidades para garantir a qualidade do software.
        `
    },
    {
        title: "Análise de Requisitos e Comunicação com Clientes", description: `
        Participação ativa em reuniões com clientes, levantamento de requisitos e tradução de demandas em soluções técnicas.
        `
    },
    {
        title: "Refatoração de Código", description: `
        Modernização de código base utilizando boas práticas de engenharia de software, com foco em legibilidade e desempenho.
        `
    },
    {
        title: "Trabalho em Equipe Híbrido", description: `
        Colaboração em times híbridos (presencial e remoto), com uso de ferramentas de versionamento, reuniões síncronas e autonomia em tarefas.
        `
    },
    {
        title: "Aprendizado Contínuo", description: `
        Participação em cursos complementares e treinamentos técnicos, demonstrando dedicação constante ao aperfeiçoamento profissional.
        `
    }
];

export const projectsData = [
    {
        title: "Portfólio Pessoal",
        description: "Site pessoal desenvolvido com HTML e CSS para apresentar projetos e habilidades.",
        imgSrc: "portifolio_image.png",
        link: "https://github.com/JuliaBolting/portifolioJuliaBolting"
    },
    {
        title: "Análise de Avaliações - AdoroCinema",
        description: "Projeto em Python para análise de sentimentos de avaliações de filmes utilizando técnicas de NLP.",
        imgSrc: "image.jpg",
        link: "https://github.com/JuliaBolting/AvaliacoesAdoroCinema"
    },
    {
        title: "Algoritmo Genético",
        description: "Implementação de um algoritmo genético em Python para resolução de problemas de otimização.",
        imgSrc: "image.jpg",
        link: "https://github.com/JuliaBolting/AlgoritmoGenetico"
    }
];

export const techData = [
    {
        iconClass: "devicon-kotlin-plain colored",
        tooltip: "Kotlin — desenvolvimento Android e modernização do código."
    },
    {
        iconClass: "devicon-java-plain colored",
        tooltip: "Java — base sólida em POO e manutenção de projetos legados."
    },
    {
        iconClass: "devicon-javascript-plain colored",
        tooltip: "JavaScript — familiaridade com lógica web e manipulação DOM."
    },
    {
        iconClass: "devicon-nodejs-plain colored",
        tooltip: "Node.js — interesse em backend e APIs REST."
    },
    {
        iconClass: "devicon-tailwindcss-plain colored",
        tooltip: "Tailwind — conhecimento em design responsivo e rápido."
    },
    {
        iconClass: "devicon-docker-plain colored",
        tooltip: "Docker — noções básicas de conteinerização de apps."
    }
];

export const aboutMe = {
    "pt-BR": {
        text: `Sou desenvolvedora front-end com foco em mobile, apaixonada por criar experiências digitais intuitivas.
        Tenho experiência prática com Kotlin, Java e desenvolvimento Android, além de interesse em backend e web.
        Estou sempre em busca de aprendizado, desafios e evolução profissional.`
    },
    "en": {
        text: `Sou desenvolvedora front-end com foco em mobile, apaixonada por criar experiências digitais intuitivas.
        Tenho experiência prática com Kotlin, Java e desenvolvimento Android, além de interesse em backend e web.
        Estou sempre em busca de aprendizado, desafios e evolução profissional.`
    }
};

export const translations = {
    "pt-BR": {
        home: "Início",
        education: "Formação",
        services: "Serviços",
        projects: "Projetos",
        technologies: "Tecnologias",
        contactTitle: "Contato",
        contact: "Fale",
        downloadCV: "Baixar CV",
        contactMe: "Comigo",
        emailMe: "Email",
        fullName: "Nome Completo",
        email: "E-mail",
        phone: "Telefone",
        subject: "Assunto",
        yourMessage: "Sua Mensagem",
        sendMessage: "Enviar Mensagem",
        aboutMe: aboutMe["pt-BR"].text
    },
    "en": {
        home: "Home",
        education: "Education",
        services: "Services",
        projects: "Projects",
        technologies: "Technologies",
        contact: "Contact",
        downloadCV: "Download CV",
        contactMe: "Me",
        emailMe: "Email me",
        fullName: "Full Name",
        email: "Email",
        phone: "Phone Number",
        subject: "Subject",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        aboutMe: aboutMe.en.text
    }
};  