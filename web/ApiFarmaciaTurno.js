document.querySelector('#farmaciaTurno').addEventListener('click', function(){
    FarmaciaTurno();
})



function FarmaciaTurno(){
    
    let comuna = document.getElementsByName('comunaTxt')[0].value;
    let url = `https://farmanet.minsal.cl/index.php/ws/getLocalesTurnos`;
    
    const xni = new XMLHttpRequest();
    xni.open('GET', url, true);
    xni.send();
    
    xni.onreadystatechange = function(){
        
        if(this.status == 200 && this.readyState == 4){
            
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = ``;
            
            for(let item of datos){
                console.log(item.comuna_nombre);
                if(item.comuna_nombre === comuna.toUpperCase()){
                resultado.innerHTML += `
                <tr>
                          <th>${item.comuna_nombre}</th>
                          <th>${item.fecha}</th>
                          <th>${item.funcionamiento_dia}</th>
                          <th>${item.funcionamiento_hora_apertura}</th>
                          <th>${item.funcionamiento_hora_cierre}</th>
                          <th>${item.local_direccion}</th>
                          <th>${item.local_nombre}</th>
                          <th>${item.local_telefono}</th>
                </tr>
                `;
            }/*if(item.comuna_nombre !== comuna.toUpperCase()){
                resultado.innerHTML += `
                <tr>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                          <th>No hay Farmacias</th>
                </tr>
                `;
            }*/
        }
            
        }
        
        
        
    }
}