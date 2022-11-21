import { useEffect, useState } from 'react';
import AppRouter from "components/Router";
import {authService} from "fbase";
import "components/App.css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  useEffect(() => {

    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },
  [])

  return (
    <>
      {init ? 
        <AppRouter isLoggedIn={isLoggedIn} />
         : 
         'initializing...'
      }
      
    </>
  );
}

export default App;
