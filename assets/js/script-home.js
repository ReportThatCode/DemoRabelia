const sedeNumber = document.querySelector(".number-phone"),
sedeCuidad = document.querySelector(".cuidad "),
sedeDireccion = document.querySelector(".direccion"),
sedemap = document.querySelector(".mapa"),
sedeImg = document.querySelector(".sede-img"),
allSedes = document.querySelectorAll(".sede-option")


//logica carrucel
const widthIMG = document.querySelector(".img-item").clientWidth,
imgList = document.querySelector(".img-list");
imgList.scrollLeft = 900;
//logica carrucel </

document.querySelector(".welcome").addEventListener("click",(e)=>{
  document.querySelector(".hambuerget-menu").classList.toggle("hamburger-active")
})
document.addEventListener("click",(e)=>{


        //logica carrucel
        if(e.target.matches(".slide-btn-right")){
        imgList.scrollLeft += widthIMG;
        }

        if(e.target.matches(".slide-btn-left")){
            imgList.scrollLeft -= widthIMG;
        }
        //logica carrucel </

        if(e.target.matches(".sede-option")){
            console.log(e.target)
            console.log(e.target.id)
          switch (e.target.id) {
            
            
            case "muniz":
            removeIsActive();
            e.target.classList.add("is-active");
            sedeNumber.textContent = "1111111111";
            sedeCuidad.textContent = "San miguel";
            sedeDireccion.textContent = "San José 997, B1662DAT Muñiz, Provincia de Buenos Aires";
            sedeImg.src = "assets/images/home/muniz.jpg"
            sedemap.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13145.061296105168!2d-58.70191!3d-34.546837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd07cb518497%3A0xfcb9e4b25b6107cd!2sSan%20Jos%C3%A9%20997%2C%20B1662DAT%20Mu%C3%B1iz%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1728369528392!5m2!1ses!2sus";
            break;

            
            case "villaDeMayo":
            removeIsActive();
            e.target.classList.add("is-active");
            sedeNumber.textContent = "1122222222";
            sedeCuidad.textContent = "Villa de mayo";
            sedeDireccion.textContent = "Juan Domingo Perón 2308, B1614EFK Villa de Mayo, Provincia de Buenos Aires";
            sedeImg.src = "assets/images/home/villaDmayo.jpg"
            sedemap.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13151.433431744144!2d-58.684999!3d-34.506475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbcd37033ffa3%3A0x4ace838182e9fbb3!2sAv.%20Pres.%20Juan%20Domingo%20Per%C3%B3n%202308%2C%20B1614EFK%20Villa%20de%20Mayo%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1728391960541!5m2!1ses!2sus";
            break;




            case "bellaVista":
            removeIsActive();
            e.target.classList.add("is-active");
            sedeNumber.textContent = "1133333333";
            sedeCuidad.textContent = "Bella vista";
            sedeDireccion.textContent = "La direccion de bella vista";
            sedeImg.src = "assets/images/home/bellaVista.png"
            sedemap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.9507657061905!2d-58.69566456790192!3d-34.570377646050915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbdcc4e992b0d%3A0x460e263742c2d780!2sBella%20Vista%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1728391450687!5m2!1ses!2sar";
            break;

          }


        }


    })


//LOGICA SEDES
function removeIsActive(){
allSedes.forEach(el => {
    el.classList.remove("is-active")
})
}