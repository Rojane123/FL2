# Sabor Salvadoreño - Un Sabor Auténtico de El Salvador

Una plataforma web interactiva que destaca la cocina tradicional salvadoreña con recetas auténticas, historias culturales y herramientas fáciles de usar.

## 🚀 Características

- **3 Recetas Tradicionales**: Pupusas, Tamales Salvadoreños, y Yuca Frita
- **Interfaz Completamente en Español**
- **Diseño Responsivo** para todos los dispositivos
- **Animaciones Suaves** y efectos visuales profesionales
- **Sistema de Calificaciones** con localStorage
- **Calculadora de Porciones** dinámica
- **Función de Impresión** para generar PDFs
- **Compartir en Redes Sociales**
- **Información Cultural** sobre la cocina salvadoreña

## 📁 Estructura del Proyecto

```
rojane/
├── index.html              # Página principal
├── css/
│   ├── styles.css          # Estilos principales
│   └── print.css           # Estilos de impresión
├── js/
│   ├── main.js             # Lógica principal de la aplicación
│   └── calculator.js       # Calculadora de porciones
├── data/
│   └── recipes.js          # Datos de recetas y información cultural
├── images/
│   ├── pupusas.jpg         # Imagen de pupusas
│   ├── tamales.png         # Imagen de tamales
│   └── yuca-frita.jpg      # Imagen de yuca frita
├── server.py               # Servidor local Python
└── README.md               # Este archivo
```

## 🛠️ Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/sabor-salvadoreno.git
cd sabor-salvadoreno
```

### 2. Agregar Imágenes

Coloca las siguientes imágenes en la carpeta `images/`:
- `pupusas.jpg` - Imagen de pupusas
- `tamales.png` - Imagen de tamales  
- `yuca-frita.jpg` - Imagen de yuca frita

### 3. Ejecutar el Servidor Local

#### Opción A: Servidor Python
```bash
python server.py
```

#### Opción B: Servidor HTTP Simple
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 4. Abrir en el Navegador

Visita `http://localhost:8000` en tu navegador web.

## 🎨 Características Técnicas

### Frontend
- **HTML5** semántico
- **CSS3** con Flexbox/Grid
- **JavaScript Vanilla** (sin frameworks)
- **Google Fonts** (Playfair Display + Open Sans)
- **Animaciones CSS** suaves y profesionales

### Funcionalidades
- **localStorage** para persistencia de datos
- **Responsive Design** mobile-first
- **Print-friendly** con generación de PDF
- **Accesibilidad** mejorada
- **SEO optimizado**

### Animaciones Incluidas
- Entrada de elementos con `fadeInUp`, `slideInLeft`, `slideInRight`
- Efectos hover con transformaciones 3D
- Animaciones de logo con rotación y shimmer
- Transiciones suaves con cubic-bezier
- Efectos de pulso en botones CTA

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS/Android)

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
  --primary-color: #1e3c72;
  --secondary-color: #2a5298;
  --accent-color: #ff6b6b;
}
```

### Agregar Nuevas Recetas
1. Edita `data/recipes.js`
2. Agrega la imagen correspondiente en `images/`
3. Sigue la estructura existente de datos

### Modificar Animaciones
Las animaciones están definidas en `css/styles.css` usando `@keyframes`.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: info@saborsalvadoreno.com
- **Ubicación**: San Salvador, El Salvador 🇸🇻

## 🙏 Agradecimientos

- Comunidad salvadoreña por preservar estas tradiciones culinarias
- Familias que han transmitido estas recetas de generación en generación
- Cultura gastronómica de El Salvador

---

**Hecho con ❤️ para la comunidad salvadoreña mundial**