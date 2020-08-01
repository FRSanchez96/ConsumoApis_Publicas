document.querySelector('#saldoBIP').addEventListener('click', function(){
    saldoBIP();
})

function saldoBIP(){
     let url = 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=17630834';
    
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    
    api.onreadystatechange = function(){
        
        if(this.status == 200 && this.readyState == 4){
            
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = `
                <tr>
                          <th>${datos.id}</th>
                          <th>${datos.estadoContrato}</th>
                          <th>${datos.saldoTarjeta}</th>
                          <th>${datos.fechaSaldo}</th>
                </tr>
            `;
            
           /* for(let item of datos){
                console.log(item.fecha);
                resultado.innerHTML += `
                <tr>
                          <th>${item.id}</th>
                          <th>${item.estadoContrato}</th>
                          <th>${item.saldoTarjeta}</th>
                          <th>${item.fechaSaldo}</th>
                </tr>
                `;
            }*/
        }
        
    }
}