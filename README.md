# Générateur de CV React

Un générateur de CV conçu sous React et mis en prod sur Netlify.

Le générateur permet d’éditer les différentes valeurs en temps réel en faisant en sorte d’éviter des modifications visuelles trop importantes entre le mode Lecture et le mode Édition afin que l’utilisateur puisse voir ce que le résultat final va donner alors même qu’il apporte ses modifications. Une fois satisfait du résultat, il peut télécharger le CV en format PDF. Si un overflow est détecté dans le CV ou que le mode Édition est activé, le bouton de téléchargement de PDF est désactivé jusqu’à ce que le phénomène soit corrigé.

Le but de cet exercice était de tester mes compétences en React, notamment en matière de gestion des states (partagés ou pas), de passages de props entre composants, de composants contrôlés, d’affichage conditionnel, de générations de listes dynamiques, d’utilisation de hooks customs ou non et de validation de types.
