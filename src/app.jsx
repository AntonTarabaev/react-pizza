import './scss/style.scss';

import React from 'react';
import Header from './components/header';
import Main from './pages/main';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page-main">
        <Main />
      </main>
    </div>
  );
}

export default App;
