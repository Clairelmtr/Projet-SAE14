 // Sélectionner tous les textes interactifs
 const hoverTexts = document.querySelectorAll('.hover-text');
 const audioPlayer = document.getElementById('audioPlayer');

 // Ajouter un événement à chaque texte
 hoverTexts.forEach(text => {
     text.addEventListener('mouseenter', () => {
         const soundFile = text.getAttribute('data-sound'); // Récupérer le fichier audio
         audioPlayer.src = soundFile; // Définir le fichier audio
         audioPlayer.currentTime = 0; // Réinitialiser la lecture
         audioPlayer.play(); // Jouer le son
     });

     // Optionnel : Pause le son si le curseur quitte rapidement
     text.addEventListener('mouseleave', () => {
         audioPlayer.pause();
     });
 });