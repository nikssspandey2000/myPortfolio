import React from 'react';
import { Footer, Header } from './pages';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 h-auto">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default App;
