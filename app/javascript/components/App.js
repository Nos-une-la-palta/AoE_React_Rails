import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import HomeContainer from './../containers/HomeContainer';
import NewsContainer from './../containers/NewsContainer';
import TwitchContainer from './../containers/TwitchContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  renderHome = () => <HomeContainer/>;
  renderNews = () => <NewsContainer/>;
  renderTwitch = () => <TwitchContainer/>;

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/news" component={this.renderNews}/>
          <Route exact path="/twitch" component={this.renderTwitch}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
