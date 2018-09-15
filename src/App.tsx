import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <main className="demo-1">
        <div className="grid__item theme-1">
          <button className="action">
            <svg className="icon icon--rewind">
              <use href="#icon-rewind" />
            </svg>
          </button>
          <button className="particles-button">Send</button>
        </div>
      </main>
    );
  }
}

export default App;
