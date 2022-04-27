const container = document.querySelector('.countries');
const africa = document.querySelector('.africa');
//   .addEventListener('click', filterAfrica);

const allCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();

  loopCountries(data);
};

const loopCountries = (data) => {
  data.forEach((country) => {
    const flag = country.flags.png;
    const name = country.name.common;
    const population = country.population.toLocaleString('en-US');
    const region = country.region;
    const capital = country.capital;

    container.innerHTML += `
    <div class="countries__card">
    <img class="countries__img" src=${flag}>
    <h3 class="countries__name"> ${name} </h3>
    <p class="countries__pop"> Population: ${population} </p>
    <p class="countries__region">Region: ${region} </p>
    <p class="countries__capital">Capital: ${capital} </p>
    </div>`;

    filterCountries();
  });
};

const filterCountries = () => {};

allCountries();
