<link rel="stylesheet" href="style.css">
<?php
$prenom = "Victor";
$nom = "MURAWJOW";
$metier = "Développeur Web (débutant)";
$accroche = "Je construis des sites web simples et propres avec PHP, HTML et CSS.";

$github = "https://github.com/Forcerion";
$email  = "victormurawjow@gmail.com";
$linkedin = "https://www.linkedin.com/in/victor-murawjow/";

$competences = ["PHP", "HTML", "CSS", "MySQL", "Git/GitHub", "VS Code"];

$projets = [
  [
    "titre" => "Projet 1 — Générateur de mot de passe",
    "desc"  => "Application permettant de générer des mots de passe sécurisés automatiquement à l’aide de règles simples.",
    "lien"  => "https://github.com/Forcerion/password-generator"
  ],
  [
    "titre" => "Projet 2 — Connect Four Game",
    "desc"  => "Jeu Puissance 4 développé avec une logique de jeu, gestion des tours et détection des victoires.",
    "lien"  => "https://github.com/Forcerion/connect-four-game"
  ],
  [
    "titre" => "Projet 3 — Mini CRUD (à venir)",
    "desc"  => "Application web permettant d’ajouter, afficher, modifier et supprimer des données avec PHP et MySQL.",
    "lien"  => "#"
  ],
];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio - <?php echo $prenom; ?> <?php echo $nom; ?></title>
</head>

<body>
  <div class="container">

    <div class="card header">
      <div>
        <span class="badge">Portfolio • <?php echo date('Y'); ?></span>
        <h1><?php echo $prenom; ?> <?php echo $nom; ?></h1>
        <p class="subtitle">
          <strong><?php echo $metier; ?></strong> — <?php echo $accroche; ?>
        </p>
      </div>

      <div class="badges">
        <a class="badge" href="<?php echo $github; ?>" target="_blank">GitHub</a> |
        <span class="badge"><?php echo $email; ?></span> |
        <a class="badge" href="<?php echo $linkedin; ?>" target="_blank">LinkedIn</a>
      </div>
    </div>

    <div class="grid">
      <section class="card">
        <h2>À propos</h2>
        <p>
          Je m'appelle <?php echo $prenom; ?>, je débute en développement web et je progresse en construisant des projets concrets.
          Mon objectif est d’améliorer mes compétences en PHP et de créer des applications utiles.
        </p>
        <a class="btn" href="<?php echo $github; ?>" target="_blank">Voir mon GitHub →</a>
      </section>

      <section class="card">
        <h2>Compétences</h2>
        <ul>
          <?php foreach ($competences as $c) { ?>
            <li><?php echo $c; ?></li>
          <?php } ?>
        </ul>
      </section>

      <section class="card span-2">
        <h2>Projets</h2>

        <?php foreach ($projets as $p) { ?>
          <div class="project">
            <h3><?php echo $p["titre"]; ?></h3>
            <p><?php echo $p["desc"]; ?></p>

            <?php if ($p["lien"] != "#") { ?>
              <p>
                <a href="<?php echo $p["lien"]; ?>" target="_blank">
                  Voir le projet →
                </a>
              </p>
            <?php } else { ?>
              <p>Projet en cours</p>
            <?php } ?>
          </div>
        <?php } ?>

      </section>

      <section class="card span-2">
        <h2>Contact</h2>
        <p>Email : <?php echo $email; ?></p>
        <p>GitHub : <a href="<?php echo $github; ?>" target="_blank"><?php echo $github; ?></a></p>
        <p>LinkedIn : <a href="<?php echo $linkedin; ?>" target="_blank"><?php echo $linkedin; ?></a></p>
      </section>
    </div>

    <div class="footer">
      © <?php echo date('Y'); ?> <?php echo $prenom; ?> <?php echo $nom; ?>
    </div>

  </div>
</body>
</html>
