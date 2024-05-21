const reproductor = {
    reproducir: function(id){ //esto es un método
        console.log(`Reproducir una canción id....${id}`);
    },
    pausar: function(){
        console.log(`En pausa...`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando ${nombre} playlist....`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist ${nombre}`);
    }
}
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar = function(id){
    console.log(`Canción ${id} eliminada...`);
}

reproductor.borrar(50);

reproductor.crearPlaylist("rock");
reproductor.reproducirPlaylist("rock");