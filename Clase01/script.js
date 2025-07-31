/**************************************************************
 * 1. GITHUB – Qué es, para qué sirve y comandos clave
 **************************************************************/

/*
Git es un sistema de control de versiones que nos permite:
- Guardar el historial de cambios en nuestros proyectos
- Volver a versiones anteriores del código
- Colaborar con otras personas sin pisar el trabajo de los demás

GitHub es una plataforma en la nube donde subimos los repositorios
para poder compartirlos y colaborar online.
*/

// Comandos principales:
// git init                 → Inicializa un repo local
// git add .               → Agrega todos los archivos al staging
// git commit -m "mensaje" → Guarda un punto en el historial
// git remote add origin URL → Enlaza el repo local con uno en GitHub
// git push -u origin main → Sube el código al repositorio remoto
// git pull origin main    → Baja los cambios del repo remoto

/**************************************************************
 * 2. REPASO DE JAVASCRIPT – Intro para llegar a React
 **************************************************************/

/*
JavaScript es el lenguaje que usamos para agregar interacción
y lógica a nuestras páginas web.

Ejemplo básico: cambiar el contenido de un título con un botón.
Este tipo de manipulación del DOM se hace de forma directa,
y aunque es útil para cosas pequeñas, se vuelve difícil de escalar.
*/

// HTML (simulado):
// <h1 id="titulo">Hola Mundo</h1>
// <button onclick="cambiarTexto()">Cambiar</button>

function cambiarTexto() {
  document.getElementById("titulo").innerText = "Texto cambiado con JS";
}

/*
Este ejemplo está bien como introducción,
pero cuando tenés muchas interacciones o datos,
terminás escribiendo mucho código manual.

Ahí es donde aparece React como solución.
*/

/**************************************************************
 * 3. INTRODUCCIÓN A REACT – Qué es, ventajas y cómo instalarlo
 **************************************************************/

/*
React es una librería de JavaScript para construir interfaces
de usuario. Nos permite trabajar con componentes reutilizables
y mantener el código más organizado y dinámico.

🔁 Ventajas de usar React:
- Actualiza la vista de forma automática (DOM virtual)
- Reutilización de código (componentes)
- Más rápido y eficiente para proyectos grandes
- Comunidad muy activa

📛 Diferencias clave:
- En HTML/JS clásico se modifica el DOM directamente.
- En React, se trabaja con componentes y el DOM virtual se encarga
  de actualizar solo lo que cambia.

🚀 ¿Cómo empezar un proyecto con React?
Recomendamos usar Vite (una herramienta rápida y moderna).

📋 Requisitos del sistema:
- Tener instalado Node.js (https://nodejs.org)
- Tener npm disponible (viene con Node)
- Tener Git instalado (opcional pero útil)

🛠️ Pasos para instalar React con Vite:

1. Crear el proyecto:
   npm create vite@latest mi-proyecto -- --template react

2. Entrar al proyecto:
   cd mi-proyecto

3. Instalar dependencias:
   npm install

4. Correr el servidor:
   npm run dev

Con eso, ya tenemos un entorno React funcionando listo para trabajar.
*/

/**************************************************************
 * Fin del resumen teórico con ejemplos y comandos comentados
 **************************************************************/

/**************************************************************
 * FUNCIONALIDADES INTERACTIVAS MODERNAS
 **************************************************************/

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVEGACIÓN SUAVE =====
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Función para actualizar navegación activa
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }
    
    // Navegación suave al hacer clic en los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Actualizar navegación al hacer scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // ===== DEMO INTERACTIVO =====
    const demoTitle = document.getElementById('demo-title');
    const changeBtn = document.getElementById('change-btn');
    
    if (demoTitle && changeBtn) {
        const originalText = demoTitle.textContent;
        let isChanged = false;
        
        changeBtn.addEventListener('click', function() {
            if (!isChanged) {
                demoTitle.textContent = '¡Texto cambiado con JavaScript!';
                demoTitle.style.color = '#61dafb';
                changeBtn.innerHTML = '<i class="fas fa-undo"></i> Restaurar';
                isChanged = true;
            } else {
                demoTitle.textContent = originalText;
                demoTitle.style.color = 'white';
                changeBtn.innerHTML = '<i class="fas fa-magic"></i> Cambiar Texto';
                isChanged = false;
            }
        });
    }
    
    // ===== ANIMACIONES AL SCROLL =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todas las cards para animaciones
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===== EFECTOS HOVER MEJORADOS =====
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // ===== CONTADOR DE VISITAS (SIMULADO) =====
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    // Mostrar contador en el footer si existe
    const footer = document.querySelector('.footer p');
    if (footer) {
        footer.innerHTML += ` | Visitas: ${visitCount}`;
    }
    
    // ===== TOOLTIP PARA COMANDOS =====
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        const code = step.querySelector('code');
        if (code) {
            step.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = 'Haz clic para copiar';
                tooltip.style.cssText = `
                    position: absolute;
                    background: #2d3748;
                    color: white;
                    padding: 0.5rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    z-index: 1000;
                    pointer-events: none;
                `;
                this.appendChild(tooltip);
            });
            
            step.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) tooltip.remove();
            });
            
            // Copiar comando al portapapeles
            step.addEventListener('click', function() {
                const codeText = code.textContent;
                navigator.clipboard.writeText(codeText).then(() => {
                    // Feedback visual
                    this.style.background = '#48bb78';
                    setTimeout(() => {
                        this.style.background = '#f7fafc';
                    }, 500);
                });
            });
        }
    });
    
    // ===== MODE TOGGLE (CLARO/OSCURO) =====
    const body = document.body;
    const modeToggle = document.createElement('button');
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    modeToggle.className = 'mode-toggle';
    modeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(modeToggle);
    
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    function toggleMode() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        
        if (isDarkMode) {
            body.style.background = 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)';
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            modeToggle.style.background = 'rgba(45, 55, 72, 0.9)';
            modeToggle.style.color = '#f7fafc';
        } else {
            body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            modeToggle.style.background = 'rgba(255, 255, 255, 0.9)';
            modeToggle.style.color = '#2d3748';
        }
    }
    
    modeToggle.addEventListener('click', toggleMode);
    
    // Aplicar modo guardado al cargar
    if (isDarkMode) {
        toggleMode();
    }
    
    // ===== PROGRESS BAR =====
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #61dafb, #667eea);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // ===== MENSAJE DE BIENVENIDA =====
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.innerHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                left: 20px;
                background: rgba(97, 218, 251, 0.9);
                color: white;
                padding: 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: slideIn 0.5s ease;
            ">
                <i class="fas fa-info-circle"></i>
                ¡Bienvenido a la Clase 1 de React!
            </div>
        `;
        document.body.appendChild(welcomeMsg);
        
        setTimeout(() => {
            welcomeMsg.remove();
        }, 5000);
    }, 2000);
    
    // ===== CONSOLE LOGS EDUCATIVOS =====
    console.log('%c🚀 React JS - Clase 1', 'color: #61dafb; font-size: 20px; font-weight: bold;');
    console.log('%c¡Bienvenido al curso de React!', 'color: #667eea; font-size: 14px;');
    console.log('%cEste es un ejemplo de cómo se ve el contenido en la consola del navegador.', 'color: #718096; font-size: 12px;');
});

// ===== ANIMACIONES CSS ADICIONALES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .mode-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    .step:hover {
        background: #edf2f7 !important;
        transform: translateX(5px);
    }
    
    .feature:hover {
        background: rgba(97, 218, 251, 0.2) !important;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

