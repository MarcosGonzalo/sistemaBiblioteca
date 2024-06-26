const main = document.getElementById("main");
const btnLogin = document.getElementById("login")
const btnInventario = document.getElementById("inventario")
const btnReporte = document.getElementById("reporte")




btnLogin.addEventListener( "click", e => {
    fetchVista("../pages/Login/login.html")
})

btnInventario.addEventListener( "click", e => {
    fetchVista("../pages/inventario/inventario.html")
})

btnReporte.addEventListener( "click", e => {
    fetchVista("../pages/reporte/reporte.html")
})

const fetchVista = ( ruta ) => {
    fetch( ruta )
    .then( response => response.text() )
    .then( data => {
        main.innerHTML = ""

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;

        const contenido = tempDiv.querySelector("#contenido")
        const script = tempDiv.querySelector("script")

        main.appendChild( contenido )


        if ( script ) eval(script.textContent);
    } )
}

