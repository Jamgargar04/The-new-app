# The New App

Aplicación web sencilla (HTML/CSS/JS puro) con login basado en roles, sesión en
`localStorage`, un CRUD de Productos y Servicios, y una página que consume una
API pública.

## Funcionalidad

- **Login sin backend real** (`index.html`): valida contra usuarios sembrados en
  `localStorage`. La sesión activa también se guarda en `localStorage`.
- **Roles**:
  - `admin` → acceso completo al CRUD de Productos y Servicios.
  - `usuario` → solo puede consultar (modo lectura).
- **Dashboard** (`dashboard.html`): menú principal con acceso a las secciones.
- **Productos y Servicios** (`productos.html`): CRUD completo (crear, editar,
  eliminar, listar) persistido en `localStorage`, usando el patrón *Repository*
  (`js/storage.js`).
- **Usuarios (API)** (`usuarios.html`): consume
  [`jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
  y muestra nombre, correo, ciudad y empresa.

## Cuentas de prueba

| Usuario | Contraseña | Rol      |
|---------|------------|----------|
| admin   | admin123   | admin    |
| usuario | usuario123 | usuario  |

## Estructura del proyecto

```
new-app/
├── index.html          # Login
├── dashboard.html       # Menú principal
├── productos.html        # CRUD de productos/servicios
├── usuarios.html         # Consumo de API
├── css/
│   └── styles.css
└── js/
    ├── auth.js          # Login, sesión, roles, navbar
    ├── storage.js       # Repositorio genérico sobre localStorage
    ├── api.js           # Cliente de la API de usuarios
    ├── productos.js     # Lógica de la página de productos
    └── usuarios.js       # Lógica de la página de usuarios (API)
```

## Cómo ejecutarlo

Al estar dentro de `htdocs` de XAMPP, con Apache activo abre:

```
http://localhost/new-app/
```

## Flujo de Git del equipo

- `main`: rama estable/protegida. Nadie desarrolla directamente aquí.
- `jamgargar04-dev`: rama de trabajo de Jose Jamin Garcia Garcia (login, dashboard,
  productos, consumo de API).
- `jorge-dev`: rama de trabajo de Jorge Israel Aguilera Rueda.

Cada integrante trabaja en su propia rama y solicita un *Pull Request* hacia
`main`. El administrador del repositorio revisa e integra los cambios.

## Publicación (GitHub Pages)

Al ser un sitio 100% estático, se puede publicar gratis con GitHub Pages:

1. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
2. La URL pública quedará como
   `https://jamgargar04.github.io/The-new-app/`.
