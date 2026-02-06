// Este arquivo é mantido apenas para compatibilidade com o ambiente de execução.
// A aplicação principal foi movida para o index.html como solicitado (HTML Puro + Tailwind).
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <div className="hidden">
      Eletro Alves Landing Page
    </div>
  );
}