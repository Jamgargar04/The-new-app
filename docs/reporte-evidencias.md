# Reporte de Evidencias — The New App

Práctica 3er Parcial: Desarrollo Colaborativo con Git y GitHub, pruebas y despliegue.

**Repositorio:** https://github.com/Jamgargar04/The-new-app

**Equipo:**
| Integrante | Rol / GitHub | Responsable de |
|---|---|---|
| Jose Jamin Garcia Garcia | `Jamgargar04` (administrador del repo) | Login, Dashboard/Inicio, Productos y Servicios (CRUD), API de Usuarios |
| Jorge Israel Aguilera Rueda | `wmunny02` | Nosotros, Galería de Fotos, API de Clima |
| Lizet Del Carmen Martinez Vera | `LizetDelCarmenMartinezVera` | Contacto, resolución del conflicto, pulido de la versión final |

---

## 1. Repositorio de GitHub

- Historial de trabajo, integración de ramas y versión final: visibles en
  https://github.com/Jamgargar04/The-new-app/commits/main
- Colaboradores agregados: los 3 integrantes + docente.

## 2. Historial del proyecto (commits por integrante)

| Autor | Commits en `main` |
|---|---|
| Jose Jamin Garcia Garcia (`Jamgargar04`) | 14 |
| Jorge Israel Aguilera Rueda | 12 |
| Lizet Del Carmen Martinez Vera | 6 |
| **Total** | **32** |

> Nota: `Jamgargar04` es el usuario de GitHub de Jose Jamin Garcia Garcia; ambos
> nombres corresponden a la misma persona (incluye el commit de resolución del
> conflicto, hecho con su identidad de administrador del repositorio).

Todos los commits tienen mensajes descriptivos con prefijo por tipo
(`feat`, `fix`, `style`, `docs`) y por página (ej. `feat(clima): ...`).

## 3. Ramas

Cada integrante trabajó en su propia rama antes de integrar a `main`:

- `jamgargar04-dev` — Jose (6 commits de avance).
- `wmunny02-dev` — Jorge (9 commits de avance).
- `LizetDelCarmenMartinezVera-dev` — Lizet (4 commits de avance).
- `conflicto-lizet-contacto` / `conflicto-jamgargar04-contacto` — ramas usadas
  específicamente para generar el conflicto de la Fase 5.

Ver: https://github.com/Jamgargar04/The-new-app/branches

## 4. Integraciones (Pull Requests / merges)

- PR #1: `jamgargar04-dev` → `main` (Login, Dashboard, Productos, API Usuarios).
- PR #2: `wmunny02-dev` → `main` (Nosotros, Galería, API Clima).
- Merge de `LizetDelCarmenMartinezVera-dev` → `main` (Contacto).
- Merge con conflicto de `conflicto-jamgargar04-contacto` → `main` (ver punto 5).

Ver: https://github.com/Jamgargar04/The-new-app/network

## 5. Evidencia del conflicto (Fase 5)

Documentado completo, con los marcadores de conflicto reales generados por
Git y la resolución aplicada, en
[`docs/evidencia-conflicto.md`](evidencia-conflicto.md).

Resumen: dos ramas (`conflicto-lizet-contacto` y
`conflicto-jamgargar04-contacto`) modificaron la misma sección de
`contacto.html` (dirección y teléfono de la oficina). Al fusionar la segunda
rama, Git marcó el conflicto; se resolvió combinando ambos cambios y se
documentó en el commit `85055f8`.

## 6. Sitio funcionando

- Login con roles (`admin` / `usuario`), sesión en `localStorage`.
- Menú principal con 6 secciones + Contacto.
- Páginas informativas: Inicio, Nosotros, Galería.
- Dos APIs consumidas en tiempo real: JSONPlaceholder (Usuarios) y
  Open-Meteo (Clima).
- Navegación completa entre todas las páginas vía navbar.
- CRUD de Productos y Servicios funcional, con restricciones por rol.

**URL de demostración (pendiente de publicar):** completar aquí una vez
habilitado GitHub Pages (Settings → Pages → rama `main`) —
quedará como `https://jamgargar04.github.io/The-new-app/`.

---

*Nota: este reporte resume el trabajo local y remoto hasta el momento de la
integración final. Para la entrega, se recomienda acompañarlo con capturas de
pantalla del sitio funcionando y del historial de commits/ramas en GitHub.*
