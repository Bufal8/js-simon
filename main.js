// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// Ricordatevi che su Crhome può, con il prompt, dare problemi nel tempo di sparizione dei numeri.
// E’ normale, quindi non perdete tempo su quello, provate semmai su Firefox, e se tutto funge provare a passare da prompt a input.

let stringaSimone = creaXNumeriRandomInRange(1,5);

let numeriDaRicordare = document.getElementById("main-string")

numeriDaRicordare.innerHTML += `Simone dice: ${stringaSimone}`;

setTimeout (sparizioneStringa, 30000);
setTimeout (rispostaUtente, 32000)
// Genera 5 numeri casuali

// visualizzali per 30 secondi

// utente inserisce numero visualizzato * 5

// rispomdi quali e quanti corretti



// FUNZIONI

// crea numeri random tra min e max
function creaNumeroRandomInRange(nMin, nMax) {
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin); 
}

// Funzione che genera x numeri casuali in range scelto
function creaXNumeriRandomInRange(min, max){
    const numeriCasuali = [];
    
    while(numeriCasuali.lenght < max){
        
        const numeroArray =  creaNumeroRandomInRange(1, 100)
        if(!numeriCasuali.includes(numeroArray)){
            numeriCasuali.push(numeroArray)
        }
    }
    return numeriCasuali
}


// Funzione che appende la classe che permetta la sparizione delle stringhe
let simoneArray = []
function sparizioneStringa (){
    numeriDaRicordare.innerHTML =  "";
}

function rispostaUtente () {
    for (i=0; i<stringaSimone.length;i++) {
        let indovinaNumero = parseInt(prompt ("Inserisci un numero")) 
        simoneArray.push(indovinaNumero)
        
        console.log(simoneArray);
        
    }

    if (stringaSimone.toString() === simoneArray.toString()) {
        
        numeriDaRicordare.innerHTML = `ESATTO! CHE MEMORIA INCREDIBILE`;
        
    }
    
    else {
        
        numeriDaRicordare.innerHTML = `PECCATO! HAI PERSO.`;
        
    }
    
       
}