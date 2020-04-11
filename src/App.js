import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Appointments from './component/Appointments/Appointments.component'
import Bills from './component/Bills/Bills.component'
import Documents from './component/Documents/Documents.component'
import Header from './component/header/header.component'
import Nav from './component/nav/nav.component'
import SignIn from './component/Sign-in/sign-in.component'
import Footer from './component/footer/footer.component'
const App = () => {
  return (

    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/' component={Appointments} />
        <Route path='/documents' component={Documents} />
        <Route path='/bills' component={Bills} />
        <Route path='/signin' component={SignIn} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
