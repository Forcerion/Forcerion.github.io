const prenom = "Victor";
const nom = "MURAWJOW";
const metier = "Développeur Web (débutant)";
const accroche = "Je construis des sites web simples et propres avec HTML, CSS et JavaScript.";

const github = "https://github.com/Forcerion";
const email = "victormurawjow@gmail.com";
const linkedin = "https://www.linkedin.com/in/victor-murawjow/";

const competences = ["PHP", "HTML", "CSS", "MySQL", "Git/GitHub", "VS Code"];

const projets = [
  {
    titre: "Générateur de mot de passe",
    desc: "Application qui génère des mots de passe sécurisés automatiquement.",
    github: "https://github.com/Forcerion/password-generator",
    demo: "https://password-generator-lake-psi.vercel.app"
  },
  {
    titre: "Connect Four Game",
    desc: "Jeu Puissance 4 avec gestion des tours et détection des victoires.",
    github: "https://github.com/Forcerion/connect-four-game",
    demo: "https://connect-four-game-blue.vercel.app"
  },
  {
    titre: "Mini CRUD (à venir)",
    desc: "Application web pour ajouter, afficher, modifier et supprimer des données.",
    github: "#",
    demo: "#"
  }
];

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setLink(id, href, text) {
  const el = document.getElementById(id);
  if (el) {
    el.href = href;
    if (text) el.textContent = text;
  }
}

setText("year", "Portfolio • " + new Date().getFullYear());
setText("name", prenom + " " + nom);
setText("subtitle", metier + " — " + accroche);

setLink("github", github);
setText("email", email);
setLink("linkedin", linkedin);

setText(
  "about",
  "J’ai 17 ans et je suis en 2ème année à Eden School (école digitale et numérique). " +
  "Ça fait environ 1 an que j’ai commencé à coder. " +
  "Je progresse en construisant des projets concrets et en publiant mon travail sur GitHub."
);

setText("email2", email);
setLink("github2", github, github);
setLink("linkedin2", linkedin, linkedin);

setText("footer", "© " + new Date().getFullYear() + " " + prenom + " " + nom);

const githubBtn = document.getElementById("githubBtn");
if (githubBtn) githubBtn.href = github;

const skillsList = document.getElementById("skills");
if (skillsList) {
  competences.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

const projectsDiv = document.getElementById("projects");
if (projectsDiv) {
  projets.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";

    const h3 = document.createElement("h3");
    h3.textContent = p.titre;

    const desc = document.createElement("p");
    desc.textContent = p.desc;

    div.appendChild(h3);
    div.appendChild(desc);

    const links = document.createElement("div");
    links.className = "project-links";

    if (p.github !== "#") {
      const aGithub = document.createElement("a");
      aGithub.href = p.github;
      aGithub.target = "_blank";
      aGithub.textContent = "GitHub";
      links.appendChild(aGithub);
    } else {
      const g = document.createElement("span");
      g.className = "muted";
      g.textContent = "GitHub à venir";
      links.appendChild(g);
    }

    const sep = document.createElement("span");
    sep.textContent = " • ";
    links.appendChild(sep);

    if (p.demo !== "#") {
      const aDemo = document.createElement("a");
      aDemo.href = p.demo;
      aDemo.target = "_blank";
      aDemo.textContent = "Voir le site";
      links.appendChild(aDemo);
    } else {
      const d = document.createElement("span");
      d.className = "muted";
      d.textContent = "Démo à venir";
      links.appendChild(d);
    }

    div.appendChild(links);
    projectsDiv.appendChild(div);
  });
}
