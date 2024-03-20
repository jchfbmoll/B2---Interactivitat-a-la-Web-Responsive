
// Inicialitzam variables globals que farem servir pes carrusel i per fer que certos elements siguin dinàmics com divs que se mouen i tornen a nes seu 
// puesto inicial com els de la pàgina excursions
// variables pes carrusel de fotos: indexCarrusel i timers (guarda tots es timers)
// centreexpanded, serraexpanded i covesexpanded per fer que es divs de sa pàgina excursions s'expandeixin i tornin a nes seu llocinicial
// darkmode per activar i desactivar es mode oscur
// molta interactivitat de la pàgina es podria mantenir o ampliar amb l'ús de bases de dades o cookies, pero degut a que no feim servir es primer
// i que el segon en l'actualitat té molts temes legals a nes darrera no les feïm servir.

var indexCarrusel;
var timers = [];
var centreexpanded = 0;
var serraexpanded = 0;
var covesexpanded = 0;
var darkmode = 0;



// les 3 següents funcions, es criden al carregar es body i per l'interactivitat inicial de les distintes pàgines, totes fan apareixer es header inicialment
// la primera inicia es carrusel d'imagets de la pàgina principal
// en carregarReserva() i carregarContacte, carreguen es main   


function carregarHeader() {

    let header = document.getElementsByTagName("header");
    header[0].style.top = "2vh";
    
    carrusel(0);
}

function carregarExcursions() {

    let header = document.getElementsByTagName("header");
    header[0].style.top = "2vh";
    
}

function carregarReserva() {

    let header = document.getElementsByTagName("header");
    header[0].style.top = "2vh";

    let main = document.getElementById("reserva");
    main.style.top = "0vh";
}


function carregarContacte() {

    let header = document.getElementsByTagName("header");
    header[0].style.top = "2vh";

    let main = document.getElementById("contacte");
    main.style.top = "0vh";
}


//funcio que va modificant es carrusel cada x temps

function carrusel(n) {
    
    let slides = document.getElementsByClassName("imatgescarrusel");
    
    for (let i = 0; i < slides.length; i++) {
        if (i === n) {
            slides[i].style.right = "25%";
            slides[i].style.left = "25%";
            indexCarrusel = i;
            slides[i].style.display = "block";

        } else {
            slides[i].style.right = "-100vw";
            slides[i].style.left = "";
            slides[i].style.display = "none";
        }
    }


    timers[indexCarrusel] = setTimeout(() => {
        if (n < slides.length - 1) {
            carrusel(n + 1);
        } else {
            carrusel(0);
        }
    }, 3000);

    
}

// funcion per anar moguentse pes carrusel a través de les fletxes, dreta o esquerra 

function canviarCarrusel(n){

    clearTimeout(timers[indexCarrusel]);

    let slides = document.getElementsByClassName("imatgescarrusel");

    indexCarrusel +=n;
    

    if (indexCarrusel >= 0 && indexCarrusel < slides.length - 1){
        carrusel(indexCarrusel);
    } else if( indexCarrusel < 0){
        carrusel(slides.length - 1);
    } else {
        carrusel(0);
    }

    

}


//funció per ampliar i reduir els divs de les excursions a la pàgina excursions

