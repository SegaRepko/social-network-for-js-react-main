import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from "./redux/app-reducer";
import Preloader from './components/common/Preloader/Preloader';
import React from 'react';
import { Suspense } from 'react';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return < Preloader />
    }

    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            {/* <Suspense fallback={<Preloader />}> */}
              <Route path="dialogs/*" element={<DialogsContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile' element={<ProfileContainer />} />
            {/* </Suspense> */}
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
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp }))(App);



