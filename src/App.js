

import { useEffect, useState } from 'react';
import './App.scss';
import {
  Switch,
  Route,
} from "react-router-dom";
import data from './data.json';

import Loginpage from "./views/Loginpage";
import Dashboard from './views/Dashboard';
import { useLocal } from './utils/utilty';
function Page404() {
  return <div className="container text-center mt-5"><h2>Page Not Found</h2></div>
}

function App() {

  const [appData, setAppData] = useState(null);
  useEffect(() => {
    useLocal.save('appData', data);
    setAppData(useLocal.get('appData'));
  }, [])

  return (
    <Switch>
      <Route path='/' render={() => <Loginpage appData={appData} />} exact />
      <Route path='/dashboard/:boxName' render={() => appData && <Dashboard appData={appData} />} exact />
      <Route component={Page404} />
    </Switch>
  );
}

export default App;
