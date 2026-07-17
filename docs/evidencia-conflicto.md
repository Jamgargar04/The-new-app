# Evidencia del conflicto (Fase 5)

## Origen del conflicto

Dos integrantes modificaron, de forma independiente y sobre el mismo punto de
`main`, el mismo bloque de `contacto.html` (dirección y teléfono de la oficina):

- **Lizet Del Carmen Martinez Vera** — rama `conflicto-lizet-contacto`,
  commit `c86b467` — *"fix(contacto): actualiza direccion y telefono de la oficina"*
- **Jose Jamin Garcia Garcia** — rama `conflicto-jamgargar04-contacto`,
  commit `84726e0` — *"fix(contacto): agrega piso de oficina y nota de WhatsApp en telefono"*

Al fusionar primero la rama de Lizet a `main` sin problema, y luego intentar
fusionar la rama de Jose, Git no pudo combinar los cambios automáticamente:

```
$ git merge --no-ff conflicto-jamgargar04-contacto
Auto-merging contacto.html
CONFLICT (content): Merge conflict in contacto.html
Automatic merge failed; fix conflicts and then commit the result.
```

## Conflicto generado (marcadores de Git)

```html
<div class="about-block">
  <h3>📍 Oficina</h3>
<<<<<<< HEAD
  <p>Av. Reforma 456, Col. Juárez, Ciudad de México, México.</p>
</div>
<div class="about-block">
  <h3>📞 Teléfono</h3>
  <p>+52 55 8765 4321 (horario: 9am - 6pm)</p>
=======
  <p>Av. Central 123, Piso 4, Ciudad de México, México.</p>
</div>
<div class="about-block">
  <h3>📞 Teléfono</h3>
  <p>+52 55 1234 5678 (WhatsApp disponible)</p>
>>>>>>> conflicto-jamgargar04-contacto
</div>
```

## Resolución

El administrador del repositorio (Jose) revisó ambos cambios y combinó la
información más completa de cada uno: la dirección más actualizada (de Lizet)
junto con el número de teléfono y la nota de WhatsApp (de Jose):

```html
<div class="about-block">
  <h3>📍 Oficina</h3>
  <p>Av. Reforma 456, Col. Juárez, Ciudad de México, México.</p>
</div>
<div class="about-block">
  <h3>📞 Teléfono</h3>
  <p>+52 55 1234 5678 (WhatsApp disponible, horario: 9am - 6pm)</p>
</div>
```

Commit de resolución: `merge: resuelve conflicto en contacto.html (oficina y telefono)`.
