import { destacado , combos , productos ,sabores} from "../../data/productos.js";



const contentLinks = document.querySelectorAll(".content-links"),
containerAcordion = document.querySelectorAll(".content-prod")

let cantidadSabores = 4;

// DESTACADO

 
const $template = document.querySelector("#template-destacado").content,
$fragmen = document.createDocumentFragment(),
containerDestacado = document.querySelector(".content-slider-destacado");


destacado.forEach((el) => {
     
    $template.querySelector(".item-title").textContent = el.title;
    $template.querySelector(".item-desc").textContent = el.descripcion;
    $template.querySelector(".item-price").textContent = "$" + el.price;
    $template.querySelector("img").src = el.img;
    $template.querySelector(".item").dataset.id = el.id;
    let $clone = document.importNode($template,true);
    
    $fragmen.appendChild($clone);
    
    containerDestacado.appendChild($fragmen)
})


//COMBO

const $templateCombo = document.querySelector("#template-combo").content,
containerCombo = document.querySelector(".content-combos-promos");

combos.forEach((el)=>{

    $templateCombo.querySelector(".title-prod-combo").textContent = el.title;
    $templateCombo.querySelector(".descripcion-prod-combo").textContent = el.descripcion;
    $templateCombo.querySelector(".item-price").textContent = "$" + el.price;
    $templateCombo.querySelector("img").src = el.img;
    $templateCombo.querySelector(".container-item-combo").dataset.id = el.id;
  
    const listaCombos = $templateCombo.querySelector(".lista-items-combo");
    listaCombos.innerHTML = "";

    for(let i = 0; i < el.has.length; i++) {

        let $li = document.createElement("li"); 
        
        $li.classList.add("list-combo");
        
    
        $li.textContent = `- ${el.has[i].cant} ${el.has[i].name}`

        listaCombos.appendChild($li);
    }


    let $clone = document.importNode($templateCombo,true);
    
    $fragmen.appendChild($clone);
    
    containerCombo.appendChild($fragmen)

})


/* ALL PRODUCTOS - ACORDION */

const $templateHeladeria = document.querySelector(".template-heladeria").content;


function showProducts (template,contentHeader,contentBody,producto,typeProd){
   
    const $template = document.querySelector(template).content,
    header = document.querySelector(contentHeader),
    body = document.querySelector(contentBody),
    fragmen = document.createDocumentFragment();

   //HEADER IMG
   producto.headerImg.forEach(img => {
    const $img = document.createElement("img");
    $img.src = img 
    $img.classList.add("img-header")
    header.appendChild($img)
   })
 
   producto.prod.forEach(item => {
    //Set data-id
    
    //BODY  
    $template.querySelector(".item-menu").dataset.categoria = typeProd;
    $template.querySelector(".item-menu").dataset.id = item.id;
    $template.querySelector(".item-title").textContent = item.title;
    $template.querySelector(".item-desc").textContent = item.descripcion;
    $template.querySelector(".item-price").textContent = "$" + item.price;
   
   if(item.img){
    const imgCard = document.createElement("img");
    imgCard.src = item.img;
    $template.querySelector(".content-img-item").innerHTML = ""
    $template.querySelector(".content-img-item").appendChild(imgCard)
   }
   else {
    $template.querySelector(".content-img-item").innerHTML = ""
   }
// IS-FAVORITE

const isFavorito = $template.querySelector(".is-fav");
isFavorito.textContent = ""
isFavorito.classList.remove("active-fav");

if(item.isFav){
isFavorito.textContent = "Favoritos"
isFavorito.classList.add("active-fav");
} 

// OFFER

$template.querySelector(".item-price-descuento").textContent = "";

if(item.offer){
    $template.querySelector(".item-price-descuento").textContent = item.offer

}

// OPCIONS
   const spanOptions = $template.querySelector(".options");
   spanOptions.textContent = "";
   spanOptions.classList.remove("is-active");

   if(item.hasOptions){
    spanOptions.textContent = "mas opciones";
    spanOptions.classList.add("is-active");
   }

   if(item.withOptions[1] === "4sabores" || item.withOptions[1] === "3sabores"){
    spanOptions.classList.remove("is-active");
    spanOptions.textContent = ""
 }

 $template.querySelector(".item-menu").removeAttribute("data-cant-sabores")
  if(item.withOptions[1] === "4sabores"){
    $template.querySelector(".item-menu").dataset.cantSabores = "4";
  }

  if(item.withOptions[1] === "3sabores"){
    $template.querySelector(".item-menu").dataset.cantSabores = "3";
  }
  
   // CLONACION Y PUSHEO

   const clone = document.importNode($template, true);
   fragmen.appendChild(clone)
   body.appendChild(fragmen);

   })

}


