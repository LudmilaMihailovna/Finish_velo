// simport React, {useState} from 'react';
import {Header} from "./components/header/header";
import {Layout} from "./components/layout/layout";
import {Footer} from "./components/footer/footer";
import {Board} from "./components/board/board";
import {Theft} from "./components/header/button/theft/theft";

function App() {
   
  return (
    <Layout>
      <Header>
        <Theft/>
      </Header>
        

      <main>
        <Board/>
      </main>
      <Footer/>
    </Layout>
  );
}

export default App;
