const searchBtn = document.querySelector('.search-button'),
    searchInput = document.querySelector('.search-input'),
    countryFlag = document.querySelector('.country-flag'),
    countryName = document.querySelector('.country-name'),
    countryCapital = document.querySelector('capital'),
    countryContinent = document.querySelector('.continente'),
    countryPopulation = document.querySelector('.populacao'),
    countryCurrency= document.querySelector('.moeda'),
    countryLanguage = document.querySelector('.lingua');




searchBtn.addEventListener('click', () => {
            let countryName = searchInput.value
            let finalURL = `https://restcountries.com/v3.1/name/${countryName}`;
            fetch(finalURL).then((response) => {
                if (response.status == 200){
                    response.json().then((data) => {
                        let requestDatA = data[0];
                        let name = data[0].name.common;
                        let population = data[0].population;
                        let capital = data[0].capital[0];
                        let region = data[0].region;
                        let currencies = (data[0].currencies[Object.keys(data[0].currencies)].name);
                        currencies = currencies.toString().split(",").join(", ");
                        let languages = Object.values(data[0].languages);
                        let flagImage = Object.values(data[0].flags);
                        countryFlag.setAttribute("src", flagImage[0]);
                    })
            }});
            });


    

