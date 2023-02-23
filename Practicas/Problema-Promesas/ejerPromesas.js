const materiaHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Fisica",
        nota: 7
    },
    {
        nombre: "Matematicas",
        nota: 5
    },
    {
        nombre: "Programacion",
        nota: 10
    },
    {
        nombre: "Base de datos",
        nota: 6
    },
    {
        nombre: "Discreta",
        nota: 9
    },
]

function obetnerInfo(id){
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*2400);  //Tiempo de carga de elementos.
    })
}

async function mostrarData(){
    let materia = [];
    for(let i=0;i < materias.length;i++){
        materia[i] = await obetnerInfo(i);
        console.log(materia[i]);
        let newHTMLcode = `<tr>
                            <th scope="row">${i+1}</th>
                            <td>${materia[i].nombre}</td>
                            <td>${materia[i].nota}</td>
                          </tr>`;
        materiaHTML.innerHTML += newHTMLcode;                  
    }
}

mostrarData();