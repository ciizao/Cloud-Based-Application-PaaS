const monedaEl_one = document.getElementById('moneda-origen');
const monedaEl_two = document.getElementById('moneda-destino');
const cantidadEl_one = document.getElementById('cantidad-origen');
const cantidadEl_two = document.getElementById('cantidad-destino');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');

function calculate(){
    const moneda_origen = monedaEl_origen.value;
    const moneda_destino = monedaEl_destino.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_origen}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_destino];
       
       cambioEl.innerText = `1 ${moneda_origen} = ${taza} ${moneda_destino}`;

       cantidadEl_destino.value = (cantidadEl_origen.value * taza).toFixed(2);

    } );
}