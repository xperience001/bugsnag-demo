import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

Bugsnag.start({
  apiKey: 'b29b5653b31840058c490776d3f9ad5f',
  plugins: [new BugsnagPluginReact()]
})

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)

  Bugsnag.notify(new Error('Test error'))

  const ErrorView = () =>
  <div>
    <p>Inform users of an error in the component tree.</p>
  </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary FallbackComponent={ErrorView}>
    <App />
  </ErrorBoundary>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
