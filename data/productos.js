export const sabores = [
    ["Chocolates", ["Chocolate","Chocolate Amargo","Chocolate Balcarce","Chocolate Blanco","Chocolate c/ brownie","Chocolate c/ almendras","Chocolate Nevado","Chocolate Rabelia","Chocolate sureño"]],
    ["Traidicionales", ["Banana Splipt","Crema americana","Crema de Almendras","Crema del cielo","Crema Rusa","Granizado","Pistacho","Sambayon","Tiramisu","Tramontana","Vainilla","Mousse de Chocolate","Mousse de Limon"]],
    ["Dulce De Leche", ["Dulce de leche","Dulce de leche c/brownie","Dulce de leche c/ bombones","Dulce de leche nuez","Dulce de leche granizado","Dulce de leche tentacion"]],
    ["Bombas", ["Alfajor Rabelia","Bananita Dolca","banatella","Cadbury","Chessecake","Chocotorta","Kinder","Marroc","Menta Oreo","Tentacion Oreo","Volcan de Oreo"]],
    ["Frutales", ["Anana","Anana al champagne","Banana","Cereza","Durazno","Espumon Rabelia","Frambuesa","Frutilla","Frutilla a la crema","Frutilla a la reina","Frutilla con Gancia","Limon","Limon Rabelia","Maracuya","Naranja Frutada","Pomelo Rosado"]]
]

export const destacado = [
    {
        id: 1,
        title: "1kg de Helado",
        descripcion: "Hasta 4 sabores",
        img: "assets/images/pedido/productos/heladeria/helado.png",
        price: 4500,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: ["show-sabores","4sabores"]
    },
    {
        id: 2,
        title: "Alfajor",
        descripcion: "De chocolate con relleno interior",
        img: "assets/images/pedido/productos/reposteria/alfajor.png",
        price: 2700,
        offer: null,
        isFav: "Favorito",
        envio: true,
        hasOptions: true,
        withOptions: [
        { name: "Alfajor de Frutos XL", price: 4600},
        { name: "Alfajor XL de Chocolate", price: 4100},
        { name: "Alfajor XL Almendras", price: 4900},
        { name: "Alfajor XL de nuez", price: 4900},
        { name: "Alfajor de coco", price: 3400},
        { name: "Alfacookie XL", price: 5200},
        { name: "Alfajor XL de maicena", price: 3500}
    ]
    },
    
    {
        id: 3,
        title: "Foccachias",
        descripcion: "Mortadela + mooza + pesto de albahaca + tomamtes cherrys confitados",
        img: "assets/images/pedido/not-products/foccachias.png",
        price: 9000,
        offer: 11500,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
        { name: "Mortadela", price: 9000},
        { name: "Jamon crudo", price: 11000},
        { name: "Jamon", price: 9000}
    ]
    },

    {
        id: 4,
        title: "Muffin",
        descripcion: "Con chips y alternativas",
        img: "assets/images/pedido/productos/muffin.png",
        price: 2900,
        offer: 3200,
        isFav: "Favorito",
        envio: true,
        hasOptions: true,
        withOptions:[
        { name: "Muffin de vainilla", price: 2900},
        { name: "Muffin de vainilla y chips", price: 3000},
        { name: "Muffin de chocolate", price: 9100},
        { name: "Muffin de frambuesa", price: 3300}
    ]
    },

    {
        id: 5,
        title: "Tostones",
        descripcion: "con huevos revueltos + queso crema + cherrys confitados + palta",
        img: "assets/images/pedido/productos/tostones.png",
        price: 3400,
        offer: 4100,
        isFav: "",
        envio: false,
        hasOptions: false,
        withOptions: {
        }
    }
]

