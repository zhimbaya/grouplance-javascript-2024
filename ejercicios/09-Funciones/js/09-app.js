const reproductor = {
    reproducir: function(id){ //esto es un método
        console.log(`Reproducir una canción id....${id}`);
    },
    pausar: function(){
        console.log(`En pausa`);
    }
}
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar = function(){
    console.log();
}