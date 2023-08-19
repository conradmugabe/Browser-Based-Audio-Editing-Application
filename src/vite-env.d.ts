/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_MOCKING?: string;
  readonly VITE_HTTP_TEST_SERVICE_URL: string;
  readonly VITE_TEST_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
