//alert("Hi");
const url =
  "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates?latitude=19.24232736426361&longitude=72.85841985686734&arrival_date=2024-08-16&departure_date=2024-08-18&adults=1&children_age=0%2C17&room_qty=1&units=metric&page_number=1&temperature_unit=c&languagecode=en-us&currency_code=EUR";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bb096add9amshe5580c026d3c7d3p18f3b4jsncd401a6d4e77",
    "x-rapidapi-host": "booking-com15.p.rapidapi.com",
  },
};

async function getHotelBooking(url, options) {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getHotelBooking(url, options);
