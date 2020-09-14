import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
