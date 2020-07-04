import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './../containers/HomeContainer';
import NewsContainer from './../containers/NewsContainer';
import TwitchContainer from './../containers/TwitchContainer';
import Show from './../components/AppNews/show';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  renderHome = () => <HomeContainer/>;
  renderTwitch = () => <TwitchContainer/>;
  renderNews = () => <NewsContainer/>;
    renderNewsShow = () => <Show />
  

  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/twitch" component={this.renderTwitch}/>
          <Route exact path="/news" component={this.renderNews}/>
          <Switch>
  	  		    <Route path="/news/:slug" component={this.renderNewsShow} />
  	  		</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
