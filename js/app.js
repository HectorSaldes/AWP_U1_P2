// Confirmar si mi navegador soporta service-worker


// identificar si estoy en local o en Github
if (navigator.serviceWorker) {
    let myLocation = new String(window.location.href)

    if (myLocation.includes('github.io')) {
        navigator.serviceWorker.register('./AWP_U1_P2/sw.js');
    } else {
        navigator.serviceWorker.register('./sw.js');
    }
} else {
    console.log('No soportamos service worker :(');
}


