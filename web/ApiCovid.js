document.querySelector('#cargarCasos').addEventListener('click', function(){
    CasosCovid();
    CasosCovid2();
})

function CasosCovid2(){
    
     let url = `https://api.covid19api.com/summary`;
    
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    
    api.onreadystatechange = function(){
        
        if(this.status === 200 && this.readyState === 4){
            
            let datos = JSON.parse(this.responseText);
            console.log(datos.Countries);
            let resultado = document.querySelector('#resultado2');
            resultado.innerHTML = ``;
            
              for(let item of datos.Countries){
                console.log(item.fecha);
            if(item.Country === "Chile"){
                resultado.innerHTML += `
                <tr>
                          <th>${item.NewConfirmed}</th>
                          <th>${item.TotalConfirmed}</th>
                          <th>${item.NewDeaths}</th>
                          <th>${item.TotalDeaths}</th>
                          <th>${item.NewRecovered}</th>
                          <th>${item.TotalRecovered}</th>
                </tr>
                `;
            }
              }
        }
        
    }
}

function CasosCovid(){
    
     let url = `https://api.covid19api.com/summary`;
    
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    
    api.onreadystatechange = function(){
        
        if(this.status === 200 && this.readyState === 4){
            
            let datoss = JSON.parse(this.responseText);
            console.log(datoss.Global);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = `
                          <th>${datoss.Global.NewConfirmed}</th>
                          <th>${datoss.Global.TotalConfirmed}</th>
                          <th>${datoss.Global.NewDeaths}</th>
                          <th>${datoss.Global.TotalDeaths}</th>
                          <th>${datoss.Global.NewRecovered}</th>
                          <th>${datoss.Global.TotalRecovered}</th>
            `;
        }
        
    }
}