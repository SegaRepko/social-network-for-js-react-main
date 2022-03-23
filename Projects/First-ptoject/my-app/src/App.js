import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";


const App = (props) => {


  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path="dialogs/*" element={<Dialogs store={props.store} />} />
            <Route path="profile/" element={<Profile profilePage={props.state.profilePage}
                                                    dispatch={props.dispatch} />} />
            <Route path="music/" element={<Music />} />
            <Route path="news/" element={<News />} />
            <Route path="settings/" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;



