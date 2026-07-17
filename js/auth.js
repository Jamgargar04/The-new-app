const USERS_KEY = 'app_users';
const SESSION_KEY = 'app_session';

function seedUsers() {
  if (!localStorage.getItem(USERS_KEY)) {
    const users = [
      { username: 'admin', password: 'admin123', role: 'admin', nombre: 'Administrador' },
      { username: 'usuario', password: 'usuario123', role: 'usuario', nombre: 'Usuario Invitado' }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}

function login(username, password) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return null;

  const session = {
    username: user.username,
    nombre: user.nombre,
    role: user.role,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

function getSession() {
  const raw = localStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = 'index.html';
}

function requireSession() {
  const session = getSession();
  if (!session) {
    window.location.href = 'index.html';
    return null;
  }
  return session;
}

function renderNavbar(session, activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const link = (href, label, key) =>
    `<a href="${href}" class="${activePage === key ? 'active' : ''}">${label}</a>`;

  nav.innerHTML = `
    <div class="nav-brand">🛠️ TechCorp</div>
    <div class="nav-links">
      ${link('dashboard.html', 'Inicio', 'dashboard')}
      ${link('nosotros.html', 'Nosotros', 'nosotros')}
      ${link('galeria.html', 'Galería', 'galeria')}
      ${link('productos.html', 'Productos', 'productos')}
      ${link('usuarios.html', 'Usuarios (API)', 'usuarios')}
      ${link('clima.html', 'Clima (API)', 'clima')}
    </div>
    <div class="nav-user">
      <span>${session.nombre} <span class="badge">${session.role}</span></span>
      <button class="btn btn-secondary" onclick="logout()">Salir</button>
    </div>
  `;
}
