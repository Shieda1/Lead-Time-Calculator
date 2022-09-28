// https://www.omnicalculator.com/everyday-life/lead-time

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const leadtimeRadio = document.getElementById('leadtimeRadio');
const preproductiontimeRadio = document.getElementById('preproductiontimeRadio');
const productiontimeRadio = document.getElementById('productiontimeRadio');
const postproductiontimeRadio = document.getElementById('postproductiontimeRadio');

let leadtime;
let preproductiontime = v1;
let productiontime = v2;
let postproductiontime = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

leadtimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Pre-production time';
  variable2.textContent = 'Production time';
  variable3.textContent = 'Post-production time';
  preproductiontime = v1;
  productiontime = v2;
  postproductiontime = v3;
  result.textContent = '';
});

preproductiontimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Lead time';
  variable2.textContent = 'Production time';
  variable3.textContent = 'Post-production time';
  leadtime = v1;
  productiontime = v2;
  postproductiontime = v3;
  result.textContent = '';
});

productiontimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Lead time';
  variable2.textContent = 'Pre-production time';
  variable3.textContent = 'Post-production time';
  leadtime = v1;
  preproductiontime = v2;
  postproductiontime = v3;
  result.textContent = '';
});

postproductiontimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Lead time';
  variable2.textContent = 'Pre-production time';
  variable3.textContent = 'Production time';
  leadtime = v1;
  preproductiontime = v2;
  productiontime = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(leadtimeRadio.checked)
    result.textContent = `Lead time = ${computeleadtime().toFixed(2)}`;

  else if(preproductiontimeRadio.checked)
    result.textContent = `Pre-production time = ${computepreproductiontime().toFixed(2)}`;

  else if(productiontimeRadio.checked)
    result.textContent = `Production time = ${computeproductiontime().toFixed(2)}`;

  else if(postproductiontimeRadio.checked)
    result.textContent = `Post-production time = ${computepostproductiontime().toFixed(2)}`;
})

// calculation

// leadtime = preproductiontime + productiontime + postproductiontime

function computeleadtime() {
  return Number(preproductiontime.value) + Number(productiontime.value) + Number(postproductiontime.value);
}

function computepreproductiontime() {
  return Number(leadtime.value) - Number(productiontime.value) - Number(postproductiontime.value);
}

function computeproductiontime() {
  return Number(leadtime.value) - Number(preproductiontime.value) - Number(postproductiontime.value);
}

function computepostproductiontime() {
  return Number(leadtime.value) - Number(preproductiontime.value) - Number(productiontime.value);
}