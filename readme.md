E02-Users-Back
Contiene la solución requerida la solución requerida según se detalla en "Proyecto CRUD Usuarios.pdf"
Despliega los servicios a partir de la dirección http://localhost:9020 con las rutas correspondietes.

E02-Users-Front
Despliega un interfaz de CRUD hecha con React JS.

1) Para probar el proyecto en un entorno local, primero es preciso instalar la sigueinte extensión para el navegador Chrome: CORS UNBLOCK
https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/
Cross margin resource sharing CORS dice al navegador cuándo le está permitido o no acceder a recursos provenientes de dominios diferentes. Los navegadors bloquean por motivos de seguridad ciertos pedidos mediante el CORS integrado en ellos. La extensión CORS Ublock desbloquea esas restricciones.  
Seguir las instrucciones en el video de presentación en la tienda de Chrome.

2) Abrir un Terminal de línea de comandos en la carpeta E02-Users-Back:
e02-users-back> npm run dev

        > e02-users-back@1.0.0 dev
        > nodemon app.js
        [nodemon] 2.0.20
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node app.js`
        Server started at port 9020


3) Abrir otra Terminal de línea de comandos en la carpeta E02-Users-Front:
e02-users-front> npm run dev

        > e02-users-front@0.0.0 dev
        > vite
        Port 5173 is in use, trying another one...
          VITE v3.1.4  ready in 2734 ms
          ➜  Local:   http://127.0.0.1:5174/
          ➜  Network: use --host to expose

4) Abrir la interfaz Front Endo con usando Ctrl+[Click] sobre el URL Local.
