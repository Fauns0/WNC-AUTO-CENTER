import React from 'react';
import Header from './components/Header';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import Servico from './components/Servico';
import ScheduleCallToAction from './components/ScheduleCallToAction';
import WorkingHours from './components/WorkingHours';
import Contato from './components/Contato';
import Mecanicos from './components/Mecanicos';
import Footer from './components/Footer';
import './CSS/App.css';

function App() {
  return (
    <div>
      <Header />
      <br/> <br/> <br/> <br/>
      <About />
      <br/> <br/> <br/> <br/>
      <WhyChooseUs />
      <br/> <br/> <br/> <br/>
      <Location />
      <Servico />
      <ScheduleCallToAction />
      <WorkingHours />
      <Contato />
      <Mecanicos />
      <Footer />
    </div>
  );
}

export default App;
