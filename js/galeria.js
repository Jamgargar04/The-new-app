const FOTOS = [
  { seed: 'oficina', alt: 'Oficinas de TechCorp' },
  { seed: 'equipo1', alt: 'Equipo de desarrollo trabajando' },
  { seed: 'equipo2', alt: 'Reunión de planeación' },
  { seed: 'servidores', alt: 'Sala de servidores' },
  { seed: 'evento', alt: 'Evento tecnológico' },
  { seed: 'codigo', alt: 'Sesión de programación' }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = FOTOS.map(f => `
    <img src="https://picsum.photos/seed/${f.seed}/400/300" alt="${f.alt}" loading="lazy">
  `).join('');
});
