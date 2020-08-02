document.querySelector('#sismologia').addEventListener('click', function(){
    Sismologia();
})



function Sismologia(){
    let url = `https://api.gael.cl/general/public/sismos`;
    
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    
    api.onreadystatechange = function(){
        
        if(this.status == 200 && this.readyState == 4){
            
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = ``;
              /*  <tr>
                          <th>${item.Fecha}</th>
                          <th>${item.Latitud}</th>
                          <th>${item.Longitud}</th>
                          <th>${item.Magnitud}</th>
                          <th>${item.Profundidad}</th>
                          <th>${item.RefGeografica}</th>
                </tr>
                `;*/
            
            for(let item of datos){
                console.log(item.fecha);
                resultado.innerHTML += `
                <tr>
                          <th>${item.Fecha}</th>
                          <th>${item.Latitud}</th>
                          <th>${item.Longitud}</th>
                          <th>${item.Magnitud}</th>
                          <th>${item.Profundidad}</th>
                          <th>${item.RefGeografica}</th>
                </tr>
                `;
            }
        }
        
        
        
    }
}