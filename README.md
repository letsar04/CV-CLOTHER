# CV-CLOTHER — Portfolio de Clother Naba

Portfolio personnel de Clother Naba, développeur logiciel basé à Ouagadougou, Burkina Faso.

## Direction artistique

- Direction visuelle éditoriale et cinématique : fond sombre, typographie expressive, accent vert citron, grilles aérées et peu d'ornements.
- Hero plein écran avec mouvement de caméra/parallaxe synchronisé au scroll.
- Révélation progressive des sections et des projets.
- Barre de progression, navigation mobile accessible et prise en compte de `prefers-reduced-motion`.
- Mise en page responsive sans framework JavaScript.

## Lancer en local

Le site est statique : ouvre `index.html` dans un navigateur ou lance un serveur local depuis la racine, par exemple :

```bash
python -m http.server 8000
```

Puis ouvre http://localhost:8000.

## Projets présentés

- **Ibam — Musée immersif** : expérience culturelle 3D ; lien vers le dépôt `mus-e-immerssif`.
- **MotoD — Livraison** : projet mobile autour de la livraison et de la géolocalisation.
- **Be.Vision** : exploration d’une architecture de vision par ordinateur et d’API.
- **CV-CLOTHER** : ce portfolio.

Les cartes renvoient vers les dépôts GitHub correspondants. Les descriptions restent prudentes et ne prétendent pas qu’une fonctionnalité est en production si cela n’est pas vérifié.

## Personnalisation à faire

- Remplacer le visuel d’ouverture distant par une vidéo MP4/WebM optimisée hébergée dans `assets/` si tu souhaites un véritable film de fond. Le mouvement cinématique actuel est généré côté navigateur et ne dépend pas d’une vidéo lourde.
- Vérifier/ajouter les liens LinkedIn exacts et les URL de démonstration en production.
- Ajouter des captures d’écran récentes aux projets dès qu’elles sont disponibles.

## Accessibilité et performance

Le site prend en charge la navigation clavier, les liens externes sécurisés, les images différées et la préférence système de réduction des animations. Les images distantes du hero nécessitent une connexion internet.
