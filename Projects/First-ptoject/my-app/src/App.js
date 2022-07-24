import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';


const App = (props) => {


  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div class='app-wrapper-content'>
        <Routes>
          <Route path="dialogs/*" element={<DialogsContainer />} />
          <Route path='/profile/:userId'element={<ProfileContainer />} />
          <Route path='/profile'element={<ProfileContainer />} />
          <Route path="users/" element={<UsersContainer />} />
          <Route path="login/" element={<LoginPage />} />
          <Route path="music/" element={<Music />} />
          <Route path="news/" element={<News />} />
          <Route path="settings/" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



