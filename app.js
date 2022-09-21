const searchBtn = document.querySelector('.search-button'),
    searchInput = document.querySelector('.search-input'),
    countryInfo = document.querySelector('.country-info'),
    countryFlag = document.querySelector('.country-flag'),
    countryNameHtml = document.querySelector('.country-name'),
    countryCapital = document.querySelector('.capital'),
    countryContinent = document.querySelector('.continente'),
    countryPopulation = document.querySelector('.populacao'),
    countryCurrency= document.querySelector('.moeda'),
    countryLanguage = document.querySelector('.lingua'),
    errorMessage = document.querySelector('.error');




searchBtn.addEventListener('click', () => {
            let countryName = searchInput.value
            let finalURL = `https://restcountries.com/v3.1/name/${countryName}`;
            fetch(finalURL).then((response) => {
                if (response.status == 200){
                    response.json().then((data) => {
                    
                        //    Habilitando a Aba de Dados
 
                        countryInfo.classList.remove("disabled");
                        errorMessage.classList.add("disabled");
                
                        //    Armazenando os Dados Necesários em Variáveis 

                        let requestDatA = data[0];
                        let name = data[0].name.common;
                        let population = data[0].population;
                        let capital = data[0].capital[0];
                        let region = data[0].region;
                        let currencies = (data[0].currencies[Object.keys(data[0].currencies)].name);
                        currencies = currencies.toString().split(",").join(", ");
                        let languages = Object.values(data[0].languages);
                        let flagImage = Object.values(data[0].flags);

                    //  Fazendo as Alteraçõs na DOM

                        countryFlag.setAttribute("src", flagImage[0]);
                        countryNameHtml.innerHTML = `${name}`
                        countryCapital.innerHTML = `<strong>Capital:</strong> ${capital}</p>`;
                        countryContinent.innerHTML = `<strong>Region:</strong> ${region}</p>`;
                        countryLanguage.innerHTML = `<strong>Languages:</strong> ${languages}</p>`;
                        countryPopulation.innerHTML = `<strong>Population:</strong> ${population}</p>`
                        countryCurrency.innerHTML = `<strong>Currency:</strong> ${currencies}</p>`
                    })
            }else {
                errorMessage.classList.remove("disabled");

            }
        });
            });


    

