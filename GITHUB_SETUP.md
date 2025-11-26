# 📋 Guía Completa para Subir a GitHub

## 🚀 Pasos para Crear el Repositorio en GitHub

### 1. Preparar el Proyecto Localmente

```bash
# Navegar a la carpeta del proyecto
cd c:\NTF\rojane

# Inicializar repositorio Git
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Sabor Salvadoreño website"
```

### 2. Crear Repositorio en GitHub

1. Ve a [GitHub.com](https://github.com)
2. Haz clic en el botón **"New"** (verde)
3. Configura el repositorio:
   - **Repository name**: `sabor-salvadoreno`
   - **Description**: `Una plataforma web interactiva de cocina tradicional salvadoreña`
   - **Visibility**: Public ✅
   - **NO** marques "Add a README file" (ya tenemos uno)
   - **NO** marques "Add .gitignore"
   - **NO** marques "Choose a license"

4. Haz clic en **"Create repository"**

### 3. Conectar Repositorio Local con GitHub

```bash
# Agregar el repositorio remoto
git remote add origin https://github.com/Rojane123/FL2.git

# Cambiar a la rama main
git branch -M main

# Subir el código a GitHub
git push -u origin main
```

### 4. Verificar la Subida

1. Actualiza la página de tu repositorio en GitHub
2. Deberías ver todos los archivos:
   - `index.html`
   - `css/` (styles.css, print.css)
   - `js/` (main.js, calculator.js)
   - `data/` (recipes.js)
   - `images/` (pupusas.jpg, tamales.png, yuca-frita.jpg)
   - `server.py`
   - `README.md`

## 🌐 Habilitar GitHub Pages

### Opción 1: Desde la Configuración del Repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (pestaña superior)
3. Scroll hacia abajo hasta **"Pages"** (menú lateral izquierdo)
4. En **"Source"** selecciona **"Deploy from a branch"**
5. En **"Branch"** selecciona **"main"**
6. En **"Folder"** selecciona **"/ (root)"**
7. Haz clic en **"Save"**

### Opción 2: Usando GitHub Actions (Recomendado)

1. Crea el archivo `.github/workflows/deploy.yml`:

```bash
# Crear la carpeta
mkdir .github
mkdir .github\workflows
```

2. Crear el archivo de workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

3. Commit y push:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

## 📝 Comandos Git Útiles

### Actualizar el Repositorio

```bash
# Agregar cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "Descripción de los cambios"

# Subir cambios
git push origin main
```

### Verificar Estado

```bash
# Ver estado de archivos
git status

# Ver historial de commits
git log --oneline

# Ver archivos modificados
git diff
```

### Crear .gitignore (Opcional)

```bash
# Crear archivo .gitignore
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
echo "*.log" >> .gitignore
echo "Thumbs.db" >> .gitignore
```

## 🔗 URLs del Proyecto

Después de configurar GitHub Pages, tu sitio estará disponible en:

- **Repositorio**: `https://github.com/Rojane123/FL2`
- **Sitio Web**: `https://rojane123.github.io/FL2`

## 🛠️ Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Rojane123/FL2.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### Archivos no se suben
```bash
# Verificar que los archivos estén agregados
git status

# Agregar archivos específicos
git add archivo-especifico.html

# O agregar todos
git add .
```

## 📋 Checklist Final

- [ ] Repositorio creado en GitHub
- [ ] Código subido correctamente
- [ ] README.md visible en GitHub
- [ ] Imágenes subidas en carpeta `images/`
- [ ] GitHub Pages configurado
- [ ] Sitio web accesible públicamente
- [ ] Todas las funcionalidades funcionando online

## 🎉 ¡Listo!

Tu sitio web **Sabor Salvadoreño** ahora está disponible públicamente en GitHub y GitHub Pages. Puedes compartir la URL con cualquier persona para que disfrute de las recetas tradicionales salvadoreñas.

---

**¿Necesitas ayuda?** Revisa la [documentación oficial de GitHub](https://docs.github.com/es) o contacta al desarrollador.