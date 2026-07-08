# Actividad 3 - Módulo de Persistencia en TypeScript

## Datos del Estudiante

- **Nombre:** Julian Eligio Jax Cisneros
- **Carné:** 2025549
- **Sección:** C
- **Institución:** Fundación Kinal

---

# Descripción del Proyecto

Este proyecto consiste en un sistema de gestión desarrollado en **TypeScript** y ejecutado sobre **Node.js**.

Implementa un módulo de persistencia asíncrona simulada utilizando patrones de diseño, tipado estricto mediante interfaces y manejo de excepciones con bloques `try-catch`.

El sistema permite administrar dos entidades principales:

- **Productos:** Control de stock, precios y códigos únicos.
- **Clientes:** Administración de datos personales y registros de membresía.

---

# Arquitectura del Proyecto

La aplicación está organizada de forma modular dentro del directorio `src/`:

```text
src/
│
├── models/
│   └── types.ts
│
├── services/
│   └── persistence.service.ts
│
└── app.ts
```

### Descripción de cada archivo

| Archivo | Descripción |
|----------|-------------|
| `src/models/types.ts` | Define las interfaces `Producto` y `Cliente`. |
| `src/services/persistence.service.ts` | Contiene la lógica del servicio de persistencia y validación de datos. |
| `src/app.ts` | Punto de entrada donde se ejecutan las pruebas del sistema. |

---

# Requisitos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- Node.js (versión LTS recomendada)
- npm

---

# Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
```

---

# Compilación y Ejecución

Compilar el proyecto:

```bash
npm run build
```

Ejecutar la aplicación:

```bash
npm start
```

---

# Estructura de Ramas (Git Flow)

El proyecto fue desarrollado utilizando una estructura basada en **Git Flow**.

| Rama | Descripción |
|-------|-------------|
| `main` | Contiene la versión estable del proyecto. |
| `develop` | Rama de integración de funcionalidades. |
| `ft-JulianJax-2025549` | Rama personal donde se desarrolló la actividad. |

---

# Tecnologías Utilizadas

- TypeScript
- Node.js
- npm
- Git
- GitHub

---

# Características Implementadas

- Persistencia asíncrona simulada.
- Interfaces con tipado estricto.
- Servicio genérico para almacenamiento.
- Validación de registros duplicados.
- Manejo de errores mediante `try-catch`.
- Organización modular del proyecto.
- Compilación mediante TypeScript.

---

# Autor

**Julian Eligio Jax Cisneros**  
**Carné:** 2025549  
**Fundación Kinal**