# 🚀 GUÍA RÁPIDA - AGREGAR TUS APKs

## 📍 Ubicación de los archivos
Todos tus archivos están en: `C:\Users\jeyso\Documents\`

- 📄 `index.html` - La página principal
- 🎨 `styles.css` - Los estilos
- ⚙️ `script.js` - La lógica (aquí agregas APKs)
- 📋 `examples.js` - Ejemplos de cómo agregar más
- 📖 `README.md` - Documentación completa
- ⚙️ `config.json` - Configuración de la tienda

## ✅ Lo que ya está incluido

✨ **Presta YA** - Tu app de gestión de finanzas
- Categoría: Finanzas
- Tamaño: 15.2 MB
- Versión: 1.0.0
- Enlace de descarga: GitHub

## 🎯 Próximos Pasos

### Para ABRIR tu tienda:
1. Ve a `C:\Users\jeyso\Documents`
2. Haz doble click en `index.html`
3. ¡Listo! Se abrirá en tu navegador

### Para AGREGAR más APKs:
1. Abre el archivo `script.js` con un editor de texto
2. Busca: `const apksDatabase = [`
3. Sigue el ejemplo que hay para Presta YA
4. Copia y pega a continuación, cambiando los datos
5. Guarda el archivo
6. Recarga tu página web

### Ejemplo rápido para tu 2ª app:

```javascript
,{
    id: 2,
    title: "Mi Segunda App",
    description: "Descripción de tu app",
    category: "juegos",
    icon: "fa-gamepad",
    size: "25.0 MB",
    version: "1.0.0",
    downloadUrl: "https://enlace-a-tu-apk.apk",
    featured: true,
    rating: 4.5
}
```

**Importante**: 
- Cambia `id: 2` (o el número siguiente)
- Cambia el `downloadUrl` a tu enlace de GitHub

## 🌍 Para Publicar en Internet

### Opción más fácil: GitHub Pages

1. Crea un archivo `.gitignore` (opcional)
2. Sube tu carpeta a GitHub
3. Ve a Settings → Pages
4. Selecciona `main` branch
5. ¡Publicado! 🎉

## 📱 Características

✅ Búsqueda de APKs
✅ Filtro por categorías
✅ Diseño responsivo (mobile, tablet, desktop)
✅ Modal con detalles de cada app
✅ Descarga directa desde GitHub
✅ Diseño moderno con gradientes
✅ Totalmente personalizable

## 🎨 Personalización Fácil

### Cambiar tu nombre/email:
En `index.html`, busca la sección "Contacto" y modifica:
```html
<span>tu-email@ejemplo.com</span>
```

### Cambiar colores (tema oscuro/claro):
En `styles.css`, modifica las variables:
```css
--primary-color: #6366f1;      /* Color principal */
--secondary-color: #8b5cf6;    /* Color secundario */
--accent-color: #ec4899;       /* Color de acento */
```

## 📞 Soporte

Si tienes dudas:
- Lee el archivo `README.md`
- Consulta `examples.js` para más ejemplos
- Verifica la consola (F12) para errores

## 🎉 ¡Listo!

Tu tienda está lista. Ahora solo agrega tus APKs y comparte el enlace con tus usuarios.

---

**Última actualización**: 13 de abril de 2026
