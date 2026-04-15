// Base de datos de APKs
const apksDatabase = [
    {
        id: 1,
        title: "Presta YA",
        description: "Gestiona tus préstamos, gastos, ingresos y controla quién te debe dinero. Una herramienta completa para administrar tus finanzas personales.",
        category: "finanzas",
        icon: "fa-wallet",
        size: "6,8 MB",
        version: "1.0.0",
        imageUrl: "LOGO PRESTA YA.png",
        roundImage: true,
        downloadUrl: "./Presta YA.apk",
        featured: true,
        rating: 4.8
    },
    {
        id: 2,
        title: "Reciclo Aprendo",
        description: "Aprende a reciclar de forma divertida con contenidos prácticos y consejos para cuidar el medio ambiente.",
        category: "utilidades",
        icon: "fa-recycle",
        size: "6,8 MB",
        version: "1.0.0",
        imageUrl: "LOGO RECICLO APRENDO.png",
        roundImage: true,
        downloadUrl: "./Reciclo Aprendo.apk",
        featured: false,
        rating: 4.7
    }
];

// Elemento del modal
const modal = document.getElementById('apkModal');
const modalClose = document.querySelector('.close');

// Cerrar modal
modalClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Función para renderizar tarjetas de APK
function renderAPKs(apksToShow = apksDatabase) {
    const grid = document.getElementById('apkGrid');
    grid.innerHTML = '';

    if (apksToShow.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No se encontraron aplicaciones.</p>';
        return;
    }

    apksToShow.forEach(apk => {
        const card = document.createElement('div');
        card.className = 'apk-card';
        card.innerHTML = `
            ${apk.imageUrl ? `
            <div class="apk-image-wrap">
                <img class="apk-image ${apk.roundImage ? 'apk-image--round' : ''}" src="${apk.imageUrl}" alt="Logo de ${apk.title}">
            </div>
            ` : `
            <div class="apk-icon">
                <i class="fas ${apk.icon}"></i>
            </div>
            `}
            <h3 class="apk-title">${apk.title}</h3>
            <p class="apk-description">${apk.description}</p>
            <span class="apk-category">${apk.category}</span>
            <div class="apk-footer">
                <span class="apk-version">v${apk.version}</span>
                <button class="btn-download-card" onclick="openAPKModal(${apk.id})">Detalles</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Función para abrir el modal de APK
function openAPKModal(apkId) {
    const apk = apksDatabase.find(a => a.id === apkId);
    if (!apk) return;

    document.getElementById('modalTitle').textContent = apk.title;
    document.getElementById('modalDescription').textContent = apk.description;
    document.getElementById('modalCategory').textContent = capitalizeFirst(apk.category);
    document.getElementById('modalSize').textContent = apk.size;
    document.getElementById('modalVersion').textContent = `v${apk.version}`;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = apk.imageUrl || '';
    modalImage.alt = `Logo de ${apk.title}`;
    modalImage.classList.toggle('modal-image--round', Boolean(apk.roundImage));
    
    const downloadBtn = document.getElementById('modalDownloadBtn');
    const hasDownload = Boolean(apk.downloadUrl && apk.downloadUrl.trim());

    downloadBtn.href = hasDownload ? apk.downloadUrl : '#';
    downloadBtn.target = '_self';
    downloadBtn.innerText = hasDownload ? `Descargar ${apk.title}` : 'APK próximamente';
    downloadBtn.style.pointerEvents = hasDownload ? '' : 'none';
    downloadBtn.style.opacity = hasDownload ? '' : '0.65';
    downloadBtn.setAttribute('aria-disabled', hasDownload ? 'false' : 'true');
    downloadBtn.onclick = function(event) {
        event.preventDefault();
        if (!hasDownload) return;
        downloadAPK(apk, downloadBtn);
    };

    modal.style.display = "flex";
}

// Inicia la descarga sin esperar a que el archivo complete una carga previa en memoria.
function downloadAPK(apk, button) {
    const previousText = button ? button.innerText : '';
    const previousPointerEvents = button ? button.style.pointerEvents : '';
    const previousAriaDisabled = button ? button.getAttribute('aria-disabled') : null;
    const safeName = `${apk.title.replace(/[^a-zA-Z0-9\s_-]/g, '').trim().replace(/\s+/g, '_')}.apk`;

    if (button) {
        button.setAttribute('aria-disabled', 'true');
        button.style.pointerEvents = 'none';
        button.innerText = 'Preparando descarga...';
    }

    const tempLink = document.createElement('a');
    tempLink.href = apk.downloadUrl;
    tempLink.download = safeName;
    tempLink.rel = 'noopener';
    document.body.appendChild(tempLink);
    tempLink.click();
    tempLink.remove();

    window.setTimeout(() => {
        if (button) {
            if (previousAriaDisabled === null) {
                button.removeAttribute('aria-disabled');
            } else {
                button.setAttribute('aria-disabled', previousAriaDisabled);
            }
            button.style.pointerEvents = previousPointerEvents;
            button.innerText = previousText || `Descargar ${apk.title}`;
        }
    }, 1200);
}

// Función para capitalizar la primera letra
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Búsqueda
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = apksDatabase.filter(apk => 
        apk.title.toLowerCase().includes(searchTerm) ||
        apk.description.toLowerCase().includes(searchTerm)
    );
    renderAPKs(filtered);
});

// Búsqueda avanzada
document.getElementById('advancedSearch').addEventListener('input', function() {
    filterAPKs();
});

document.getElementById('categoryFilter').addEventListener('change', function() {
    filterAPKs();
});

document.querySelector('.btn-search').addEventListener('click', function() {
    filterAPKs();
});

function filterAPKs() {
    const searchTerm = document.getElementById('advancedSearch').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = apksDatabase.filter(apk => {
        const matchesSearch = apk.title.toLowerCase().includes(searchTerm) ||
                             apk.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === '' || apk.category === category;
        return matchesSearch && matchesCategory;
    });

    renderAPKs(filtered);
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    renderAPKs();
    
    // Animación de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Agregar eventos para las tarjetas de categoría
document.querySelectorAll('.categoria-card').forEach(card => {
    card.addEventListener('click', function() {
        const categoryName = this.querySelector('h3').textContent.toLowerCase();
        const categoryMap = {
            'finanzas': 'finanzas',
            'juegos': 'juegos',
            'utilidades': 'utilidades',
            'productividad': 'productividad'
        };
        
        const category = categoryMap[categoryName];
        if (category) {
            document.getElementById('categoryFilter').value = category;
            filterAPKs();
            document.getElementById('tienda').scrollIntoView({behavior: 'smooth'});
        }
    });
});
