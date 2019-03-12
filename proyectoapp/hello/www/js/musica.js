window.onload=inicio;
var playBtn;
var credBtn;
function inicio(){ 
		// creamos el objeto audio
        var audioElement = document.createElement('audio');
        playBtn=document.getElementById("botonA");
        credBtn=document.getElementById("botonB")
 
		// indicamos el archivo de audio a cargar
		audioElement.setAttribute('src', 'tetrismusica.mp3');
 
		// Si deseamos que una vez cargado empieze a sonar...
		//audioElement.setAttribute('autoplay', 'autoplay');
        playBtn.addEventListener("click", function() {
			section01.className="ocultar"
            section02.className="principal animated bounceInDown"
            section03.className="ocultar"
            pause.className="music2 ocultar";
        });
        
        credBtn.addEventListener("click", function() {
			section01.className="ocultar"
            section02.className="ocultar"
            section03.className="creditos animated bounceInDown"
        });
        
		document.getElementById("play").addEventListener("click", function() {
			// Si deseamos que inicie siempre desde el principio
			//audioElement.currentTime = 0;
            play.className="music1 ocultar";
            pause.className="music2 animated fadeIn";
			// iniciamos el audio
			audioElement.play();
        });
        
 
		document.getElementById("pause").addEventListener("click", function() {
            // hacemos pausa
            play.className="music1 animated fadeIn";
            pause.className="music2 ocultar";
			audioElement.pause();
        });
        
        principio();
    };
    
function principio(){
    section01.className="menu animated bounceInDown"
    section02.className="principal ocultar"
    section03.className="creditos ocultar"
}