export const combos = [
    {
        id: 107,
        title: "Combo Helado",
        descripcion: "Helado para rato!",
        img: "https://imgs.search.brave.com/XfcO7dN0QiAQrY5RtsxJtjICCJRt-kNHKgGFWwQXuUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb2JhZS5jb20v/cmVzaXplci92Mi83/S0FEUFgyTFZCRVRU/RDJFSFU3UUtSTE9I/RS5qcGc_YXV0aD1h/NjcxMGIyZWMyNDM3/MWE5MGQxNjNmMDcz/MDMxNmY3Zjg0ZGUy/MGM1MGJmYjY5Mjg5/MjMxMjNjZjFjMzFi/MzMzJnNtYXJ0PXRy/dWUmd2lkdGg9MzUw/JmhlaWdodD0xOTcm/cXVhbGl0eT04NQ  ",
        envio: true,
        price: 26000,
        offer: 32000,
        has: [
            {cant: 3, name: "Kilos de helado"},
            {cant: 10, name: "Vasitos"}
        ]
    },
    {
        id: 101,
        title: "Combo salado",
        descripcion: "Ideal para compartir",
        img: "assets/images/pedido/productos/ComboSalado.png",
        envio: false,
        price: 24000,
        offer: 25100,
        has: [
            {cant: 2, name: "Infusiones"},
            {cant: 2, name: "Exprimidos"},
            {cant: 2, name: "Tostones con huevos revueltos + Queso Crema + Cherrys confitados + Palta"},
            {cant: 2, name: "Trifles"},
            {cant: 2, name: "Medialunas dee Jamon y Queso"}
        ]
    }
    ,
    {
        id: 102,
        title: "Combo Fit",
        descripcion: "Super natural",
        img: "assets/images/pedido/productos/ComboFit.png",
        envio: false,
        price: 24500,
        offer: "",
        has: [
            {cant: 2, name: "Infusiones"},
            {cant: 2, name: "Limonadas"},
            {cant: 1, name: "Panqueque XL"},
            {cant: 1, name: "Tostadas Integrales"},
            {cant: 1, name: "Bold de Frutas"}
        ]
    },
    {
        id: 103,
        title: "Combo Dulce",
        descripcion: "Ideal para 1 personas",
        img: "assets/images/pedido/productos/ComboDulce.png",
        envio: false,
        price: 24000,
        offer: "",
        has: [
            {cant: 2, name: "Infusiones"},
            {cant: 2, name: "Exprimidos"},
            {cant: 1, name: "alfaCookie XL"},
            {cant: 1, name: "Budin a eleccion"},
            {cant: 1, name: "Brownie XL"}
        ]
    },
    {
        id: 104,
        title: "Combo Mix",
        descripcion: "Mix Dulce/Salado",
        img: "assets/images/pedido/productos/ComboMix.png",
        envio: false,
        price: 24500,
        offer: 24900,
        has: [
            {cant: 2, name: "Infusiones"},
            {cant: 2, name: "Exprimidos"},
            {cant: 1, name: "Croissant con Nutella y Frutillas"},
            {cant: 1, name: "Sadwhich de Foccacchia"},
            {cant: 2, name: "Chipas de Jamon y Queso"},
            {cant: 1, name: "Alfajor de Coco"},
            {cant: 1, name: "Alfajor de Chocolate"}
        ]
    },
    {
        id: 105,
        title: "Combo Rabelia",
        descripcion: "para reventar!",
        img: "assets/images/pedido/productos/ComboRabelia.png",
        envio: false,
        price: 30000,
        offer: 31200,
        has: [
            {cant: 2, name: "Infusiones"},
            {cant: 2, name: "Exprimidos"},
            {cant: 1, name: "Torta a Eleccion"},
            {cant: 1, name: "Sanwhich de Jamon"},
            {cant: 1, name: "Medialuna de Jamon y queso"},
            {cant: 1, name: "Sadwchich de Chipa"},
            {cant: 1, name: "Medialuna de Dulce de leche"},
            {cant: 1, name: "Budin o muffin a Eleccion"},
            {cant: 1, name: "Mini alfajor de Chocolate"},
            {cant: 1, name: "Conito de Dulce de leche"} 
        ]
    },
]





