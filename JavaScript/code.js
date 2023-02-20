function crearLLave(nombre,modelo,precio){
  img = "llave.png";
  nombre = `<h1>${nombre}</h1>`
  modelo = `<h2>${modelo}</h2>`
  precio = `<p>Precio:$${precio}</p>`

  `<div class="card col" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`

  return [nombre,modelo,precio,img];
}

let llave = crearLLave("Comun","Talle XL","350");
