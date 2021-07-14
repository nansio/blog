import logo from './logo.svg';
import LoginBtn from './components/LoginBtn'
import Warning from './components/Warning'
import ControlledForm from './components/form'
import Calculator from './components/Calculator'
import './App.css';
import React, { Suspense } from 'react'
import { ThemeContext, themes, TimeContext } from './components/context';
import DemoConsumer from './components/context/demo-consumer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import BuggyCounter from './components/ErrorBoundary/BuggyCounter';
import MultiFragments from './components/Fragments/index'

const LazyCompo = React.lazy(() => import('./components/LazyCompo'))


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Ariel',
      now: new Date(),
      theme: themes.dark,
      toggleTheme: this.toggleTheme
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark
        ? themes.light
        : themes.dark
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div className="demo">
          <LoginBtn />
          <Warning />
          <ControlledForm />
          <Calculator />
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCompo />
          </Suspense>
          <ThemeContext.Provider value={this.state}>
            <TimeContext.Provider value={this.state}>
              <DemoConsumer />
            </TimeContext.Provider>
          </ThemeContext.Provider>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <MultiFragments />
        </div>

      </div>
    );
  }
}

export default App;
