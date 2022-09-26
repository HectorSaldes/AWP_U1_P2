console.log('SW: Hola Mundo');

// Promise all


// Ciclo (1)
self.addEventListener('install', event => {
    console.log('SW: Instalado...');

   /*  const myPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Instalaciones completadas');
            resolve('ok');
        }, 3000);
    })
    event.waitUntil(myPromise); */

})

// Ciclo (2)
self.addEventListener('activate', event=>{
    console.log('SW: Activado...!!!');
})

// Ciclo (3)
self.addEventListener('fetch', event => {
    console.log(event.request);

    if (event.request.url.includes('style.css')) {
        // Si tenemos un archivo css, lo vamos a cambiar con esta respuesta
        const respuesta = new Response(`                   
            body{
                color: red;
                background-color: black;
            }`, {
            headers: {
                'Content-Type': 'text/css'
            },

        })
        event.respondWith(respuesta)
    }

    if(event.request.url.includes('.png')){
        event.respondWith(fetch('./images/img2.png'));
    }



    /* 
    Atrapar un 404 y cambiar esa imagen.
    
           fetch(event.request.url).then(data => {
        console.log(data)
        if(data.ok){
            event.respondWith(data)
        }else{
            const generic = fetch('./images/img2.png')
            event.respondWith(generic)
        }
    }).catch(err => console.error("SW: err " + err))
    
    */

})

//https://github.com/HectorSaldes/AWP_U1_P2.git

