/* ============================================================
   THÉO SIZUN — DODGEBALL
   Interactions légères :
   1. Ouverture/fermeture du menu latéral sur mobile
   2. Filtres des matchs à thème (page exercices.html)
   ============================================================ */

/* ---------- 1. MENU MOBILE ---------- */
(function () {
  const bouton = document.querySelector(".bouton-menu");
  const voile = document.querySelector(".voile");
  if (!bouton) return;

  function basculerMenu(forcerFermeture) {
    const ouvert = document.body.classList.toggle(
      "menu-ouvert",
      forcerFermeture === true ? false : undefined
    );
    bouton.setAttribute("aria-expanded", ouvert ? "true" : "false");
  }

  bouton.addEventListener("click", () => basculerMenu());
  if (voile) voile.addEventListener("click", () => basculerMenu(true));

  // Fermer avec la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") basculerMenu(true);
  });
})();

/* ---------- 2. FILTRES DES MATCHS À THÈME ---------- */
/* Chaque carte porte un attribut data-categories="technique strategique ..."
   Les boutons portent data-filtre="technique" (ou "tous"). */
(function () {
  const boutons = document.querySelectorAll(".filtre-bouton");
  const cartes = document.querySelectorAll(".carte-jeu");
  if (!boutons.length || !cartes.length) return;

  boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // État visuel des boutons
      boutons.forEach((b) => b.classList.remove("actif"));
      btn.classList.add("actif");

      const filtre = btn.dataset.filtre;
      cartes.forEach((carte) => {
        const categories = (carte.dataset.categories || "").split(/\s+/);
        const visible = filtre === "tous" || categories.includes(filtre);
        carte.hidden = !visible;
      });
    });
  });
})();
