# 🤣 Random Joke & Image Generator

Una aplicación moderna que obtiene un chiste, analiza la palabra más larga y busca una imagen coherente en **Pexels**.

## ✨ Características Principales

- **🃏 Lógica de Chistes:** Consumo de Joke API con tipado estricto.
- **🖼️ Algoritmo de Imagen:** Identifica la palabra con mayor peso semántico (longitud) para consultar la API de Pexels.
- **🐳 Dockerizado:** Configuración lista para desarrollo y producción con **Multi-stage builds**.
- **🛠️ DX (Developer Experience):** Configuración de **DevContainer** para VS Code, garantizando un entorno idéntico para todos los desarrolladores.
- **⚡ Rendimiento:** Optimizado con **pnpm** y servido en producción mediante **Nginx**.

## 🛠️ Stack Tecnológico

| Categoría             | Herramientas                              |
| --------------------- | ----------------------------------------- |
| Frontend              | React (Vite) + TypeScript                 |
| Gestión de Paquetes   | pnpm                                      |
| Infraestructura       | Docker, Docker Compose, Nginx             |
| Despliegue            | Vercel (Frontend) / Docker (Contenedores) |
| Entorno de Desarrollo | VS Code DevContainers                     |

## 🚀 Configuración y Uso

### 🔧 Prerrequisitos

- **Docker** y **Docker Compose**
- Clave API de **Pexels**

### 📥 1. Clonar y Configurar

```bash
git clone https://github.com/PauloQuispe24/laugh-look-react.git
cd laugh-look-react
```

Crea un archivo llamado .env en la raíz del proyecto y añade tus claves API:

```
# URL de la API de chistes
VITE_JOKE_API_URL=https://v2.jokeapi.dev/joke/Any?type=single

# URL de la API de imágenes
VITE_IMAGE_API_URL=https://api.pexels.com/v1/search

# Clave de API de Pexels para la búsqueda de imágenes
VITE_PEXELS_API_KEY="TU_CLAVE_DE_PEXELS"
```

### 🐳 2. Ejecución con Docker (Recomendado)

El proyecto utiliza **perfiles de Docker Compose** para separar entornos:

#### 🔹 Modo Desarrollo (Hot Reload)

`docker compose --profile dev up`

👉 Accede a: `http://localhost:5173`

#### 🔹 Modo Producción (Nginx Optimizado)

`docker compose --profile prod up`

👉 Accede a: `http://localhost:8080`

### 🧪 3. Desarrollo en Contenedores (DevContainer)

Si usas VS Code, abre la carpeta del proyecto y acepta la sugerencia:

> **"Reopen in Container"**

Esto instalará automáticamente:

- Extensiones de ESLint y Prettier.
- Entorno Node.js 20 con pnpm.
- Configuración de Git segura dentro del contenedor.

## 🏗️ Arquitectura de Docker

Se implementa un flujo de **Multi-stage build** para generar imágenes ligeras y seguras:

1.  **Base:** Node 20 sobre Alpine + `pnpm`.
2.  **Development:** Expone el servidor de Vite con `--host`.
3.  **Build:** Genera los archivos estáticos del proyecto.
4.  **Production:** Imagen mínima de **Nginx** para servir `dist/`, mejorando rendimiento y seguridad.

## 📂 Estructura del Proyecto

Separación de responsabilidades de alto nivel:

- `src/services` → Llamadas a APIs externas.
- `src/logic` → Funciones puras de procesamiento de datos.
- `src/hooks` → Lógica de estado y efectos (Custom Hooks).
- `src/types` → Contratos de interfaces TypeScript.
- `.devcontainer/` → Configuración del entorno de desarrollo aislado.

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**.