showProducts(".template-heladeria",".header-heladeria",".body-heladeria",productos.heladeria,"heladeria")
showProducts(".template-saludables",".header-saludables",".body-saludables",productos.saludables,"saludables")
showProducts(".template-pasteleria",".header-pasteleria",".body-pasteleria",productos.pasteleria,"pasteleria")
showProducts(".template-panaderia",".header-panaderia",".body-panaderia",productos.panaderia,"panaderia")
showProducts(".template-salado",".header-salado",".body-salado",productos.salados,"salado")
showProducts(".template-cafe",".header-cafe",".body-cafe",productos.cafes,"cafes")
showProducts(".template-rapido",".header-rapido",".body-rapido",productos.desayunoRapido,"rapido")


/* CARRITO DE COMPRAS*/

let shoppingCart = [];
// DOCUMENT EVENTOS GENERALES CON DELEGACION DE EVENTOS
document.addEventListener("click", (e) => {
    const itemMenu = e.target.closest(".item-menu");    
    const itemDestacado = e.target.closest(".item");
    const carritoFixed = e.target.closest(".carrito");
    const itemCombo = e.target.closest(".container-item-combo");

    if(itemCombo){
        pushCart(itemCombo.dataset.id,"combos")
    }
    
    if(itemDestacado){
        pushCart(itemDestacado.dataset.id,"destacado")
    }

    if(e.target.matches("#final-pedido")){

        const mensaje = encodeURIComponent(generarListaDeProductos(shoppingCart));
        const numeroTelefono = "5491159740964"; // El número de WhatsApp en formato internacional (sin +)
        const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${mensaje}`;
        
        window.location.href = enlaceWhatsApp;
        console.log(enlaceWhatsApp);  
        console.log(mensaje)

    }
    //evento para Get Prod / id / categoria
    if (itemMenu) {
        const prodID = itemMenu.dataset.id;  
       pushCart(prodID,itemMenu.dataset.categoria)
       cantidadSabores = parseInt(itemMenu.dataset.cantSabores);
    }
    if(e.target.id === "close"){
        closeModal();
    }

    if(e.target.matches("#myModal *")){
        hearModal(e);
    }
    if(carritoFixed){
      const cartContent = document.querySelector(".carritoProd");
      document.querySelector(".overlay").classList.toggle("overlay-active")
      cartContent.classList.toggle("openCart");
      actualizarCarrito();
    }
   
    // sumar cantidad carrito 
    if(e.target.matches(".carrito-mas")){
        let getId = parseInt(e.target.dataset.mas)
        console.log(getId);
        if(getId === 201 || getId === 202 || getId === 203) {return}
        shoppingCart.find(el => {
            if(el.id === getId){
                el.cantidad += 1;
                e.target.previousElementSibling.textContent = el.cantidad;
            }
            actualizarCarrito();
        })
    }
    if(e.target.matches(".carrito-menos")){
        let getId = parseInt(e.target.dataset.menos)
        if(getId === 201 || getId === 202 || getId === 203) {return}
        shoppingCart.find(el => {
            if(el.cantidad > 1){
                if(el.id === getId){
                    el.cantidad -= 1;
                    e.target.nextElementSibling.textContent = el.cantidad;
                }

            } 
            
        })
        actualizarCarrito();
    }
    //borrar producto

    if(e.target.matches(".carrito-delete")){
        let idDelete = parseInt(e.target.dataset.delete);
        shoppingCart = shoppingCart.filter(el => el.id !== idDelete);

        showCarrito(shoppingCart);
    }
});

document.addEventListener("change",(e)=>{
    hearCheckbox(cantidadSabores);
})

function pushCart(id,typeProd){

const idProd = parseInt(id);

if(typeProd === "combos"){
    const getProd = combos.find(el => el.id === idProd);
    
    let newDescripcion = [];
    for(let y = 0; y < getProd.has.length; y++){
        newDescripcion.push(getProd.has[y].name);
    }
    getProd.descripcion = newDescripcion.join(" - ")
    openModalOrPush(getProd);
}

if(typeProd === "destacado"){
    const getProd = destacado.find(el => el.id === idProd);
    openModalOrPush(getProd);
}

if(typeProd === "heladeria"){
    const getProd = productos.heladeria.prod.find(el => el.id === idProd);
    openModalOrPush(getProd);
   }
if(typeProd === "panaderia"){
    const getProd = productos.panaderia.prod.find(el => el.id === idProd);
    openModalOrPush(getProd);
    }
if(typeProd === "salado"){
    const getProd = productos.salados.prod.find(el => el.id === idProd);
    openModalOrPush(getProd);
    }
if(typeProd === "pasteleria"){
    const getProd = productos.pasteleria.prod.find(el => el.id === idProd);
    openModalOrPush(getProd);
    }
if(typeProd === "saludables"){
    const getProd = productos.saludables.prod.find(el => el.id === idProd);
    openModalOrPush(getProd);
    }
if(typeProd === "cafes"){
    const getProd = productos.cafes.prod.find(el => el.id === idProd);
    openModalOrPush(getProd);
    }
}


/* OPEN AND CLOSE MODAL*/
function openModal(prod){

document.querySelector("#myModal").style.display = "block";
document.querySelector(".modal-header").style.display = "block"
const {id,img,title,descripcion,withOptions,price} = prod;
//variables modal
const imgModal = document.querySelector(".modal-img"),
titleModal = document.querySelector(".modal-title"),
descripcionModal = document.querySelector(".modal-descripcion"),
containerOptions = document.querySelector(".modal-content-options"),
templeteOptions = document.querySelector(".template-optionsModal").content,
fragmenModal = document.createDocumentFragment(),
btnUnidades = document.querySelectorAll(".btn-unidades"),
templateSabores = document.querySelector(".template-sabores").content;
const btnPush = document.querySelector("#pushPedido"); 
 
let cantidad = 1;
btnUnidades[1].textContent = cantidad;  


containerOptions.innerHTML = "";

img != null ? imgModal.src = img : document.querySelector(".modal-header").style.display = "none";
titleModal.textContent = title;
descripcionModal.textContent = descripcion;

// RESET DATA SET EN BTN PEDIDO 

 btnPush.removeAttribute("data-heladoid");
 btnPush.removeAttribute("data-img");
 btnPush.removeAttribute("data-title");
 btnPush.removeAttribute("data-price");
 btnPush.removeAttribute("data-modal-ice_Cream");

//OPEN MODAL SABORES
if(withOptions[0] === "show-sabores"){
    btnPush.dataset.heladoid= id;
    btnPush.dataset.img = img;
    btnPush.dataset.title = title;
    btnPush.dataset.price = price;
    btnPush.dataset.type= "modal-iceCream";

   document.querySelector("#unidades-mas").dataset.produc = title;
   document.querySelector("#unidades-menos").dataset.produc = title
      
    sabores.forEach(element =>{
        CreabeInputSabor(element[0],element[1],containerOptions);         
        })
}
//OPEN MODAL NORMAL
else {
    document.querySelector("#pushPedido").dataset.type = "moda-normal"
    withOptions.forEach(({name,price},index) => {
    
        const clonOptions = templeteOptions.cloneNode(true);
        clonOptions.querySelector(".label-title").textContent = name;
        clonOptions.querySelector(".label-title").setAttribute("for",`option${index}`)
        clonOptions.querySelector(".modal-price").textContent = "$" + price;
        clonOptions.querySelector(".input-option").id = `option${index}`
        clonOptions.querySelector(".input-option").dataset.title = name;
        clonOptions.querySelector(".input-option").dataset.price = price;
        clonOptions.querySelector(".input-option").dataset.img = img;
        clonOptions.querySelector(".input-option").dataset.id = id;
        if(index === 0) {
            clonOptions.querySelector(".input-option").checked = true;
        }
        fragmenModal.appendChild(clonOptions);
        
    })
    containerOptions.appendChild(fragmenModal);
}

}


function closeModal(){
    document.querySelector("#myModal").style.display = "none";
}
closeModal()




function hearModal(e){
  const btnUnidades = document.querySelectorAll(".btn-unidades");
  if (document.querySelector("#myModal").style.display === "block") {
       let cantidad = parseInt(document.querySelector("#unidades").textContent);
       btnUnidades[1].textContent = cantidad;  
            
        if(e.target.matches("#unidades-mas")){
            cantidad += 1;
            console.log(e.target.dataset.produc)
            if(e.target.dataset.produc === "1kg de Helado"){
                let tope = 4;
                cantidadSabores += tope
                console.log(cantidadSabores)
            }

            if(e.target.dataset.produc === "1/2kg de Helado" || e.target.dataset.produc === "1/4kg de Helado"){
                let tope = 3;
                cantidadSabores += tope
                console.log(cantidadSabores)
            }

        }
        if(e.target.matches("#unidades-menos")){
            
            if(cantidad <= 1 ){ return}
                cantidad-- 

            if(e.target.dataset.produc === "1kg de Helado"){
                let tope = 4;
                cantidadSabores -= tope
                console.log(cantidadSabores)
            }

            if(e.target.dataset.produc === "1/2kg de Helado" || e.target.dataset.produc === "1/4kg de Helado"){
                let tope = 3;
                cantidadSabores -= tope
                console.log(cantidadSabores)
            }
        }
        document.querySelector(".modal-descripcion").textContent = `Hasta ${cantidadSabores} sabores`
        btnUnidades[1].textContent = cantidad;
    
        
   
        if(e.target.matches("#pushPedido")){
            
            const cantidadProductos = document.querySelector("#unidades").textContent;
             
             if(e.target.dataset.type === "modal-iceCream") {
            //Get sabores
              const getSabores = document.querySelectorAll(".checkBox");
              let choisedSabores = [];
              getSabores.forEach(i =>{ if(i.checked){choisedSabores.push( i.value)}})
         
            //Get producto
            
             const btnPedido = document.querySelector("#pushPedido");
             let estaEnCarrito = shoppingCart.some(isProd => {
                return isProd.id === parseInt(btnPedido.dataset.heladoid)
             })
             
             if(estaEnCarrito){
            
                shoppingCart.find(el => {
                    console.log(el);
                    if(el.id === parseInt(btnPedido.dataset.heladoid)){

                    console.log(el);
                    if(el.title === "1kg de Helado" || el.title === "1/2kg de Helado" || el.title === "1/4kg de Helado"){
                        let moreSabores = el.descripcion
                        choisedSabores.forEach(el => moreSabores.push(el));
                        
                    }
                    
                    el.cantidad += parseInt(cantidadProductos);
                    showCarrito(shoppingCart);
                    actualizarCarrito();
                    return closeModal();
                    }
                })
             }
             else {
                //pushProducto
                shoppingCart.push({
                id: parseInt(btnPedido.dataset.heladoid),
                img: btnPedido.dataset.img,
                title: btnPedido.dataset.title,
                price: parseInt(btnPedido.dataset.price),
                cantidad,
                descripcion: choisedSabores
            })
                showCarrito(shoppingCart);
                actualizarCarrito();
                return closeModal();
             }
             
             }
             else{
                 
                const inputs = document.querySelectorAll(".input-option");
                let inputCheked;
                inputs.forEach(i =>{ if(i.checked){inputCheked = i}})
                
                let estaEnCarrito = shoppingCart.some(isProd => {
                    return isProd.id === parseInt(inputCheked.dataset.id)
                })
                if(estaEnCarrito){
                    shoppingCart.find(el => {
                        if(el.id === parseInt(inputCheked.dataset.id)){
                        el.cantidad += parseInt(cantidadProductos);
                        showCarrito(shoppingCart);
                        actualizarCarrito();
                        return closeModal();
                        }
                    })
                }else {
                    
                    shoppingCart.push({
                        id: parseInt(inputCheked.dataset.id),
                        img: inputCheked.dataset.img,
                        title: inputCheked.dataset.title,
                        price: parseInt(inputCheked.dataset.price),
                        cantidad
                        
                    })
                    cantidad = 1;                
                    showCarrito(shoppingCart);
                    actualizarCarrito();
                    return closeModal();
                }
            }
        }
    }
  
}


function CreabeInputSabor(type,sabores, containerOptionss){

       const contentSabores = document.createElement("li");
       const spanTitle = document.createElement("span");
       spanTitle.textContent = type;
       spanTitle.classList.add("title-sabores-modal");
       contentSabores.classList.add("modal-sabores");
       contentSabores.appendChild(spanTitle);

    sabores.forEach(sabor => {

            const labelSabor = document.createElement("label"),
            checkbox = document.createElement("input");
        
            labelSabor.textContent = sabor;
            labelSabor.for = sabor;
            labelSabor.classList.add("label-sabores");
        
            checkbox.type="checkbox";
            checkbox.id= sabor;
            checkbox.name = sabor;
            checkbox.value = sabor;
            checkbox.classList.add("checkBox");
        
            labelSabor.appendChild(checkbox);
            contentSabores.appendChild(labelSabor);
    })

containerOptionss.appendChild(contentSabores);

}

function hearCheckbox(maximo){

    const maxSabores = maximo;
    let cantSabores = 1;

    const labels = document.querySelectorAll(".label-sabores input");
    labels.forEach(inputBox => {
    
        if(inputBox.checked){
            if(cantSabores === maxSabores) {
                labels.forEach(box => {
                    box.disabled = true;
                    if(box.checked){
                        box.disabled = false
                    }
                })
            }
            else {
                labels.forEach(box => {
                    box.disabled = false
                })
                cantSabores++                
            }
        }  
    })
}


//id: getProd.id, img: getProd.img, title: getProd.title, descripcion: getProd.descripcion, options: getProd.withOptions
function openModalOrPush(objeto){

    const {id,img,title,descripcion,price,withOptions} = objeto
    img != null ? img : null
    if(objeto.hasOptions){
        openModal(objeto);
    }
    else {



        let estaEnCarrito = shoppingCart.some(isProd => {
            return isProd.id === id;
        })
        if(estaEnCarrito){


            shoppingCart.find(el => {
                if(el.id === id){
                el.cantidad += 1;
                showCarrito(shoppingCart);
                actualizarCarrito();
                return closeModal();
                }
            })
        }else {
            shoppingCart.push({
                id,
                img,
                title,
                descripcion,
                price,
                cantidad: 1
            })
            showCarrito(shoppingCart);
            actualizarCarrito();
        }        
     }
}

function showCarrito(producto){

document.querySelector(".slide-carrito").innerHTML = "";

const $templateCarrito = document.querySelector(".template-carrito-item").content;
const $fragmenCarrito = document.createDocumentFragment();

producto.forEach((prod)=>{
    let carritoItem = $templateCarrito.cloneNode(true);
    const {id, img, title, price, cantidad ,descripcion } = prod

    carritoItem.querySelector(".carrito-item-title").textContent = title 
    carritoItem.querySelector(".carrito-item-price").textContent = "$" + price;
    carritoItem.querySelector(".prod-cant").textContent = cantidad;
    carritoItem.querySelector(".carrito-item-price").dataset.price = price;
    carritoItem.querySelector(".carrito-item-price").dataset.productoid = id;
    carritoItem.querySelector(".carrito-item-desc").textContent = descripcion;
    carritoItem.querySelector(".carrito-delete").dataset.delete = id;
    carritoItem.querySelector(".carrito-menos").dataset.menos = id;
    carritoItem.querySelector(".carrito-mas").dataset.mas = id;
    
    if(img === null || img === "null"){
        carritoItem.querySelector(".carrito-content-img").style.display = "none"
    }
    else {
        carritoItem.querySelector(".img-cart").src = img 
    }
   $fragmenCarrito.appendChild(carritoItem);
})

document.querySelector(".slide-carrito").appendChild($fragmenCarrito);
 actualizarCarrito();
}





function actualizarCarrito (){
const total = document.querySelector(".carrito-final-price")

let acumulador = 0;

shoppingCart.forEach(el => {
acumulador += el.cantidad * el.price    
});
console.log(shoppingCart)
total.textContent = "$" + acumulador;
}



containerAcordion.forEach(el => {
    el.addEventListener("click",(e)=>{
        let acordion = e.currentTarget.nextElementSibling;

        if(acordion.style.maxHeight) {
                    acordion.style.maxHeight = null;
                }
                else {
                    acordion.style.maxHeight = `${acordion.scrollHeight}px`;
                }
    })
});


// REDIRECCION A WHATSAPP

function generarListaDeProductos(productos) {
    let lista = "Lista de productos:\n\n";
    
    productos.forEach((producto) => {

      lista += `${producto.title}\n`;
      lista += `Precio: $${producto.price}\n`;
      lista += `cantidad: ${producto.cantidad}\n`;
      console.log(productos.descripcion)
      if((typeof(producto.descripcion) === "string") || (typeof(producto.descripcion) === "object")){
      lista += `Descripción: ${producto.descripcion}\n\n`;
      }      
    });
    
    return lista;
  }

