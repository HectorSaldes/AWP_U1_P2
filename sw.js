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

})

//https://github.com/HectorSaldes/AWP_U1_P2.git

