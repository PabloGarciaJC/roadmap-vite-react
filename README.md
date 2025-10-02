# Roadmap: React + Vite

Este proyecto es tu primer acercamiento práctico a **React** usando **Vite**. Está pensado como una guía educativa y de práctica para aprender conceptos esenciales de React mientras construyes un proyecto funcional.

---

## Demo del Proyecto

[https://roadmap-vite-react.com/](https://roadmap-vite-react.pablogarciajc.com/)

| ![Imagen 1](https://pablogarciajc.com/wp-content/uploads/2025/10/roadmap-vite-react-1.webp) | ![Imagen 2](https://pablogarciajc.com/wp-content/uploads/2025/10/roadmap-vite-react-2.webp) |
|-----------|-----------|

## Instalación

### Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados.
- **Make**: Utilizado para automatizar procesos y gestionar contenedores de manera más eficiente.

### Pasos de Instalación

1. Clona el repositorio desde GitHub.
2. Dentro del repositorio, encontrarás un archivo **Makefile** que contiene los comandos necesarios para iniciar y gestionar tu aplicación.
3. Usa los siguientes comandos de **Make** para interactuar con la aplicación:

    - **`make init-app`**: Inicializa la aplicación, copiando `.env`, creando symlinks, levantando contenedores, instalando dependencias y levantando el servidor de desarrollo.  
    - **`make up`**: Levanta los contenedores asociados a la aplicación en segundo plano.  
    - **`make down`**: Detiene los contenedores y apaga la aplicación.  
    - **`make shell`**: Ingresa al contenedor para interactuar directamente con el sistema.  
    - **`make npm-install`**: Instala todas las dependencias definidas en `package.json`.  
    - **`make npm-host`**: Levanta el servidor de desarrollo (`npm run dev`) accesible desde tu máquina local.  
    - **`make npm-build`**: Genera la versión de producción de la aplicación (`npm run build`) y mueve los archivos compilados a la raíz del proyecto.  

4. Además de estos comandos, dentro del archivo **Makefile** puedes encontrar otros comandos que te permitirán interactuar de manera más específica con los contenedores y los diferentes servicios que conforman la aplicación.

5. Accede a los siguientes URL:
   - **Aplicación Web**: [http://localhost:5173](http://localhost:5173)
   - **PhpMyAdmin**: [http://localhost:8082/](http://localhost:8082/)

---

## Contáctame / Sígueme en mis redes sociales

| Red Social   | Descripción                                              | Enlace                   |
|--------------|----------------------------------------------------------|--------------------------|
| **Facebook** | Conéctate y mantente al tanto de mis actualizaciones.    | [Presiona aquí](https://www.facebook.com/PabloGarciaJC) |
| **YouTube**  | Fundamentos de la programación, tutoriales y noticias.   | [Presiona aquí](https://www.youtube.com/@pablogarciajc)     |
| **Página Web** | Más información sobre mis proyectos y servicios.        | [Presiona aquí](https://pablogarciajc.com/)              |
| **LinkedIn** | Sigue mi carrera profesional y establece conexiones.     | [Presiona aquí](https://www.linkedin.com/in/pablogarciajc) |
| **Instagram**| Fotos, proyectos y contenido relacionado.                 | [Presiona aquí](https://www.instagram.com/pablogarciajc) |
| **Twitter**  | Proyectos, pensamientos y actualizaciones.                | [Presiona aquí](https://x.com/PabloGarciaJC?t=lct1gxvE8DkqAr8dgxrHIw&s=09)   |

---
> _"El buen manejo de tus finanzas hoy construye la seguridad del mañana."_
