# 📱 JEYSON PLAY STORE - Tienda de APKs

Bienvenido a JEYSON PLAY STORE, una tienda web moderna para descargar las mejores aplicaciones desarrolladas por Jeyson.

## 🎯 Características

- **Diseño Moderno y Responsivo**: Interfaz atractiva que funciona perfectamente en desktop, tablet y móvil
- **Búsqueda Inteligente**: Busca tus APKs favoritas por nombre o descripción
- **Filtro por Categorías**: Organiza las apps en diferentes categorías
- **Detalles Completos**: Información detallada de cada aplicación
- **Descarga Directa**: Enlaces directos a GitHub para descargar las APKs
- **Tema Oscuro Moderno**: Interfaz con colores modernos y degradados

## 📂 Estructura del Proyecto

```
JEYSON-PLAY-STORE/
├── index.html      # Página principal
├── styles.css      # Estilos de la web
├── script.js       # Lógica y funcionalidades
└── README.md       # Este archivo
```

## 🚀 Instalación

1. Descarga los archivos del proyecto
2. Abre `index.html` en tu navegador web

¡Eso es todo! No necesitas servidor ni instalaciones complicadas.

## 📝 Cómo Agregar Nuevas APKs

Para agregar nuevas aplicaciones, abre el archivo `script.js` y busca la sección `apksDatabase`. Agrega una nueva entrada siguiendo este formato:

```javascript
{
    id: 2,  // ID único (incrementar el número)
    title: "Nombre de la App",
    description: "Descripción detallada de tu app",
    category: "finanzas", // Categoría: finanzas, juegos, utilidades, productividad
    icon: "fa-icon", // Ícono de Font Awesome
    size: "XX.X MB",
    version: "1.0.0",
    downloadUrl: "URL de descarga de tu APK",
    featured: true, // true si es destacada, false si no
    rating: 4.8 // Calificación de 1 a 5
}
```

### Ejemplo completo:

```javascript
{
    id: 2,
    title: "Mi Juego",
    description: "Un juego emocionante con gráficos increíbles",
    category: "juegos",
    icon: "fa-gamepad",
    size: "50.3 MB",
    version: "2.1.0",
    downloadUrl: "https://github.com/JeysonPlays/MiJuego/raw/main/MiJuego.apk",
    featured: true,
    rating: 4.9
}
```

## 🎨 Personalización

### Cambiar Colores

Los colores principales están definidos en la sección `:root` del archivo `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Color principal (morado/azul) */
    --secondary-color: #8b5cf6;    /* Color secundario */
    --accent-color: #ec4899;       /* Color de acento (rosa) */
}
```

## 📱 Ícones Disponibles

La página utiliza Font Awesome 6. Algunos ejemplos de ícones útiles:

- `fa-wallet` - Finanzas/Billetera
- `fa-gamepad` - Juegos
- `fa-wrench` - Herramientas/Utilidades
- `fa-list-check` - Tareas/Productividad
- `fa-camera` - Cámara
- `fa-music` - Música
- `fa-book` - Educación

Visita [fontawesome.com](https://fontawesome.com/icons) para ver más ícones.

## 🌐 Deploy (Publicar en Internet)

### Opción 1: GitHub Pages
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona como rama: `main`
5. ¡Listo! Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`

### Opción 2: Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Conecta tu repositorio GitHub
3. Deploya en un click

### Opción 3: Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu proyecto de GitHub
3. ¡Automáticamente publicado!

## 📋 Categorías Disponibles

- **finanzas** - Aplicaciones para gestión de dinero
- **juegos** - Juegos y entretenimiento
- **utilidades** - Herramientas útiles
- **productividad** - Apps para ser más productivo

## 🆘 Solución de Problemas

### Las imágenes no se cargan
- Verifica que las URLs de descarga sean correctas
- Asegúrate de que los enlaces sean públicos en GitHub

### El buscador no funciona
- Recarga la página (F5)
- Verifica la consola del navegador (F12) para errores

### Los estilos no se aplican
- Asegúrate de que `styles.css` esté en la misma carpeta que `index.html`
- Limpia el caché del navegador (Ctrl+Shift+Supr)

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de modificarlo y usarlo como desees.

## 👨‍💻 Autor

**JEYSON PLAY STORE** - Tienda de APKs profesional y moderna

## 📞 Soporte

Para preguntas o problemas, usa GitHub:
- GitHub: [JeysonPlays](https://github.com/JeysonPlays)

---

¡Disfruta tu tienda de APKs! 🚀
