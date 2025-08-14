import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './reset.css';
import App from './App.tsx';
import { worker } from './mocks/browser.ts';

if (import.meta.env.DEV) {
  worker.start({
    onUnhandledRequest: 'bypass', // mock되지 않은 요청은 통과
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
