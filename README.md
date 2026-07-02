# Théo Sizun — Pédagogie et didactique du dodgeball

Site vitrine statique (HTML/CSS/JS) pour GitHub Pages — **version « à plat »** :
tous les fichiers sont à la racine du dépôt, sans sous-dossiers.

## Contenu
- 9 pages HTML (`index.html` + une par rubrique)
- `style.css` — feuille de style (variables de couleurs en tête de fichier)
- `main.js` — menu mobile + filtres des matchs à thème
- `logo-mark.png`, `logo-lockup.png` — logo
- Les PDF téléchargeables (`regles-dodgeball-primaire.pdf`, `guide-balles-dodgeball.pdf`, `comparatif-genouilleres.pdf`)

## Ajouter un document
Déposer le PDF à la racine du dépôt (Add file → Upload files), puis créer un lien
`<a class="bouton" href="mon-fichier.pdf">…</a>` dans la page concernée.
Des exemples prêts à décommenter sont prévus dans `eps.html`
(séquence Cycle 3 : nommer le fichier `sequence-dodgeball-cycle3.pdf`).

## Personnaliser
- **Couleurs / polices** : variables au début de `style.css`.
- **Liens vidéo** : dans `videos.html`, remplacer les blocs « Lien à venir » par le bouton fourni en commentaire.
- **Menu** : répété dans chaque page ; pour ajouter une rubrique, copier une ligne `<li>` dans chacune des 9 pages.
