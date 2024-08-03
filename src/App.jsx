import './App.css';
import Chat from './Components/Chat';
import Detail from './Components/Detail';
import List from './Components/List';

function App() {
  return (
    <div className='bg-[url("https://wallpapercave.com/wp/C3sLgvn.png")] h-screen flex items-center justify-center'>
      <div className='max-w-[90%] m-auto h-[87%] bg-gray-900 rounded-xl backdrop-blur-[8px] saturate-[180%] text-white border border-gray-800 bg-transparent flex'>
        <List  />
        <Chat  />
        <Detail  />
      </div>
    </div>
  );
}

export default App;
