
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_ayam',
    urlsToCache = [
    '/',
    '/about.html',
    '/about-me.html',
    '/categorias/memes.html',
    '/categorias/mujeres.html',
    '/categorias/articulos.html',
    '/categorias/memes.html',
    '/offline.html',
    '/categorias/articulos/cosmos/astronomos-descubren-senales-frb.html',
    '/categorias/noticias/COVID-19/sintomas-del-coronavirus-y-como-identificarlo.html',
    '/categorias/memes/steve/steve-de-minecraft-ha-sido-diagnosticado-con-coronavirus.html',
    '/categorias/articulos/mujeres/porque-la-ansiedad-y-la-depresion-afecta-mas-a-las-mujeres.html',
    '/offline.html',
    '//fonts.googleapis.com/css?family=Josefin+Sans:300, 400,700|Inconsolata:400,700',
    '/images/icons/ayam-favicon.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
                .then(() => self.skipWaiting())
        })
        .catch(err => console.log('Falló registro de cache', err))
    )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    //Eliminamos lo que ya no se necesita en cache
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                })
            )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                //recuperar del cache
                return res
            }
            //recuperar de la petición a la url
            return fetch(e.request)
        })
    )
})