function expand(excursio){

    if (excursio=='centre'){

        let excid= document.getElementById("centre");
          
        while (excid.firstChild) {
            excid.removeChild(excid.firstChild);
        }
        if (!centreexpanded){        
            centreexpanded = 1;
           

            let paragraf = document.createElement("p");
            paragraf.textContent = "Visiti els llocs més emblemàtics del centre de Palma, desde la Catedral fins a la Llotja de Palma. Disfruti de les increïbles vistes del Castell de Bellver i finalitzi aquest somni dins el Coliseu Balear.";
            excid.appendChild(paragraf);
            let imatge = document.createElement("img");
            imatge.setAttribute("src","./img/catedral-de-palma.jpg");
            excid.appendChild(imatge);

            let topexcid= document.getElementById("topcentre");
            if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
                topexcid.style.height = "35vh";    
            } else{ 
                topexcid.style.height = "35vh";            
            }
            


        } else {
            centreexpanded = 0;
            let topexcid= document.getElementById("topcentre");
            topexcid.style.height = "5vh";

        }
    } else if (excursio=='serra'){

        let excid= document.getElementById("serra");
          
        while (excid.firstChild) {
            excid.removeChild(excid.firstChild);
        }
        if (!serraexpanded){        
            serraexpanded = 1;
           

            let paragraf = document.createElement("p");
            paragraf.textContent = "Disfruti dels pobles més famosos de Mallorca com Valldemossa, on varen viure grans celebritats com Frederic Chopin o George Sand. Descobreixi els racons més amagats de Deià com va feren fer Robert Graves i Anaïs Nin. I finalitzi aquesta meravellosa aventura menjant unes gambes vermelles en el Port de Sòller.";
            excid.appendChild(paragraf);
            let imatge = document.createElement("img");
            imatge.setAttribute("src","./img/IMG_8825-scaled.webp");
            imatge.style.height = "45vh";
            excid.appendChild(imatge);

            let topexcid= document.getElementById("topserra");
            if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
                topexcid.style.height = "55vh";    
            } else { 
                topexcid.style.height = "55vh";
            }


        } else {
            serraexpanded = 0;
            let topexcid= document.getElementById("topserra");
            topexcid.style.height = "5vh";

        }
    } else if (excursio=='coves'){

        let excid= document.getElementById("coves");
          
        while (excid.firstChild) {
            excid.removeChild(excid.firstChild);
        }
        if (!covesexpanded){        
            covesexpanded = 1;
           

            let paragraf = document.createElement("p");
            paragraf.textContent = "Somiï despert dins les Coves del Drac, on trobarà el llac Martel, el llac subterrani més gran de Europa. Trobi el luxe visitant la fàbrica de Perles Majorica, i descansi en una de les meravelloses i idíliques Cales de l'est de Mallora.";
            excid.appendChild(paragraf);
            let imatge = document.createElement("img");
            imatge.setAttribute("src","./img/coves-del-drach-1280x881.jpg");
            excid.appendChild(imatge);

            let topexcid= document.getElementById("topcoves");

            
            if (screen.orientation.angle === 0 || screen.orientation.angle === 180) {
                topexcid.style.height = "35vh";    
            } else{ 
                topexcid.style.height = "35vh";
            }


              

        } else {
            covesexpanded = 0;
            let topexcid= document.getElementById("topcoves");
            topexcid.style.height = "5vh";    


        }
    }


}


// funcion per crear interactivitat en es formulari de reserves, fa apareixer i desapareixer es diferents inputs en funció
// del select inicial, es primer camp des formulari


function canviarform(){


    let reserva = document.getElementById("tipus").value;
    let origen = document.getElementById("orifield");
    let destifield = document.getElementById("destifield");
    let excursio = document.getElementById("destexc");  
    let datafield = document.getElementById("datafield");

    let horafield = document.getElementById("horarifield");
    let altra = document.getElementById("altra");
    let submit = document.getElementById("submit");



    origen.style.top = "0vh";
    setTimeout(() => {
        submit.style.top ="90vh";    

      }, 100);
      
    setTimeout(() => {
        altra.style.top ="90vh";    

    }, 100);
    setTimeout(() => {
        horafield.style.top ="90vh";

    }, 100);
    setTimeout(() => {
        datafield.style.top ="90vh";

    }, 100);
    setTimeout(() => {
        excursio.style.top ="90vh";
        destifield.style.top ="90vh";
    }, 100);
    
 
    setTimeout(() => {
        
 
       
            if (reserva=="taxi" || reserva =="transfer"){
                destifield.style.top ="0vh";
            } else { 
                excursio.style.top ="-4vh";
            }    
        
    }, 1100);

    setTimeout(() => {
         
            horafield.style.top ="-3.95vh";
        

    }, 1100);
    setTimeout(() => {
        
            datafield.style.top ="-3.95vh";
        
    }, 1100);
    setTimeout(() => {
        
           altra.style.top ="-3.95vh";
        
    }, 1100);
    
    setTimeout(() => {
        
            submit.style.top ="-3.95vh";
        
    }, 1100);
    
}

