import React from 'react';

import Head from '../shared/components/head';
import Navbar from '../shared/components/navbar/navbar';
import Footer from '../shared/components/footer';

const FrenteWeb = () => (
  <React.Fragment>
    <Head
      title="Ganesh - News"
      description='Extracurricular group focused on information security.'
    />
    <Navbar />
    <main>
      <h1>Seila</h1>
    </main>
    <Footer />
  </React.Fragment>
);

export default FrenteWeb;
