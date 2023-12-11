import { render } from 'preact';
import App from "./App";

import "./scss/app.scss";


render(
  <App />,
  document.body,
  document.querySelector('#app')
);
