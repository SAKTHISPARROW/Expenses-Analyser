import React,{useState} from 'react';
import styled from 'styled-components';
import bg from './img/bg.png';
import { MainLayout } from './styles/layout';
import Navigation from './components/navigation/navigation';
import Dashboard from './components/dashboard/dashboard';
import Income from './components/income/income';
import Expenses from './components/expense/expense';
import {useGlobalContext} from './context/globalcontext';
import { useMemo } from "react";
function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

  const AppStyled=styled.div`
  height:100vh;
  background-image: url(${props=>props.bg});
  position: relative;
`;

export default App;
