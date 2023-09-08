 
 /* js de activacion/desactivacion de audio*/
 const boton = document.getElementById("ajuste1");
 const textoDiv = boton.querySelector("div");
 let activo = false;

 boton.addEventListener("click", function () {
     activo = !activo;
     if (activo) {
         boton.style.backgroundColor = "var(--main-red-color)";
         textoDiv.textContent = "Lector Desactivado";
     } else {
         boton.style.backgroundColor = "var(--main-green-color)";
         textoDiv.textContent = "Lector Activado";
     }
 });


 /* js desactivador de audio*/
 $(document).ready(function () {
    var audioEnabled = true;
    var audio;
    var paragraphAudio;


    $(".tema").hover(
        function () {
            if (audioEnabled) {
                var audioSrc = $(this).data("audio");
                if (!audio || audio.src !== audioSrc) {
                    audio = new Audio(audioSrc);
                }
                audio.play();
            }
        },
        function () {
            if (audioEnabled && audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    );

    $("#ajuste1").click(function () {
        audioEnabled = !audioEnabled;
        if (!audioEnabled && audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        
        // También desactivar el audio del párrafo
        if (!audioEnabled && paragraphAudio) {
            paragraphAudio.pause();
            paragraphAudio.currentTime = 0;
        }
    });

    // Captura el audio del párrafo al cargar la página
    $(".audio-trigger").each(function () {
        var audioSrc = $(this).data("audio");
        paragraphAudio = new Audio(audioSrc);
    });

    
});


 /* js de hover de audio para los Parrafos*/
 $(document).ready(function () {
    var audio;
    var audioEnabled = true;

    $(".audio-trigger").hover(
        function () {
            if (audioEnabled) {
                var audioSrc = $(this).data("audio");
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
                audio = new Audio(audioSrc);
                audio.play();
            }
        },
        function () {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    );

    // Agregar comportamiento al hacer clic en el botón con la clase .tema
    $(".tema").click(function () {
        audioEnabled = false;
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});






 /* js de audio del menu de navegacion*/
 $(document).ready(function () {
    var audioEnabled = true;
    var audio;

    $("li.tooltip-element").hover(
        function () {
            if (audioEnabled) {
                var audioSrc = $(this).data("audio");
                audio = new Audio(audioSrc);
                audio.play();
            }
        },
        function () {
            if (audioEnabled && audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        }
    );

    $("#ajuste1").click(function () {
        audioEnabled = !audioEnabled;
        if (!audioEnabled && audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});


 /* js de audio inicial*/

    // Obtén una referencia al elemento de audio
    var miAudio = document.getElementById("miAudio");

    // Función para reproducir el audio
    function reproducirAudio() {
      miAudio.play();
    }

    setTimeout(reproducirAudio, 9000);

// Función para detener el audio cuando termine
miAudio.addEventListener("ended", function() {
  miAudio.pause();
  miAudio.currentTime = 0;
})




