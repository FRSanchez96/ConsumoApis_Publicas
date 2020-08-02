document.querySelector('#btnMicroReco').addEventListener('click', function(){
    TiempoMicro();
})



function TiempoMicro(){
    
    let numPara = document.getElementsByName('codigoParadero')[0].value;
    let url = `https://api.xor.cl/ts/?paradero=${numPara}`;
    
    const xpi = new XMLHttpRequest();
    xpi.open('GET', url, true);
    xpi.send();
    
    xpi.onreadystatechange = function(){
        
        if(this.status === 200 && this.readyState === 4){
            
            let datos = JSON.parse(this.responseText);
            console.log(datos.servicios);
            
           /* let lpp = JSON.parse(this.responseText);
            console.log(lpp.servicio);*/
            
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = ``;
            
            for(let item of datos.servicios){
                console.log(item.horaConsulta);
                //console.log(xpl.valido);
                resultado.innerHTML += `
                <tr>
                          <th>${item.servicio}</th>
                          <th>${item.descripcionError}</th>
                </tr>
                `;
                }
            
            
        }
        
        
        
    }
}
