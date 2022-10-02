
var nombre

var nombreAnterior 

var contador = 0

function pedirNombre()
    { 
    nombre = prompt ('¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)');  

    if (nombre==null)
    {return}

    console.log(nombre);
    
    nombre=nombre.toLocaleLowerCase()
    
}

/* PRIMER PUNTO */
function preguntarNombre() {

    if (nombre==null)
    {return}


    switch(nombre){
        case "mario":
            nombre="Mario";
            break;
        case "luigi":
            nombre="Luigi";
            break;
        case "bowser":
            nombre="Bowser Morton Koopa";
            break;
        case "peach":
            nombre="Princesa Peach Toadstool";
            break;
        case "yoshi":
            nombre="T. Yoshisaur Munchakoopas";
            break;
        case "toad":
            nombre="Toad";
            break;
        case "toadette":
            nombre="Toadette";
            break;
        case "daisy":
            nombre="Princesa Daisy";
            break;   
                
        default:
            nombre="Desconocido";
        }
                
        var pSelecionado = document.getElementById('personaje');
        pSelecionado.innerHTML = nombre; 
}
            

function mostrarPersonaje() {
    
    if (nombre==null)
    {return alert ('Debes selecionar un nombre')}

    else if (nombre=="Desconocido")
    {return alert ('valor insertado desconocido')}
    
    else
    { 
    switch(nombre){
        case "Mario":
            nombre="mario";
            break;
        case "Luigi":
            nombre="luigi";
            break;
        case "Bowser Morton Koopa":
            nombre="bowser";
            break;
        case "Princesa Peach Toadstool":
            nombre="peach";
            break;
        case "T. Yoshisaur Munchakoopas":
            nombre="yoshi";
            break;
        case "Toad":
            nombre="toad";
            break;
        case "Toadette":
            nombre="toadette";
            break;
        case "Princesa Daisy":
            nombre="daisy";
            break;   
        default:
            nombre="Desconocido";
    }
    
    var Presentado = document.getElementById (nombre)
    
    Presentado.title = "Presentado"
    
    contador=contador+1

    nombreAnterior=nombre
    }
}

    
    /* function ocultarBoton()
    {
        document.getElementById('boton');
    boton.style.display = "none";
} */

function titleModificado()
    {
        if (contador == 0)
        { return }
    
    else if (nombre!='mario' && nombre!='luigi' && nombre!='bowser' && nombre!='peach' && nombre!='yoshi' && nombre!='toad' && nombre!='toadette' && nombre!='daisy' )
    
    {return;}
        else { 
            var ocultarPersonaje = document.getElementById(nombreAnterior);
            ocultarPersonaje.title='oculto'}
}



function mostrar()
{

    pedirNombre ()

    titleModificado()

    preguntarNombre()

    mostrarPersonaje()

   /*  ocultarBoton() boton oculto */


}

boton.onclick = mostrar

function presentarConClickMario()
    {
    
        if (mario.title=='Presentado')
        {mario.title = 'oculto' }
        
        else if (mario != 'Presentado')
        {mario.title = 'Presentado'}
    
}
mario.onclick = presentarConClickMario

function presentarConClickLuigi()
    {
    
        if (luigi.title=='Presentado')
        {luigi.title = 'oculto' }
        
        else if (luigi != 'Presentado')
        {luigi.title = 'Presentado'}
    
}
luigi.onclick = presentarConClickLuigi

    function presentarConClickBowser()
    {
    
        if (bowser.title=='Presentado')
        {bowser.title = 'oculto' }
        
        else if (bowser != 'Presentado')
        {bowser.title = 'Presentado'}
    
}
bowser.onclick = presentarConClickBowser

function presentarConClickPeach()
    {
    
        if (peach.title=='Presentado')
        {peach.title = 'oculto' }
        
        else if (peach != 'Presentado')
        {peach.title = 'Presentado'}
    
}
peach.onclick = presentarConClickPeach

function presentarConClickYoshi()
    {
    
        if (yoshi.title=='Presentado')
        {yoshi.title = 'oculto' }
        
        else if (yoshi != 'Presentado')
        {yoshi.title = 'Presentado'}
    
}
yoshi.onclick = presentarConClickYoshi

function presentarConClickToad()
    {
    
        if (toad.title=='Presentado')
        {toad.title = 'oculto' }
        
        else if (toad != 'Presentado')
        {toad.title = 'Presentado'}
    
}
toad.onclick = presentarConClickToad


function presentarConClickToadette()
    {
    
        if (toadette.title=='Presentado')
        {toadette.title = 'oculto' }
        
        else if (toadette != 'Presentado')
        {toadette.title = 'Presentado'}
    
}
toadette.onclick = presentarConClickToadette

function presentarConClickDaisy()
    {
    
        if (daisy.title=='Presentado')
        {daisy.title = 'oculto' }
        
        else if (daisy != 'Presentado')
        {daisy.title = 'Presentado'}
    
}
daisy.onclick = presentarConClickDaisy
