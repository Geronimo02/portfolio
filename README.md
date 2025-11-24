# Portfolio Geronimo Serratti

Portfolio profesional de desarrollador web y especialista en automatizaciones.

## 🚀 Características Implementadas

### ✅ SEO y Metadatos
- Meta tags completos (description, keywords, author)
- Open Graph tags para redes sociales
- Twitter Card tags
- Favicon configurado

### ✅ Sidebar Mejorado
- Botón de descarga de CV
- Enlace a GitHub
- LinkedIn actualizado
- Información de contacto completa

### ✅ Nuevas Secciones
1. **Sobre Mí**: Texto profesional y orientado a resultados
2. **Servicios**: 4 cards con servicios principales
   - Desarrollo Web
   - Automatización de Procesos
   - Integraciones API
   - Marketing Automation
3. **Resultados y Logros**: Métricas con contadores animados
4. **Certificaciones**: Grid de certificados y cursos
5. **Formulario de Contacto**: Form funcional con validación
6. **Footer**: Links, redes sociales y copyright

### ✅ Funcionalidades JavaScript
- **Animaciones al scroll**: Fade-in progresivo de secciones y cards
- **Contadores animados**: Números que cuentan hasta el valor final
- **Formulario de contacto**: Validación y mensajes de estado
- **Modo oscuro/claro**: Toggle con persistencia en localStorage
- **Smooth scroll**: Navegación suave entre secciones
- **Efectos hover**: Interacciones visuales mejoradas

### ✅ Diseño Responsive
- Mobile-first approach
- Breakpoints en 768px y 480px
- Grid adaptativo para todas las secciones
- Footer responsive con cambio de layout

### ✅ Accesibilidad
- ARIA labels en elementos interactivos
- Alt texts descriptivos
- Contraste adecuado de colores
- Navegación por teclado
- Roles ARIA en formulario

## 📁 Estructura de Archivos

```
portfolio/
├── index.html              # HTML principal con todas las secciones
├── README.md              # Este archivo
├── app/
│   ├── css/
│   │   └── styles.css     # Estilos completos + modo oscuro
│   ├── js/
│   │   └── script.js      # Animaciones + formulario + tema
│   ├── img/
│   │   ├── IMG_6462.jpg   # Foto de perfil
│   │   ├── favicon.ico    # [CREAR] Favicon del sitio
│   │   └── apple-touch-icon.png  # [CREAR] Icono iOS
│   └── files/
│       └── CV_Geronimo_Serratti.pdf  # [AGREGAR] Tu CV en PDF
```

## 🔧 Archivos Pendientes

### 1. Favicon (favicon.ico)
Crea un favicon de 32x32px o 64x64px con tus iniciales o logo.

**Opciones:**
- Usar https://favicon.io/
- Crear con Photoshop/GIMP
- Convertir logo existente

### 2. Apple Touch Icon (apple-touch-icon.png)
Imagen de 180x180px para dispositivos iOS.

### 3. CV en PDF
Guarda tu CV como `CV_Geronimo_Serratti.pdf` en `app/files/`

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary: #2A9D8F;    /* Color principal */
    --dark: #264653;        /* Textos oscuros */
    --light: #f8f9fa;       /* Fondo claro */
}
```

### Formulario de Contacto
Actualmente simula el envío. Para conectarlo:

1. **EmailJS** (recomendado):
```javascript
emailjs.send("service_id", "template_id", formData)
```

2. **Backend propio**:
```javascript
fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData)
})
```

3. **Formspree**:
```html
<form action="https://formspree.io/f/tu-id" method="POST">
```

### Certificaciones
Actualiza las certificaciones en `index.html` con tus propias credenciales.

### Proyectos
Los proyectos ya tienen logos circulares. Para personalizarlos:
- Cambia los íconos FontAwesome
- Ajusta colores del gradient en `.logo-circle`

## 🚀 Deployment

### GitHub Pages
```bash
git add .
git commit -m "Portfolio completo"
git push origin main
```
Activa GitHub Pages en Settings → Pages

### Netlify
Arrastra la carpeta al panel de Netlify o conecta el repo de GitHub.

### Vercel
```bash
vercel --prod
```

## 📱 Próximos Pasos Opcionales

1. **Analytics**: Agregar Google Analytics o Plausible
2. **Testimonios**: Sección con reseñas de clientes
3. **Blog**: Integrar posts técnicos
4. **Optimización**: Lazy loading de imágenes
5. **PWA**: Service worker para modo offline
6. **Multi-idioma**: Versión en inglés

## 📞 Soporte

Si necesitas ayuda con:
- Integración del formulario
- Optimización SEO
- Deployment
- Personalización avanzada

¡Contáctame!

---

**Última actualización**: Noviembre 2025
**Versión**: 2.0 - Portfolio Profesional Completo
