import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {


  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path="dialogs/*" element={<DialogsContainer />} />
            <Route path="profile/" element={<Profile />} />
            <Route path="users/" element={<UsersContainer />}/>
            <Route path="music/" element={<Music />} />
            <Route path="news/" element={<News />} />
            <Route path="settings/" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;



