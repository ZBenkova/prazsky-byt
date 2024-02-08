const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

document.body.innerHTML = "<p>" + apartment.disposition + "</p>"
document.body.innerHTML += "<p>" + apartment.price.rent + "</p>"
document.body.innerHTML += "<p>" + apartment.area.floorage + "</p>"

const mesto = apartment.city
const mestskaCast = apartment.district

document.body.innerHTML += "<p>" + mesto + "</p>" 
document.body.innerHTML += "<p>" + mestskaCast + "</p>"

//document.body.innerHTML += apartment.status
apartment.status = "taken" //pres rovna se dam vlastnosti uplne novou hodnostu
document.body.innerHTML += apartment.status

//pres teckovou notaci muzu zmenit vlastnost 

