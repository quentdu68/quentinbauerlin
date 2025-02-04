// Contenu en français et en anglais
const content = {
    fr: {
        subtitle: "Docteur en Chimie des Matériaux",
        welcome: "Bienvenue sur mon portfolio !",
        aboutTitle: "À propos de moi",
        aboutContent: "Je suis un développeur passionné par la création d'applications web modernes. Mon parcours en chimie des matériaux m'a permis de développer une approche analytique et structurée de la résolution de problèmes.",
        projectsTitle: "Mes Projets",
        project1Title: "Analyse de Matériaux",
        project1Description: "Développement d'une application web pour l'analyse de données de matériaux",
        project2Title: "Portfolio Personnel",
        project2Description: "Site web personnel développé avec React et Tailwind CSS"
    },
    en: {
        subtitle: "PhD in Materials Chemistry",
        welcome: "Welcome to my portfolio!",
        aboutTitle: "About Me",
        aboutContent: "I am a developer passionate about creating modern web applications. My background in materials chemistry has given me an analytical and structured approach to problem solving.",
        projectsTitle: "My Projects",
        project1Title: "Materials Analysis",
        project1Description: "Web application for materials data analysis",
        project2Title: "Personal Portfolio",
        project2Description: "Personal website developed with React and Tailwind CSS"
    }
};

let currentLang = 'fr';

// Fonction pour basculer entre les sections
function showAbout() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('projects').classList.remove('active');
    document.getElementById('about').classList.add('active');
}

function showProjects() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('about').classList.remove('active');
    document.getElementById('projects').classList.add('active');
}

// Fonctions pour changer la langue
function setFrench() {
    currentLang = 'fr';
    updateContent();
}

function setEnglish() {
    currentLang = 'en';
    updateContent();
}

// Fonction pour mettre à jour le contenu en fonction de la langue
function updateContent() {
    document.getElementById('subtitle').innerText = content[currentLang].subtitle;
    document.getElementById('welcome').innerText = content[currentLang].welcome;
    document.getElementById('about-title').innerText = content[currentLang].aboutTitle;
    document.getElementById('about-content').innerText = content[currentLang].aboutContent;
    document.getElementById('projects-title').innerText = content[currentLang].projectsTitle;
    document.getElementById('project1-title').innerText = content[currentLang].project1Title;
    document.getElementById('project1-description').innerText = content[currentLang].project1Description;
    document.getElementById('project2-title').innerText = content[currentLang].project2Title;
    document.getElementById('project2-description').innerText = content[currentLang].project2Description;
}

// Afficher la section "home" par défaut
document.getElementById('home').classList.add('active');
