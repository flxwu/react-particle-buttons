import anime from 'animejs';
import * as React from 'react';
import './App.css';
import Particles from './particles';

interface App {
  btnRef: React.RefObject<any>;
}

interface State {
  particles: any;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.btnRef = React.createRef();
    this.state = { particles: null };

    this.onClick = this.onClick.bind(this);
  }

  public componentDidMount() {
    const particlesOpts = {
      easing: 'easeOutQuart',
      oscillationCoefficient: 2,
      particlesAmountCoefficient: 4,
      size: 6,
      type: 'triangle',
      color() {
        return Math.random() < 0.5 ? '#35538D' : '#FC9F79';
      }
    };
    const particles = new Particles(anime, this.btnRef.current, particlesOpts);
    this.setState({ particles });
  }

  public onClick() {
    this.state.particles.disintegrate();
  }

  public render() {
    return (
      <main className="demo-1">
        <div className="grid__item theme-1">
          <button
            className="particles-button"
            ref={this.btnRef}
            onClick={this.onClick}>
            Send
          </button>
        </div>
      </main>
    );
  }
}

export default App;
