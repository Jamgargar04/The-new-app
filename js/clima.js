const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

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
