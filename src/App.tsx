import { ReactElement, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navigation } from './components'
import {All, changeTheme, Component, Loading} from './components/styles';
import { ThemeProvider } from 'styled-components';
import { useGlobal } from './hooks/useGlobal';

function App() {
  const {theme} = useGlobal()
  //const loadRef = useRef<ReactElement>()
  return (
    <ThemeProvider theme={changeTheme[theme]}>
    <All>
    <Navigation/>
    <Component>
      <Loading></Loading>
      <Outlet/>
    </Component>
    </All>
    </ThemeProvider>
  );
}

export default App;
