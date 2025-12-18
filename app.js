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
    titre: "Projet 1 — Générateur de mot de passe",
    desc: "Application permettant de générer des mots de passe sécurisés automatiquement.",
    lien: "https://github.com/Forcerion/password-generator"
  },
  {
    titre: "Projet 2 — Connect Four Game",
    desc: "Jeu Puissance 4 avec gestion des tours et détection des victoires.",
    lien: "https://github.com/Forcerion/connect-four-game"
  },
  {
    titre: "Projet 3 — Mini CRUD (à venir)",
    desc: "Application web permettant d’ajouter, afficher, modifier et supprimer des données.",
    lien: "#"
  }
];

document.getElementById("year").textContent = "Portfolio • " + new Date().getFullYear();
document.getElementById("name").textContent = prenom + " " + nom;
document.getElementById("subtitle").textContent = metier + " — " + accroche;

document.getElementById("github").href = github;
document.getElementById("github2").href = github;
document.getElementById("github2").textContent = github;

document.getElementById("email").textContent = email;
document.getElementById("email2").textContent = email;

document.getElementById("linkedin").href = linkedin;
document.getElementById("linkedin2").href = linkedin;
document.getElementById("linkedin2").textContent = linkedin;

document.getElementById("about").textContent =
  "Je m'appelle " + prenom + ", je débute en développement web et je progresse en construisant des projets concrets.";

document.getElementById("githubBtn").href = github;

const skillsList = document.getElementById("skills");
competences.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const projectsDiv = document.getElementById("projects");
projets.forEach(p => {
  const div = document.createElement("div");
  div.className = "project";

  const h3 = document.createElement("h3");
  h3.textContent = p.titre;

  const desc = document.createElement("p");
  desc.textContent = p.desc;

  div.appendChild(h3);
  div.appendChild(desc);

  if (p.lien !== "#") {
    const link = document.createElement("a");
    link.href = p.lien;
    link.target = "_blank";
    link.textContent = "Voir le projet →";
    div.appendChild(link);
  } else {
    const span = document.createElement("p");
    span.textContent = "Projet en cours";
    div.appendChild(span);
  }

  projectsDiv.appendChild(div);
});

document.getElementById("footer").textContent =
  "© " + new Date().getFullYear() + " " + prenom + " " + nom;
