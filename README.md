GUIA DE INSTALACIÓN.

1. para organizar el ambiente dentro del proyecto
    * estar dentro del back
    * npm i
2. Configuracion entorno de orquestación Jenkins - Github
    * descarga de jenkins
        - https://www.jenkins.io/download/
    * Para integrar el servidor local de jenkins con los hooks de github es necesario instalar nrok,
        ngrok es un servicio que nos permite crear nuestro servidor local en un subdominio para acceder a el
        publicamente. se puede descargar en el siguiente link
        - https://dashboard.ngrok.com/get-started/setup/windows
    * configuración de autenticación de ngrok
        - Registrarse en ngrok
        - obtener token en el dashboard de ngrok
        - ejecutar en cmd
            ngrok config add-authtoken 3hUkNhkU8YsuP6mdButtV_83Zyz7YoLEUyyFBVjvrkQ
        - ejecutar en cmd
            ngrok http http://localhost:8080
    * en github - webhooks se agrega la url brindada por ngrok
3. Configuración de postman
    - descarga de postman
        https://www.postman.com/downloads/
    - agregar colecciones con requests
4. Configuración Selenium
    - descarga selenium ide como extension de chrome
        https://chromewebstore.google.com/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=es&utm_source=ext_sidebar
5. Configuración Artillery
    - intalación de artillery de manera global
        npm install -g artillery
    - crear archivo de configuracion con extension .yml
    - ejecución de artillery
        artillery run -o test-endpoints.json test-endpoints.yml
    - cambiar reporte a formato html
        artillery report -o test-endpoints.html test-endpoints.json
6. Configuración de ZAP
    - descarga de ZAP
        https://www.zaproxy.org/download/