export const productos = {
heladeria: {
    
     headerImg: 
       ["https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0054.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0063.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0058.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0062.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0060.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0061.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0055.jpg"
    ],
    prod:[{
        id: 201,
        title: "1kg de Helado",
        descripcion: "Hasta 4 sabores",
        img: "assets/images/pedido/productos/heladeria/helado.png",
        price: 9200,
        offer: 11000    ,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: ["show-sabores","4sabores"]
    },
    {
        id: 202,
        title: "1/2kg de Helado",
        descripcion: "Hasta 3 sabores",
        img: "assets/images/pedido/productos/heladeria/helado.png",
        price: 6600,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: ["show-sabores","3sabores"]
    },
    {
        id: 203,
        title: "1/4kg de Helado",
        descripcion: "Hasta 3 sabores",
        img: "assets/images/pedido/productos/heladeria/cuarto.png",
        price: 3500,
        offer: null,
        isFav: true,
        envio: true,
        hasOptions: true,
        withOptions: ["show-sabores","3sabores"]
    },
    {
        id: 206,
        title: "Cucurucho con bombones",
        descripcion: "",
        img: "assets/images/home/helado.png",
        price: 2600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: []
    },
    {
        id: 204,
        title: "Cucurucho",
        descripcion: "3 unidades",
        img: "assets/images/pedido/productos/heladeria/cucurucho.png",
        price: 1250,
        offer: 1400,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: []
    },
    {
        id: 205,
        title: "Vasitos",
        descripcion: "10 unidades",
        img: "assets/images/pedido/productos/heladeria/vasitos.png",
        price: 1200,
        offer: 1400,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: []
    }
]

},
 pasteleria: {
    headerImg: [
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0052.jpg",
        "https://imgs.search.brave.com/HuoUdL7RMaREjzh178h2upsO5E-qNizsvUAXiYWS190/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29jaW5hY29udmFs/ZW50aW5vLmNvbS5h/ci9tb2R1bGVzL2hv/bWVjb25maWd1cmF0/b3IvaW1nL2RlZWY2/Mjc1ODI1MDRkZWU2/ZWFkOGJlZjc5NzNj/MzAxZjJhNmE3MmZf/Y2hvY29sYXRlLWZl/bml4LTQwMC1ob21l/LmpwZw",
        "https://imgs.search.brave.com/XVHSXYih799ijMyjvH4PnWwJ0tTLI95OymE4bNdZxN0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb2Np/bmFhYnVlbmFzaG9y/YXMuY29tL2ZpbGVz/L2Nob2NvdG9ydGEt/dGFydGEtZGUtZ2Fs/bGV0YXMteS1kdWxj/ZS1kZS1sZWNoZS5q/cGc",
        "https://imgs.search.brave.com/uR0AEs7fPDUDGkp70zF3_IiYFuo312BGpRB8W_Va2mo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3Lzk3LzIx/LzM2MF9GXzEwNzk3/MjE1MV9ESmZSam0x/c2J3bVozTXI0c0k2/c2s4Rmx2Q1p2d1NV/ei5qcGc",
        "https://imgs.search.brave.com/LlN3lQHms2ZcRvlmDcZBez0J6vwmU0bZwfDJ9PJvDbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGVxdWVyZWNldGFz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMC9jb21v/LWhhY2VyLWN1cGNh/a2VzLWRlLWNob2Nv/bGF0ZS1jb24tZnJv/c3RpbmcuanBn",
        "https://imgs.search.brave.com/OnyffWZAxK-a587buyYDHqr4efPbwZ1spuvMKq3vYeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdWst/aXQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA4L2J1/ZGluLXZhaW5pbGxh/LWNoaXBzLWlnMDIu/d2VicA",
        "https://imgs.search.brave.com/fec-l4KQsdn8wNjNI8lisWKmuo1Jr3QF0BV7ZQ2R-1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzllLzgz/LzYwLzllODM2MGJh/MDAzOWNjYzcwZTMy/ZmJlOThhZTJmMWI3/LmpwZw"
    ],
    prod:[
        {
        id: 301,
        title: "Budines",
        descripcion: "Con frutos secos",
        img: null,
        price: 3000,    
        offer: null,
        isFav: true,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Budin marmolado", price: 3000},
            { name: "Budin de limon y arandanos", price: 3000},
            { name: "Budin de banana", price: 3000},
            { name: "Budin de zanahorias", price: 3000},
        ]
        },
        {
        id: 302,
        title: "Muffin",
        descripcion: "De vainilla",
        img: null,
        price: 2900,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Muffin de Vainilla y chips", price: 2900},
            { name: "Muffin de Chocolate", price: 2900},
            { name: "Muffin de Frambuesa", price: 2900},
        ]
        },
        {
        id: 303,
        title: "Chocotorta",
        descripcion: "con dulce de leche repostero",
        img: null,
        price: 6000,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [
       
        ]
        },
        {
        id: 304,
        title: "Cheescake",
        descripcion: "Frutos rojos, maracuya, dulce de leche",
        img: null,
        price: 6000,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [

        ]
        },
         {
        id: 305,
        title: "Fraunui",
        descripcion: "Base brownie,relleno dulce de leche, corazon de frutos rojos, bañado con chocolate blanco y negro",
        img: null,
        price: 6400,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 306,
        title: "Matilda",
        descripcion: "Chocolate intenso e esponjosa",
        img: null,
        price: 6000,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [

        ]
        },
        {
        id: 307,
        title: "Cadbury",
        descripcion: "",
        img: null,
        price: 6400,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [

        ]
        },
        {
        id: 308,
        title: "Carrot cake",
        descripcion: "",
        img: null,
        price: 6400,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [

        ]
        },
        {
        id: 309,
        title: "Marquise",
        descripcion: "",
        img: null,
        price: 6200,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [

        ]
        },
        {
        id: 310,
        title: "Maxbrownie",
        descripcion: "Cuadrado de brownie con ganashe de chocolate, nueces y almendras caramelizadas",
        img: null,
        price: 6200,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 311,
        title: "Brownie Rabelia",
        descripcion: "Base brownie con dulce de leche y chocolate de cobertura",
        img: null,
        price: 6100,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 312,
        title: "Brownie del bosque",
        descripcion: "Base brownie acompañado de helado y una salsa de frutos rojos",
        img: null,
        price: 6800,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 313,
        title: "Brownie de oreo",
        descripcion: "",
        img: null,
        price: 5900,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 314,
        title: "Cheesecake de pistacho",
        descripcion: "",
        img: null,
        price: 6600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 315,
        title: "Torta del dia",
        descripcion: "Desde chocolate a postres de vainilla",
        img: null,
        price: 6500,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
    ]

 },
 salados:{

    headerImg: [
        "https://imgs.search.brave.com/sknPIaERUTM9IO0Ai8QtoL4v18lgLYBL9XixtxrxfKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODQ3/NDU4ODEyL3Bob3Rv/L2F2b2NhZG8tdG9h/c3QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWFUenZwX1lR/UXJiSU16bW1IMGdi/UkJvWllEd3duX2JJ/TER4WnFFdUVFNUE9",
        "https://imgs.search.brave.com/5itPIxg-jCVhnPu2-uxVMA8bDOqcS3-i1_FSuq77GJ8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQxL2Qw/L2FlLzQxZDBhZTJh/MjYwMmIzZmY4MjVh/OTQzMDkwYzQ4ZTNh/LmpwZw",
        "assets/images/pedido/productos/salado/slide11.jpg",
        "assets/images/pedido/productos/salado/slide15.jpg",
        "assets/images/pedido/productos/salado/slide19.jpg",
       
    ],
    prod:[
        {
        id: 401,
        title: "Al plato",
        descripcion: "variedad: Tostados, huevos revueltos, jamon y queso, palta, bacon",
        img: "https://imgs.search.brave.com/_AQtZGbZrHHA0cIRyT5UGah8AjcvbJD1XCH4YdDTMCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/LmJvbnZpdmV1ci5j/b20vdmlzdGEtZGVs/LWNvcnRlLWRlbC1z/YW5kd2ljaC1kZS1h/Z3VhY2F0ZS15LWh1/ZXZvXzQwMC5qcGc",
        price: 3000,    
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: true,
        withOptions: [
            { name: "-3 Huevos Revuelos + -3 Tostadas", price: 4500},
            { name: "-3 Huevos Revueltos + Palta + Queso Crema + -2 Tostadas", price: 5500},
            { name: "-3 Huevos Revueltos + Palta + Jamon + Queso+ -2 Tostadas", price: 6000},
            { name: "-3 Huevos Revueltos + Palta + Bacon + -2 Tostadas", price: 6500}
        ]
        },
        {
        id: 402,
        title: "Avocado Toast",
        descripcion: "Con palta, huevo, aceite de oliva",
        img: "https://imgs.search.brave.com/k1-eFw-3i1tyPNprvXUO9P0IkNe35duSQzFVGoCC85A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzLzE5Yjgy/OC8xLzQ1MF8xMDAw/LmpwZw",
        price: 6000,
        offer: null,
        isFav: true,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
         {
        id: 408,
        title: "Foccachias",
        descripcion: "variedad: jamon y queso / mortadela / jamon crudo, tomates cherris confitados y rucula",
        img: "assets/images/home/sandwich.png",
        price: 9000,
        offer: null,
        isFav: true,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Mortadela + mooza + pesto de albahaca + tomates cherry confitados", price: 9000},
            { name: "Jamon crudo + queso + pesto de albahaca + tomate cherry confitados y rucula", price: 11000},
            { name: "Jamon + queso + Salsa alioli + tomates cherry confitados", price: 9000}
        ]
        },
        {
        id: 403,
        title: "Sandwichs/Tostados - Pan de molde(blanco o integral)",
        descripcion: "variedad: jamon y queso, tomates cherris confitados y rucula",
        img: null,
        price: 4400,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Pan de molde - jamon y queso", price: 4400},
            { name: "Pan de molde - jamon y queso, tomate cherry confitados y rucula", price: 5000}
        ]
        },
        {
        id: 404,
        title: "Sandwichs/Tostados - Masa madre",
        descripcion: "variedad: jamon y queso, tomates cherris confitados y rucula",
        img: null,
        price: 5400,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Pan de molde - jamon y queso", price: 5400},
            { name: "Pan de molde - jamon y queso, tomate cherry confitados y rucula", price: 6000}

        ]
        },
        {
        id: 405,
        title: "Sandwichs/Tostados - Pan baguette",
        descripcion: "variedad: jamon y queso, tomates cherris confitados y rucula",
        img: null,
        price: 4600,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Pan de molde - jamon y queso", price: 4600},
            { name: "Pan de molde - jamon y queso, tomate cherry confitados y rucula", price: 5200}

        ]
        },
        {
        id: 406,
        title: "Sandwichs/Tostados - Chipa",
        descripcion: "variedad: jamon y queso, tomates cherris confitados y rucula",
        img: null,
        price: 4000,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Pan de molde - jamon y queso", price: 4000},
            { name: "Pan de molde - jamon y queso, tomate cherry confitados y rucula", price: 5600}

        ]
        },
        {
        id: 407,
        title: "Sandwichs/Tostados - Scon de queso",
        descripcion: "variedad: jamon y queso, tomates cherris confitados y rucula",
        img: null,
        price: 4600,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Pan de molde - jamon y queso", price: 4600},
            { name: "Pan de molde - jamon y queso, tomate cherry confitados y rucula", price: 5200}
        ]
        },

        ]

 },
 panaderia: {  
    headerImg: [
        "https://imgs.search.brave.com/CaJniI2LyfX72RUx61yB8G6G4WG3pHKh6Bw49PLxrkw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFuYWRlcmlhY2xh/c2ljYS5jb20uYXIv/cHVibGljL2ltZy9j/YXRlZ29yaWFzLzQv/ZGVzYXl1bm8tby1t/ZXJpZW5kYS1jbGFz/aWNhLXBhbmFkZXJp/YS1iYWhpYS1ibGFu/Y2EtZGVza3RvcC5q/cGc",
        "https://imgs.search.brave.com/2A9ABFNfjSIHNa03Jd_Q7RIYd4i26Pv2e7tEw5i9wCE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbHNv/bGRlbWFydGluZXou/Y29tLmFyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE4LzEwL3By/b2RkdWxjZS5qcGc",
        "https://imgs.search.brave.com/rdi-xjgJToZBR9BDNYZowHoEOkY52_DkR7Z4hz0liHE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucmFwcGkuY29t/LmFyL3Jlc3RhdXJh/bnRzX2JhY2tncm91/bmQvYTJkNWIxOTgt/NzRkOC00MDAwLThh/NDItYzU2MDhmODU4/NDJlLTE2MjkwNzI4/NzY4NTQucG5nP2U9/d2VicCZxPTQwJmQ9/MzAweDMwMA",
        "https://imgs.search.brave.com/Y8cDLi5Dt3Ks0Hpllx-jVJqXpgKwnuNgyX2-8O7j31E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/NjI5ODAxL3Bob3Rv/L2Nob2NvbGF0ZS1j/aGlwLWNvb2tpZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWE2MDgzSTk2dkd3/OGZaYVNFVTU2VnlU/bXhFSHByWGJOMmNt/Y0JjVjVxVHc9",
        "assets/images/pedido/productos/panaderia/alfajor.png"
    ],
    prod:
    [
        {
        id: 501,
        title: "Croissant",
        descripcion: "Simple",
        img: "https://imgs.search.brave.com/hA_Gi3H2WgBFUDQd6i_g7boWiD4Apqgffc_pV9HlPt4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMyL0Nyb2lzc2Fu/dC5qcGc",
        price: 2600,    
        offer: null,
        isFav: true,
        envio: false,
        hasOptions: true,
        withOptions: [ 
            { name: "Croissant con jamon y queso", price: 3700},
            { name: "Croissant de nutella y frutilla", price: 6500},
            { name: "Croissant relleno de dulce de leche", price: 4500}
    ]
        },
        {
        id: 502,
        title: "Media lunas",
        descripcion: "de manteca",
        img: "assets/images/pedido/not-products/panaderia.png",
        price: 1000,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: true,
        withOptions: [
            { name: "Medialuna de jamon y queso", price: 4000},
            { name: "Medialuna rellena de dulce de leche", price: 3800}
        ]
        },
        {
        id: 503,
        title: "Scon de queso",
        descripcion: "",
        img: null,
        price: 1000,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions:false,
        withOptions: [
        ]
        },
        {
        id: 504,
        title: "Alfajores",
        descripcion: "variedad: frutos rojos, Chocolate, Almendras, Nuez, Coco, Alfacookie, Maicena",
        img: "assets/images/pedido/productos/panaderia/alfajor.png",
        price: 4600,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Alfajor de frutos rojos XL", price: 4600},
            { name: "Alfajor XL de Chocolate", price: 4100},
            { name: "Alfajor XL de Almendras", price: 4900},
            { name: "Alfajor XL de Nuez", price: 4900},
            { name: "Alfajor de Coco", price: 3400},
            { name: "Alfajor XL de Maicena", price: 3500},
            { name: "Alfacookie XL", price: 5200}
        ]
        },
         {
        id: 505,
        title: "Cookies",
        descripcion: "variedad: Chocolate, Vainilla, trozos de chocolate semi amargo y negro, cookie red valvet",
        img: "https://imgs.search.brave.com/1H0X46vOY4y4_D5ckeYFHF40FGsxu3H83_GvhuMrFOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MjkwNjM4L3Bob3Rv/L2Nsb3NlLXVwLW9m/LWEtY2hvY29sYXRl/LWNoaXAtY29va2ll/LXdpdGgtYS1iaXRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kUWx6NGhnZ0Zk/UTNuZVpobDAwYTAx/RkxrR1kzTjZBN0NH/dDcxTVhEUUEwPQ",
        price: 2400,
        offer: null,
        isFav: false,
        envio: true,
        hasOptions: true,
        withOptions: [
            { name: "Cookie de Chocolate", price: 2400},
            { name: "Cookie de Vainilla con trozos de chocolate amargo", price: 3400},
            { name: "Cookie de Vainilla con trozos de chocolate blanco", price: 3400},
            { name: "Cookie red velvet", price: 3600},
        ]
        },
    ],



 },
 saludables: {
    headerImg: [
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0042.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0037.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0040.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0038.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0039.jpg"
    ],
    prod:[
        {
        id: 601,
        title: "Bowls de Frutas",
        descripcion: "yogurt al natural, frutas de estacion, granola y salsa de frutos rojos",
        img: "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0039.jpg",
        price: 8400,    
        offer: 8900,
        isFav: true,
        envio: false,
        hasOptions: false        ,
        withOptions: []
        },
        {
        id: 602,
        title: "Tostadas",
        descripcion: "Con queso y mermelada",
        img: null,
        price: 4500,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: []
        },
        
        
    ]

 },
 cafes:{
    headerImg: [
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0044.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0050.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0046.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0048.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0049.jpg",
        "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0045.jpg"
    ],
    prod:[
        {
        id: 701,
        title: "Cafes",
        descripcion: "opciones: Expreso/Capuchino/Latte Simple/Late Doble/Chocolate/Mocachino/...",
        img: "assets/images/home/cafe.png",
        price: 1700,    
        offer: 2100,
        isFav: true,
        envio: false,
        hasOptions: true,
        withOptions: [
            { name: "60mil - Espresso", price: 1700},
            { name: "60mil - Doble(Doppio)", price: 2800},
            { name: "60mil - Lungo", price: 1700},
            { name: "250mil - Americano", price: 1700},
            { name: "250mil - Flat White", price: 3000},
            { name: "250mil - Capuchino", price: 3000},
            { name: "300mil - Latte simple(cafe con leche)", price: 2600},
            { name: "300mil - Latte doble(cafe con leche)", price: 3000},
            { name: "300mil - Latte XL (saborizados)", price: 3800},
            { name: "60mil - Cortado en jarrito", price: 3000},
            { name: "300mil- Chocolate", price: 3000},
            { name: "300mil- Mocachino", price: 4000},
            { name: "300mil- Te verde/Negro", price: 2500},
            { name: "300mil- Nutellate", price: 4200},
        ]
        },
        {
        id: 702,
        title: "Cafes Frios",
        descripcion: "opciones: Iced Latte/Iced Coffe/Ice Mocca/Ice Caramel/IceAffogato/Nutelle/...",
        img: "https://rabelia.com.ar/wp-content/uploads/2023/11/IMG-20231130-WA0049.jpg",
        price: 4500,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: true,
        withOptions: [
            { name: "Iced latte", price: 1700},
            { name: "Iced Coffe", price: 2800},
            { name: "Iced Flat White", price: 1700},
            { name: "Iced Mocca", price: 1700},
            { name: "Iced Caramel", price: 3000},
            { name: "Affogato", price: 3000},
            { name: "Nutelle", price: 3000},
        ]
        },
        {
        id: 703,
        title: "MILSHAKE",
        descripcion: "Batido de leche con helado a eleccion y crema",
        img: "https://imgs.search.brave.com/d71H5lzsNidkB15yOqJojN7nrOtq0bov8edPXWxOdmo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzExLzMxLzQ0/LzM2MF9GXzIxMTMx/NDQwM19SVUlhYWxX/eDZ2aG9LSkdiVFBJ/dWV5T3ZzMDRGVjZr/bS5qcGc",
        price: 4600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 704,
        title: "Exprimido de naranja",
        descripcion: "",
        img: "https://imgs.search.brave.com/v3_P7eKw8PnnS37qs6VztIqi5P-bjDgfN3aV1e2iKHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGRp/YXJpb2NhbnRhYnJp/YS5wdWJsaWNvLmVz/L2Fzc2V0L3RodW1i/bmFpbCwxMjgwLDcy/MCxjZW50ZXIsY2Vu/dGVyL21lZGlhL2Vs/ZGlhcmlvY2FudGFi/cmlhL2ltYWdlcy8y/MDIzLzEwLzE2LzIw/MjMxMDE2MTM0NTQw/Nzg2MDguanBn",
        price: 3600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 705,
        title: "Limonada",
        descripcion: "Menta y jenjibre",
        img: "https://imgs.search.brave.com/JU-JId5l6HWNkkInOd2F9Cy_mvSufAf6g_b0OmuiaoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmFzb3MtbGltb25h/ZGEtbWVudGFfMjMt/MjE0ODM3MTI2My5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
        price: 3600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        { 
        id: 706,
        title: "Limonada Rabelia",
        descripcion: "Helado de limon + menta + jenjibre",
        img: null,
        price: 3600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 707,
        title: "Licuados",
        descripcion: "opciones: Frutilla,Banana,Maracuya/durazno,Frutilla + naranja/mango + maracuya...",
        img: "https://imgs.search.brave.com/VMKTrPI4PZzxHwNk5Vhxx-eTj6JGdfaGJTXaya1st6I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRs/aW5lcGx1cy5nb3Yv/aW1hZ2VzL3JlY2lw/ZV9ibHVlYmVycnl0/b2Z1c21vb3RoaWUu/anBn",
        price: 4500,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: true,
        withOptions: [
        ]
        },
        {
        id: 708,
        title: "Agua/Gaseosas",
        descripcion: "opciones: Iced Latte/Iced Coffe/Ice Mocca/Ice Caramel/IceAffogato/Nutelle/...",
        img: null,
        price: 1700,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: true,
        withOptions: [
            { name: "agua", price: 1700},
            { name: "Gaseosas", price: 1900},
            { name: "Saborizadas(manzana, naranja, pomelo)", price: 1600}
        ]
        },
    
    ]

 },
 desayunoRapido: {
    headerImg: [
            "https://imgs.search.brave.com/Rgyc8Hf-_3V728m7iIVQ2NBnYww8VDlygMVbtQuM_O8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sYW1h/bnNpb25kZWxhc2lk/ZWFzLmVzLzIwMjMv/MDEvZGVzYXl1bm8t/aW1wZW5zYWJsZS1j/YWZldGVyaWEuanBn",
            "https://imgs.search.brave.com/lThFKV9ck9yVDulWIqahhREOi4lpvbcrh99abXufLhA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWloYWJpdGFjaW9u/ZmF2b3JpdGEuY29t/L3dwLWNvbnRlbnQv/dGhlbWVzL3lvb3Ro/ZW1lL2NhY2hlL2Ji/L0Rlc2F5dW5vLVph/cmFnb3phLUh1bW11/cy1NaUhBQklUQUNJ/T05mYXZvcml0YS0x/MC1iYjFjYTYyYi5q/cGVn",
            "https://imgs.search.brave.com/1HcDySXcRSZqrX_ZRsrOD3l9y5WnZBn5RgZ2fjbxxvQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZW5lcy5lbHBhaXMu/Y29tL3Jlc2l6ZXIv/djIvSFFHRFBNWFcz/SE1FTE1BN0tYWFJL/NDVXSEEuanBnP2F1/dGg9Y2JiOWRlZTYx/MDhjY2JjN2Q5MzM4/NTc3MjljOTZlNjFk/ZTFkNmU4YTRjZjJj/NWZlNjQ2YmYzOWE3/ZWU2MzIxMiZ3aWR0/aD00MTQ",
            "https://imgs.search.brave.com/mFDYcfDfHKb-PFkldnjFFcFTYZCQC_m1UsW41S6To5k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWNr/ZXQuc29tb3NvaGxh/bGEuY29tLmFyL3Mz/ZnMtcHVibGljL3N0/eWxlcy9pbnRlcm5h/bF85OTAvcHVibGlj/LzIwMjMtMTIvdGVh/bV9jYWZlXzAxLmpw/Zy53ZWJwP2l0b2s9/YkFRTVhSckU",
            "https://imgs.search.brave.com/XBFzjdE32a2dtL4ZRoaIRCsaEk7N6fuK8ms6wniuhWs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idWNr/ZXQuc29tb3NvaGxh/bGEuY29tLmFyL3Mz/ZnMtcHVibGljL3N0/eWxlcy9pbnRlcm5h/bF85OTAvcHVibGlj/LzIwMjQtMDkvY2ly/b18tX2NhZmVfZGVf/ZXNwZWNpYWxpZGFk/LmpwZy53ZWJwP2l0/b2s9cmFGMHlINGo"
   ],
   prod: [
    {
        id: 801,
        title: "Opcion 1",
        descripcion: "infusion + 2 Medialunas + Exprimido Chico",
        img: null,
        price: 4600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 802,
        title: "Opcion 2",
        descripcion: "infusion + Media luno con jamon y queso + Trifle(your al natural, granola,frutas,salsas de frutos rojos) + -Exprimido chico ",
        img: null,
        price: 8200,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 803,
        title: "Opcion 3",
        descripcion: "infusion + Tostadas con queso y mermelada + Exprimido chico ",
        img: null,
        price: 7100,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 804,
        title: "Opcion 4",
        descripcion: "infusion + Torta a eleccion",
        img: null,
        price: 8300,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 805,
        title: "Opcion 5",
        descripcion: "infusion + tostado(pan molde) + Exprimido chico ",
        img: null,
        price: 7300,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
        },
        {
        id: 806,
        title: "Opcion 6",
        descripcion: "infusion + Huevos revueltos con tostadas naturales + Trifle (yogurt al natural, granola, frutas, salsa de frutos) ",
        img: null,
        price: 4600,
        offer: null,
        isFav: false,
        envio: false,
        hasOptions: false,
        withOptions: [
        ]
       }
   ]
 }
}