const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

const WEATHER_CODES = {
  0: { texto: 'Despejado', icono: '☀️' },
  1: { texto: 'Mayormente despejado', icono: '🌤️' },
  2: { texto: 'Parcialmente nublado', icono: '⛅' },
  3: { texto: 'Nublado', icono: '☁️' },
  45: { texto: 'Niebla', icono: '🌫️' },
  48: { texto: 'Niebla con escarcha', icono: '🌫️' },
  51: { texto: 'Llovizna ligera', icono: '🌦️' },
  53: { texto: 'Llovizna', icono: '🌦️' },
  55: { texto: 'Llovizna intensa', icono: '🌧️' },
  61: { texto: 'Lluvia ligera', icono: '🌧️' },
  63: { texto: 'Lluvia', icono: '🌧️' },
  65: { texto: 'Lluvia intensa', icono: '🌧️' },
  71: { texto: 'Nevada ligera', icono: '🌨️' },
  73: { texto: 'Nevada', icono: '🌨️' },
  75: { texto: 'Nevada intensa', icono: '❄️' },
  80: { texto: 'Chubascos ligeros', icono: '🌦️' },
  81: { texto: 'Chubascos', icono: '🌦️' },
  82: { texto: 'Chubascos violentos', icono: '⛈️' },
  95: { texto: 'Tormenta eléctrica', icono: '⛈️' }
};

function describirClima(codigo) {
  return WEATHER_CODES[codigo] || { texto: 'Desconocido', icono: '❓' };
}

async function buscarClima(ciudad) {
  const geoRes = await fetch(
    `${GEOCODING_URL}?name=${encodeURIComponent(ciudad)}&count=1&language=es&format=json`
  );
  if (!geoRes.ok) throw new Error('Error al buscar la ciudad');
  const geoData = await geoRes.json();

  if (!geoData.results || !geoData.results.length) {
    throw new Error('Ciudad no encontrada');
  }
  const { name, country, latitude, longitude } = geoData.results[0];

  const climaRes = await fetch(
    `${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  if (!climaRes.ok) throw new Error('Error al consultar el clima');
  const climaData = await climaRes.json();

  return {
    ciudad: name,
    pais: country,
    temperatura: climaData.current_weather.temperature,
    viento: climaData.current_weather.windspeed,
    codigo: climaData.current_weather.weathercode
  };
}
