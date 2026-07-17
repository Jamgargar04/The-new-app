const session = requireSession();

const productosRepo = new LocalStorageRepository('app_productos', [
  { nombre: 'Desarrollo Web', descripcion: 'Sitios y aplicaciones web a medida para tu negocio.', precio: 799, icono: '💻' },
  { nombre: 'Aplicaciones Móviles', descripcion: 'Apps nativas e híbridas para iOS y Android.', precio: 1200, icono: '📱' },
  { nombre: 'Consultoría TI', descripcion: 'Asesoría tecnológica para optimizar tus procesos.', precio: 350, icono: '🧭' },
  { nombre: 'Soporte Técnico', descripcion: 'Soporte remoto y en sitio con tiempos de respuesta ágiles.', precio: 150, icono: '🛠️' },
  { nombre: 'Seguridad Informática', descripcion: 'Auditorías y protección de infraestructura contra amenazas.', precio: 950, icono: '🔒' }
]);

let editingId = null;

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar(session, 'productos');
  document.getElementById('btn-nuevo').style.display = session.role === 'admin' ? 'inline-flex' : 'none';
  renderProductos();

  document.getElementById('form-producto').addEventListener('submit', handleSubmit);
});

function renderProductos() {
  const grid = document.getElementById('productos-grid');
  const productos = productosRepo.getAll();

  if (!productos.length) {
    grid.innerHTML = '<p class="status-msg">No hay productos registrados.</p>';
    return;
  }

  grid.innerHTML = productos.map(p => `
    <div class="card">
      <img class="card-img" src="https://picsum.photos/seed/${encodeURIComponent(p.nombre)}/300/160" alt="${escapeHtml(p.nombre)}" loading="lazy">
      <div class="icon">${p.icono || '📦'}</div>
      <h3>${escapeHtml(p.nombre)}</h3>
      <p>${escapeHtml(p.descripcion)}</p>
      <span class="precio">$${Number(p.precio).toFixed(2)}</span>
      ${session.role === 'admin' ? `
        <div class="card-actions">
          <button class="btn btn-secondary" onclick="openModal('${p.id}')">Editar</button>
          <button class="btn btn-danger" onclick="eliminarProducto('${p.id}')">Eliminar</button>
        </div>
      ` : ''}
    </div>
  `).join('');
}

function openModal(id = null) {
  editingId = id;
  const producto = id ? productosRepo.getById(id) : null;

  document.getElementById('modal-title').textContent = producto ? 'Editar producto' : 'Nuevo producto';
  document.getElementById('nombre').value = producto?.nombre || '';
  document.getElementById('descripcion').value = producto?.descripcion || '';
  document.getElementById('precio').value = producto?.precio || '';
  document.getElementById('icono').value = producto?.icono || '';

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('form-producto').reset();
  editingId = null;
}

function handleSubmit(e) {
  e.preventDefault();

  const data = {
    nombre: document.getElementById('nombre').value.trim(),
    descripcion: document.getElementById('descripcion').value.trim(),
    precio: parseFloat(document.getElementById('precio').value),
    icono: document.getElementById('icono').value.trim() || '📦'
  };

  if (editingId) {
    productosRepo.update(editingId, data);
  } else {
    productosRepo.create(data);
  }

  closeModal();
  renderProductos();
}

function eliminarProducto(id) {
  if (!confirm('¿Eliminar este producto/servicio?')) return;
  productosRepo.delete(id);
  renderProductos();
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
