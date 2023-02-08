import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login/Login';
import GabungPf from './Profile/GabungPf';
import GabungFl from './Profile/Gabungfl';
import GabungFlwing from './Profile/GabungFlwing';
import GabungSetting from './Setting/GabungSetting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Home' element={<App />}/>
  <Route path='/Profile' element={<GabungPf/>}/>
  <Route path='/Profile/Followers' element={<GabungFl/>}/>
  <Route path='/Profile/Following' element={<GabungFlwing/>}/>
  <Route path='/Setting' element={<GabungSetting />}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
