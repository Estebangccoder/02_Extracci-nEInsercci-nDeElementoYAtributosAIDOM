// const header=document.getElementsByTagName("header") Forma anterior de hacerlo
// console.log(header[0]) 

const header = document.querySelector("header")

const titulo = document.createElement("h1")


titulo.textContent = "Galeria de Perritos"
// titulo.setAttribute("id","titulo-principal") Forma anterior de hacerlo
titulo.id = "titulo-principal"
// titulo.style.color="blue" pone css en el html eso no lo queremos hacer
titulo.classList.add("text-primary", "py-2")
titulo.classList.add("text-center")
titulo.classList.add("bg-dark")

header.appendChild(titulo)
















const main = document.querySelector("main")

for (let i = 0; i < 70; i++) {
    main.innerHTML +=`
    <section class="card text-capitalize d-flex justi" style="width: 18rem;">
    <img src="./public/img/pomsky.webp" class="card-img-top" alt="Perrito">
    <div class="card-body">
        <h3 class="card-title text-center">lobito</h3>
        <span class="fw-bold">Raza:</span> <span>Chandita</span> <br>
        <span class="fw-bold">Edad:</span> <span>3 meses</span>
        <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt delectus nemo qui quo,
            tempor...
        </p>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary" type="button">adoptame</button>
        </div>
    </div>
    </section>

    `
 }
 
