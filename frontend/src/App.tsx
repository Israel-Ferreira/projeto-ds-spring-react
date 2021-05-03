import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React, { Fragment } from 'react';



function App() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo</h1>
        <DataTable />
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;
