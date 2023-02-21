


for(let i = 0; i < 10;i++){
  const contenedor = document.querySelector(`.L${i+1}`);  //Clase del DIV
  const item = document.createElement("h6");             //Creamos el Item1
  const item2 = document.createElement("h6");
  let modeloRandom = Math.round(Math.random()*5000);          //Variable modelo para numero random
  let precioRandom = Math.round(Math.random()*3500+357);      //Varaible precio para numero random
  item.innerHTML = `Precio: $${precioRandom}`;
  item2.innerHTML = `Modelo: ${modeloRandom}`;
  item.style.marginTop = "10px";
  contenedor.insertBefore(item2,contenedor.children[1]);   //Sirve para colocar el item en una posicion dentro de los hermanos.
  contenedor.appendChild(item);
}



