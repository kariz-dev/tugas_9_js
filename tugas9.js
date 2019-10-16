/* Tugas 9 Javascript */
// Muhammad Rizwan

function tugasSembilan(){
    var buku = {
        judul : 'Rantau Muara',
        penulis : 'Ahmad Fuadi',
        harga : Harga(),
        genre : {
            genre1 : 'biografi',
            genre2 : 'drama',
            genre3 : 'adventure'
        }
    }

    for(var x in buku){
        console.log(buku[x]);
    }

    console.log(buku.genre.genre1);
}

function Harga(){
    return "Rp85.000,-";
}

tugasSembilan();