// funció per validar es formulari de reserves

function validacioreserva(){

    let excursio = document.getElementById("excursio");
    let desti = document.getElementById("desti");


    if (excursio.value=='' && desti.value==''){

        alert("Triï una excursió o un destí");
        return false;
    }


    let data = document.getElementById("data");
    const date = new Date().toLocaleDateString();;
    if (data.value<date){


        alert("Introdueix una data correcte");
        return false;
    }
    alert("Reserva realitzada correctament");

    return true;
}


// funció per validar es formulari de contacte que mira si es camps han estat omplerts o no

function validaciocontacte(){


    let email = document.getElementById("email");
    let info = document.getElementById("info");

    if (email.value ==''){ 
        alert("Introdeix es teu mail");

        return false;
    }

    if (/^[a-zA-z][a-zA-Z0-9.-_]*@[a-zA-Z0-9]+\.+[a-zA-Z]{2,4}\.[a-zA-Z]{0,2}$/.test(email.value)){

        alert("Email incorrecte, introdueix un mail correcte");

        return false;

    }

    if (info.value ==''){
        alert("Introdeix sa teva al·legació");

        return false;

        
    }
    let comments = document.getElementById("comments");

    alert("Formulari enviat correctament");

    return true;


}

// funció per validar es formulari de comentaris i en cas que siguin correctes, es mostren per pantalla, i modifica s'estructura de sa pantalla per a que es vegi correctament

function afegircomentari(){

    let nom = document.getElementById("nom");
    let comentari = document.getElementById("infocomm");

    if (nom.value ==''){ 
        alert("Introdeix es teu nom");

        return false;
    }

    if (comentari.value ==''){
        alert("Introdeix es teu comentari");

        return false;

        
    }
    let comments = document.getElementById("comments");

    let paragraf = document.createElement("p");
    paragraf.textContent =  "En " + nom.value + " ens ha dit que: " + comentari.value;
    comments.appendChild(paragraf);
    paragraf.focus();
    paragraf.scrollIntoView();
    alert("Comentari introuït satisfactoriament");
        
    /*let footer = document.getElementsByTagName("footer");
    let bottom =  paragraf.offsetTop;
    let top = paragraf.offsetHeight;

    footer[0].style.top = `${bottom+top}px`;
    footer[0].focus();
    footer[0].scrollIntoView();*/
    

}


// funció per canviar entre modos nocturn i diurn, converteix el fons a negre i ses lletres negres a blanques   

function canviarmode(){

    let body = document.getElementsByTagName("body");

    if (darkmode){  
        darkmode = 0;
        body[0].style.backgroundColor = "white";


        let paragrafs = document.getElementsByTagName("p");

        for(var i = 0; i<paragrafs.length;i++){


            paragrafs[i].style.color ="black";

        }

        let imatge = document.getElementById("mode");
        imatge.setAttribute("src","./img/dark.png");
        let dreta = document.getElementsByClassName("next");
        dreta[0].style.color ="black"; 
        let esq = document.getElementsByClassName("prev");
        esq[0].style.color ="black";


    } else {
        darkmode = 1 ;
        body[0].style.backgroundColor = "black";


        let paragrafs = document.getElementsByTagName("p");

        for(var i = 0; i<paragrafs.length;i++){


            paragrafs[i].style.color ="white";

        }

        let imatge = document.getElementById("mode");
        imatge.setAttribute("src","./img/sol.png");
        let dreta = document.getElementsByClassName("next");
        dreta[0].style.color ="white"; 
        let esq = document.getElementsByClassName("prev");
        esq[0].style.color ="white";

    }




}
