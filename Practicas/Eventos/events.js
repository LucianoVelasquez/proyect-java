const x = document.querySelector(".but");
const img = document.querySelector(".img-prueba");

//Eventos click

x.addEventListener("click",(e)=>{//Evento click.
    alert("hola perro");
    e.stopPropagation(); //para que no se ejecute otro evento (si es que sus padres tiene eventos.)
})


x.addEventListener("dblclick",(e)=>{ //Evento double click
    alert("hola perro");
    e.stopPropagation(); //para que no se ejecute otro evento (si es que sus padres tiene eventos.)
})


y.addEventListener("mouseover",(e)=>{ //Evento mouseover
    alert("hola perro");
    e.stopPropagation(); //para que no se ejecute otro evento (si es que sus padres tiene eventos.)
})

//Evento interzas
img.addEventListener("error",()=>{
    console.log("ha sucedido un errir"); //sino carga la imagen salta ese mensj 
})

addEventListener("load",()=>{
    console.log("a cargado el sitio");
}) */

//Callbacks
function saludar(nombre) {
    alert('Hola ' + nombre);
}
  
function procesarEntradaUsuario(callback){
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar)


//Promesas
class persona{   //Defino clase personas
    constructor(nombre,instagram,numero){
        this.nombre = nombre;
        this.instagram = instagram;
        this.numero = numero;
    }
};

const datos = [            //Datos para rellenar
    ["Luciano","@Vel","3444511"],
    ["Maria lujan","@lujanM","4534534"],
    ["Jonatan","@JJonatan","1233"],
];

const personas = [];  //Array de objetos persona
for(let i = 0; i < datos.length;i++){
    personas[i] = new persona(datos[i][0],datos[i][1],datos[i][2]);  //cargamos los datos.
}


function ObtenerPersona(id){          //Funcion con un parametro.
    return new Promise((resolve,reject)=>{       //Que retorna un resultado positivo o negativo.
        if(personas[id] == undefined) reject("No se encuentra la persona"); //Si se cumple retorna un resultado negativo (un error).
        else {resolve(personas[id])}  //De lo contrario retorna un resultado positivo.
    })
}
function obtenerInstagram(id){
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram == undefined) reject("Este usuario no tiene instagram");
        else {resolve(personas[id].instagram)}
    })
};
function obtenerNumero(id){
    return new Promise((resolve,reject)=>{
        if(personas[id].numero == undefined) reject("Este usuario no tiene numero");
        else {resolve(personas[id].numero)}
    })
};

ObtenerPersona(2).then((sujeto)=>{ //LLamamos a la funcion principal y luego con then obtenemos el resultado de la funcion principal.
    console.log(sujeto.nombre); //Si es positivo (resolve) ejecuta esta parte del codigo.
    return obtenerInstagram(2);
    
}).then((instagram)=>{
    console.log(instagram);
    return obtenerNumero(2);
}).then((numero)=>{
    console.log(numero);
}).catch((error)=>{
    console.log(error);
});


//Await y Async

function obtenerInfo(text){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {resolve(text)},Math.random()*200)
    })
}

async function mostrarData(){
    data1 = await obtenerInfo("Juan carlos");
    data2 = await obtenerInfo("maria del carmen");
    data3 = await obtenerInfo("Pedrito");

    console.log(data1);
    console.log(data2);
    console.log(data3);
}
mostrarData()