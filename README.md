# Théo Sizun — Pédagogie et didactique du dodgeball

Site vitrine statique (HTML/CSS/JS), prêt pour GitHub Pages.

## Structure
- `index.html` — page d'accueil
- `regles.html`, `technique.html`, `exercices.html`, `eps.html`, `materiel.html`, `ressources.html`, `videos.html`, `apropos.html` — une page par rubrique
- `css/style.css` — feuille de style unique (variables de couleurs en tête de fichier)
- `js/main.js` — menu mobile + filtres des matchs à thème
- `images/` — logo (rond seul et version avec texte)

## Mise en ligne sur GitHub Pages
1. Créer un dépôt (ex. `dodgeball`) et y déposer tout le contenu de ce dossier à la racine.
2. Dans Settings → Pages, choisir la branche `main` et le dossier `/ (root)`.
3. Le site est publié à l'adresse `https://VOTRE-PSEUDO.github.io/dodgeball/`.

## Documents
Les PDF téléchargeables sont dans `documents/`. Pour en ajouter un : déposer le fichier
dans ce dossier puis créer un lien `<a class="bouton" href="documents/mon-fichier.pdf">…</a>`
dans la page concernée (des exemples commentés sont prévus dans `eps.html`).

## Personnaliser
- **Couleurs / polices** : modifier les variables au début de `css/style.css`.
- **Liens vidéo** : dans `videos.html`, remplacer les blocs « Lien à venir » par le bouton
  fourni en commentaire juste en dessous.
- **Documents à télécharger** : dans `eps.html`, créer un dossier `documents/`, y placer vos
  PDF, puis décommenter les boutons prévus en commentaire.
- **Menu** : le menu est répété dans chaque page (site statique sans includes). Pour ajouter
  une rubrique, copier une ligne `<li>` du menu dans chacune des 9 pages.
