# LAB UNKNOWS — Simulador Interactivo de Fricción Dinámica en Plano Inclinado

Aplicación web interactiva desarrollada para la asignatura de Física / Computación Científica, orientada al análisis cinemático y dinámico de un cuerpo rígido que se desliza sobre una superficie inclinada con rozamiento cinético ($\mu_k$).

## Enlaces del Proyecto
- **Aplicación Web Activa (GitHub Pages):** `https://7martinn.github.io/LAB-UNKNOWS/`
- **Repositorio Oficial:** `https://github.com/7Martinn/LAB-UNKNOWS`

## Características Principales
- **Simulación Vectorial en Tiempo Real:** Visualización dinámica sobre `<canvas>` de las fuerzas actuantes: Peso ($mg$), Normal ($N$) y Fuerza de Fricción Cinética ($f_k$).
- **Controles Experimentales:** Ajuste interactivo de superficies predefinidas (Madera, Acero, Hielo, Caucho), ángulo de inclinación ($\theta$), coeficiente de fricción cinética ($\mu_k$) y masa del bloque ($m$).
- **Telemetría y Gráficos Cuantitativos:** Cálculo instantáneo de posición $x(t)$, velocidad $v(t)$, aceleración $a$, coeficiente experimental $\mu_{k,\text{exp}}$ y error relativo porcentual frente al modelo teórico.
- **Exportación de Datos:** Descarga directa de las series temporales de simulación en formatos **CSV** y **JSON** para análisis externo.

## Estructura del Repositorio
```text
LAB-UNKNOWS/
├── index.html          # Interfaz principal, estilos y motor de renderizado integrado
├── README.md           # Documentación operativa y descripción del proyecto
├── physics.js          # Módulo de ecuaciones dinámicas, cinemática y cálculo de error
├── data-export.js      # Módulo de generación de gráficos y exportación CSV/JSON
└── docs/               # Bitácora técnica y documentación de respaldo de entregas previas
```

## Equipo de Desarrollo y Roles
- **Sebastián Tapia** — *Product Owner*: Coordinación general, gestión del repositorio, documentación operativa (`README.md`) y validación de requerimientos de rúbrica.
- **Martín Molina** — *Responsable Científico*: Formulación del modelo físico-matemático, implementación del motor de dinámica (`physics.js`) y verificación de condiciones de deslizamiento ($\tan(\theta) > \mu_k$).
- **Martín Aguayo** — *Responsable Científico*: Análisis de datos experimentales, validación de error relativo, contraste teórico-empírico y gestión de bitácora técnica (`docs/`).
- **Diego Vásquez** — *Responsable UX/UI & Software*: Diseño de interfaz interactiva, visualización vectorial en tiempo real (`index.html`) y módulo de exportación de datos (`data-export.js`).

## Instrucciones de Ejecución Local
1. Clonar o descargar el repositorio desde GitHub.
2. Abrir el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Edge, Firefox) sin necesidad de servidores adicionales ni dependencias externas.
