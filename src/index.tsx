import React from 'react';
import ReactDOM from 'react-dom/client';
import "@vkontakte/vkui/dist/vkui.css";
import './index.css';
import App from './App';
import {AdaptivityProvider, ConfigProvider, WebviewType} from "@vkontakte/vkui";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider webviewType={WebviewType.INTERNAL}>
      <AdaptivityProvider>
        <App/>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
