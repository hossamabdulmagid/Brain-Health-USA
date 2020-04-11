import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom';
import Appointments from './component/Appointments/Appointments.component'
import Bills from './component/Bills/Bills.component'
import Documents from './component/Documents/Documents.component'
import SignIn from './component/Sign-in/sign-in.component'
import Footer from './component/footer/footer.component'
import HomePage from './page/homepage/homepage.component'
const App = () => {
  return (

    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/Appointments' component={Appointments} />
        <Route path='/documents' component={Documents} />
        <Route path='/bills' component={Bills} />
        <Route path='/signin' component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
