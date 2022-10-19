'use strict';


console.log('hi');

//25 rounds with 3 pics each
//1 winner per round
//display results

//global variables
/*  -score
    -# of rounds
    */
let section = document.querySelector('section');
let results = document.querySelector('ul');
let resultsBtn = document.querySelector('#resultsButton');


let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');

let howManyTimesUserVoted = 0;
let maxNumberOfVotes = 25;

let indexArray =[];

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.fileExtension = fileExtension;
  this.src = `img/${this.name}.${this.fileExtension}`;
  this.score = 0;
  this.views = 0;
}

let bag =new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep','png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

let allProducts =[bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];

console.log(allProducts);

//select random product using math.random between 0 and length of allProducts array
function selectRandomProduct() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProducts() {

  while (indexArray.length < 6){
    let ranNum = selectRandomProduct();
    if (!indexArray.includes(ranNum));{
      indexArray.push(ranNum);
    }
  }
  console.log(indexArray);
  let prod1 = indexArray.shift();
  let prod2 = indexArray.shift();
  let prod3 = indexArray.shift();











//   let prod1 = selectRandomProduct();
//   let prod2 = selectRandomProduct();
//   let prod3 = selectRandomProduct();
//   console.log(prod1, prod2, prod3);

//   while (prod1 === prod2){
//     prod2 = selectRandomProduct();
//   }
//   while (prod1 === prod3){
//     prod3 = selectRandomProduct();
//   }
//   while (prod2 === prod3){
//     prod2 = selectRandomProduct();
//     console.log(prod1, prod2, prod3);
//   }


img1.src = allProducts[prod1].src;
img1.alt = allProducts[prod1].name;
allProducts[prod1].views++;
img2.src = allProducts[prod2].src;
img2.alt = allProducts[prod2].name;
allProducts[prod2].views++;
img3.src = allProducts[prod3].src;
img3.alt = allProducts[prod3].name;
allProducts[prod3].views++;
}


function renderResults() {

for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and ${allProducts[i].score} votes.`;
    results.appendChild(li);
}
}

function handleClick(event) {
  console.log(event.target.alt);
  howManyTimesUserVoted++;
  let clickedProd = event.target.alt;

  for (let i = 0; i < allProducts.length; i++){
    if (event.target.alt === allProducts[i].name){
      console.log(allProducts[i]);
      allProducts[i].score++;
    }
  }

if ( howManyTimesUserVoted === maxNumberOfVotes){

    section.removeEventListener('click',handleClick);
    resultsBtn.addEventListener('click', renderResults);

  } else {
    renderProducts();
  }

}
const labels = prodNames;

let prodNames = [];

for (let i = 0; i < allProducts.length; i++) {
  prodNames.push(allProducts[i].name);
}

const data = {
  labels: prodNames,
  datasets: [{
    label: 'Votes',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [

      'rgba(54, 162, 235, 0.5)',
    ],
    borderColor: [

      'rgb(54, 162, 235)'
    ],
    borderWidth: 1
  },
  {
    label: 'Views',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',

    ],
    borderColor: [
      'rgb(255, 99, 132)',

    ],
    borderWidth: 1
  }
]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);







section.addEventListener('click', handleClick);





renderProducts();


