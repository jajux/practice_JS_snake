// Lancement à l'ouverture de la fenetre
window.onload = function()
{
    let canvasWidth= 900;
    let canvasHeight= 600;
    let blockSize = 30;
    let ctx;
    let delay = 1000;
    let cobra;
    // Execution de la fonction 
    init();

    function init()
    {
    // Création du CANVAS
        let canvas = document.createElement('canvas');
        canvas.width =canvasWidth;
        canvas.height =  canvasHeight;
        canvas.style.border = "1px solid";
    // Attachement à la page HTML
        document.body.appendChild(canvas);
        // Dessiner dans le CANVAS
         ctx = canvas.getContext('2d');
         cobra= new Snake([[6,4], [5,4], [4,4]]);
         refreshCanvas();
    }
    // Rafraîchir le canvas
    function refreshCanvas()
    {

         // Efface le canvas
             ctx.clearRect(0,0, canvasWidth,  canvasHeight);
             cobra.draw
        // Execution de la fonction après la fin du délais
            setTimeout(refreshCanvas,delay);
    }
    function drawBlock(ctx, position) {
        let x = position[0] * blockSize;
        let y = position[1] * blockSize;
        ctx.fillRect(x, y, blockSize, blockSize);
        
    }
    function Snake(body) {
        this.body= body;
        this.draw=function () { 
            ctx.save();
            ctx.fillStyle=  "#ff0000";
            for (let i = 0; i< this.body.length; i++) {
                drawBlock (ctx, this.body[i]);
            }
            ctx.restore();
         };
         this.advance = function () {
             let nextPosition = this.body[0].slice();
             nextPosition[0]++;
             this.body.unshift(nextPosition);
             this.body.pop();
         }
    }
}
