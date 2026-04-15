// EJEMPLOS DE CÓMO AGREGAR MÁS APKs A TU TIENDA
// Copia y pega estos ejemplos en la sección apksDatabase de script.js

// EJEMPLO 1: Juego
/*
{
    id: 2,
    title: "Mi Juego Épico",
    description: "Un juego emocionante lleno de aventuras, desafíos y gráficos increíbles. ¡Diviértete horas!",
    category: "juegos",
    icon: "fa-gamepad",
    size: "85.5 MB",
    version: "3.2.1",
    downloadUrl: "https://github.com/JeysonPlays/miJuego/raw/main/MiJuegoEpico.apk",
    featured: true,
    rating: 4.7
}
*/

// EJEMPLO 2: Herramienta de Utilidad
/*
{
    id: 3,
    title: "Convertidor Rápido",
    description: "Convierte monedas, unidades, temperaturas y más. Una herramienta imprescindible para tu bolsillo.",
    category: "utilidades",
    icon: "fa-exchange-alt",
    size: "12.8 MB",
    version: "1.5.0",
    downloadUrl: "https://github.com/JeysonPlays/convertidor/raw/main/ConvertidorRapido.apk",
    featured: false,
    rating: 4.6
}
*/

// EJEMPLO 3: App de Productividad
/*
{
    id: 4,
    title: "Mi Agenda Plus",
    description: "Gestor de tareas y agenda inteligente. Sincroniza tu calendario, crear recordatorios y planifica tu día.",
    category: "productividad",
    icon: "fa-calendar-alt",
    size: "28.3 MB",
    version: "2.0.0",
    downloadUrl: "https://github.com/JeysonPlays/miAgenda/raw/main/MiAgendaPlus.apk",
    featured: true,
    rating: 4.9
}
*/

// EJEMPLO 4: App de Finanzas
/*
{
    id: 5,
    title: "Inversiones Inteligentes",
    description: "Aprende y practica inversión de forma segura. Simulador de bolsa con datos reales.",
    category: "finanzas",
    icon: "fa-chart-line",
    size: "19.7 MB",
    version: "1.8.3",
    downloadUrl: "https://github.com/JeysonPlays/inversiones/raw/main/InversionesInteligentes.apk",
    featured: false,
    rating: 4.8
}
*/

// ============================================
// INSTRUCCIONES:
// ============================================

// 1. Abre script.js
// 2. Busca la sección: const apksDatabase = [
// 3. Copia uno de los ejemplos de arriba
// 4. Quita los comentarios /* */
// 5. Cambia el ID del ejemplo anterior + 1
// 6. Agrega una COMA después del anterior
// 7. Reemplaza los datos con los de tu APK
// 8. Guarda el archivo
// 9. Recarga la página web

// ============================================
// ÍCONES RECOMENDADOS POR CATEGORÍA
// ============================================

/* FINANZAS:
   fa-wallet - Billetera
   fa-chart-line - Gráfico de línea
   fa-piggy-bank - Alcancía
   fa-money-bill - Dinero
   fa-credit-card - Tarjeta de crédito
   fa-calculator - Calculadora
*/

/* JUEGOS:
   fa-gamepad - Gamepad
   fa-dice - Dados
   fa-chess - Ajedrez
   fa-trophy - Trofeo
   fa-star - Estrella
*/

/* UTILIDADES:
   fa-wrench - Llave inglesa
   fa-tools - Herramientas
   fa-cog - Engranaje
   fa-exchange-alt - Cambiar
   fa-cube - Cubo
   fa-layer-group - Capas
*/

/* PRODUCTIVIDAD:
   fa-list-check - Lista de verificación
   fa-calendar-alt - Calendario
   fa-clock - Reloj
   fa-tasks - Tareas
   fa-sticky-note - Nota adhesiva
   fa-edit - Editar
   fa-folder - Carpeta
*/

// ============================================
// PLANTILLA COMPLETA
// ============================================

/*
{
    id: X,  // Reemplaza X con el siguiente número
    title: "Nombre de tu APP",
    description: "Describción breve y atractiva de lo que hace tu aplicación",
    category: "finanzas", // Elige entre: finanzas, juegos, utilidades, productividad
    icon: "fa-icon", // Ícono de Font Awesome (sin el fa- inicial aquí si ya lo incluyes)
    size: "XX.X MB",
    version: "1.0.0",
    downloadUrl: "URL completa a tu APK en GitHub",
    featured: false, // true = aparece destacada, false = aparece normal
    rating: 4.5 // Calificación de 1 a 5
}
*/

// ============================================
// EJEMPLO DE ESTRUCTURA COMPLETA DE SCRIPT.JS
// ============================================

/*
const apksDatabase = [
    {
        id: 1,
        title: "Presta YA",
        description: "Gestiona tus préstamos...",
        category: "finanzas",
        icon: "fa-wallet",
        size: "15.2 MB",
        version: "1.0.0",
        downloadUrl: "https://...",
        featured: true,
        rating: 4.8
    },
    {
        id: 2,
        title: "Nueva App",
        description: "Descripción...",
        category: "juegos",
        icon: "fa-gamepad",
        size: "50.3 MB",
        version: "1.0.0",
        downloadUrl: "https://...",
        featured: false,
        rating: 4.5
    }
];
*/
