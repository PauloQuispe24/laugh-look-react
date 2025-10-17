# 🤣 Random Joke & Image Generator App

¡Una aplicación web moderna y divertida que te ofrece **chistes aleatorios** y encuentra una **imagen relacionada** basada en la palabra más larga del chiste!  

## ✨ Características Principales

- **🃏 Chistes Dinámicos:** Consume una API externa (Joke API) para obtener un chiste aleatorio al instante.  
- **🖼️ Imágenes Contextuales:** Utiliza un algoritmo que identifica la palabra más larga del chiste y la usa como palabra clave para buscar una imagen relevante y de alta calidad mediante la API de **Pexels**.  
- **⚙️ Manejo de Carga y Errores:** Interfaz robusta con estados de carga (`isLoading`) y manejo explícito de errores.  
- **🚀 Despliegue y SEO:** Desplegado en **Vercel**, con configuración de SEO básica optimizada.

## 🛠️ Tecnología

| Categoría             | Herramientas                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| **Frontend**          | React (Vite)                                                             |
| **Tipado**            | TypeScript *(implementación completa en servicios, hooks y componentes)* |
| **Gestión de Estado** | `useState`, `useCallback`                                                |
| **Lógica Asíncrona**  | Custom Hooks con `useEffect` y `AbortController` para limpiar `fetch`    |
| **APIs Externas**     | API de Chistes (Joke API) y API de Pexels                                |
| **Despliegue**        | Vercel                                                                   |

## 🚀 Estructura del Proyecto

La estructura sigue un patrón de **separación de responsabilidades (Service, Logic, Hooks)** para mantener el código desacoplado, limpio y altamente testeable.

| Carpeta          | Responsabilidad                                                               | Tipado Destacado                               |
| ---------------- | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| `src/services`   | Manejo de `fetch` a APIs externas.                                            | Manejo de errores con `Error` personalizado.   |
| `src/logic`      | Funciones puras (ej. `mappedJokeData`, `calculateLongestWord`).               | Tipado estricto de entrada/salida de datos.    |
| `src/hooks`      | Lógica central del estado.                                                    | Uso de **`MappedType`** para reutilizar tipos. |
| `src/types`      | Definición de interfaces de la API y de la app (`MappedJoke`, `MappedImage`). | Definición de tipos de la aplicación           |
| `src/components` | Componentes de presentación (ej. `RandomJoke.tsx`).                           | Tipado de Props con interfaces dedicadas.      |

## 💻 Instalación y Uso

Sigue estos pasos para configurar el proyecto localmente.

### 🔧 Prerrequisitos
- **Node.js** (versión 18+)
- Una cuenta en **Pexels** para obtener tu clave API.

### 📦 Pasos

#### 1. Clonar el Repositorio
```bash
git clone https://github.com/PauloQuispe24/laugh-look-react.git
cd laugh-look-react
```

#### 2. Instalar Dependencias
```bash
npm install
```

#### 3. Configurar Variables de Entorno
Crea un archivo llamado .env en la raíz del proyecto y añade tus claves API:

```bash
# URL de la API de chistes
VITE_JOKE_API_URL=https://v2.jokeapi.dev/joke/Any?type=single

# URL de la API de imágenes
VITE_IMAGE_API_URL=https://api.pexels.com/v1/search

# Clave de API de Pexels para la búsqueda de imágenes
VITE_PEXELS_API_KEY="TU_CLAVE_DE_PEXELS"
```

#### 4. Ejecutar la Aplicación
```bash
npm run dev
```
La aplicación se iniciará en:
👉 http://localhost:5173 (o el puerto indicado por Vite).

### 📄 Licencia
Este proyecto está bajo la Licencia MIT.
