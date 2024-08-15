import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import './App.css';
import Chat from './Components/Chat';
import Detail from './Components/Detail';
import List from './Components/List';
import Login from './Components/Login';
import Notification from './Components/Notification';
import { auth } from './lib/firebase';

function App() {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });

    return ()=>{
      unSub();
    }
  }, []);

  return (
    <div className='bg-[url("https://wallpapercave.com/wp/C3sLgvn.png")] h-screen flex items-center justify-center'>
      <div className='w-[90%] m-auto h-[87%] bg-gray-900 rounded-xl backdrop-blur-[8px] saturate-[180%] text-white border border-gray-800 bg-transparent flex'>
        {user ? (
          <>
            <List user={user} />
            <Chat user={user} />
            <Detail user={user} />
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </div>
  );
}

export default App;
