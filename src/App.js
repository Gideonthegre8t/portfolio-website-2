import React from 'react';
import Header from './components/Header';
import Article from './components/Article';
import Section from './components/Section';
import Save from '../src/components/Save';
import Regulation from './components/Regulation';
import Reviews from './components/Reviews';
import Community from './components/Community';
import Join from "./components/JoinInvesting";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='app wrapper'>
     <Header />
     <Article />
     <Section />
     <Save />
     <Regulation />
     <Reviews />
     <Community />
     <Join />
     <Footer />
    </div>
  );
}

export default App;
