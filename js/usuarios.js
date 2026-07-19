const session = requireSession();

document.addEventListener('DOMContentLoaded', async () => {
  renderNavbar(session, 'usuarios');

  const status = document.getElementById('status');
  const grid = document.getElementById('usuarios-grid');

  try {
    const usuarios = await fetchUsuariosApi();
    status.style.display = 'none';

    grid.innerHTML = usuarios.map(u => `
      <div class="card">
        <div class="icon">👤</div>
        <h3>${escapeHtml(u.name)}</h3>
        <p>📧 ${escapeHtml(u.email)}</p>
        <p>🏙️ ${escapeHtml(u.address?.city || '—')}</p>
        <p>🏢 ${escapeHtml(u.company?.name || '—')}</p>
      </div>
    `).join('');
  } catch (err) {
    status.textContent = 'No se pudo cargar la información de la API. Intenta más tarde.';
  }
});

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
