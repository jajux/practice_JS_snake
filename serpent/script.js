// Lancement à l'ouverture de la fenetre
window.onload = function()
{
    let canvas;
    let ctx;
    let delay = 1000;
    let xCoord = 0;
    let yCoord = 0;
    // Execution de la fonction 
    init();

    function init()
    {
    // Création du CANVAS
        canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
    // Attachement à la page HTML
        document.body.appendChild(canvas);
        // Dessiner dans le CANVAS
         ctx = canvas.getContext('2d');
         refreshCanvas();
    }
    // Rafraîchir le canvas
    function refreshCanvas()
    {
            xCoord += 2;
            yCoord += 2;
         // Efface le canvas
             ctx.clearRect(0,0, canvas.width, canvas.height);
         // Couleur du dessin
             ctx.fillStyle = "#ff0000";
         // Création du rectangle
             ctx.fillRect(xCoord, yCoord, 100, 50); 
        // Execution de la fonction après la fin du délais
            // setTimeout(refreshCanvas,delay);

    }
}
