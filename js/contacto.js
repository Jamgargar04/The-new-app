const session = requireSession();
const mensajesRepo = new LocalStorageRepository('app_mensajes', []);

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar(session, 'contacto');
  document.getElementById('form-contacto').addEventListener('submit', handleEnviar);
});

function handleEnviar(e) {
  e.preventDefault();

  mensajesRepo.create({
    nombre: document.getElementById('c-nombre').value.trim(),
    correo: document.getElementById('c-correo').value.trim(),
    mensaje: document.getElementById('c-mensaje').value.trim(),
    fecha: new Date().toISOString()
  });

  document.getElementById('form-contacto').reset();
  const ok = document.getElementById('contacto-ok');
  ok.style.display = 'block';
  setTimeout(() => { ok.style.display = 'none'; }, 4000);
}
