interface ImportMetaEnv {
  readonly VITE_JOKE_API_URL: string;
  readonly VITE_IMAGE_API_URL: string;
  readonly VITE_IMAGE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css" {
  const content: any;
  export default content;
}
