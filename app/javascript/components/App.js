import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './../containers/HomeContainer';
import NewsContainer from './../containers/NewsContainer';
import TwitchContainer from './../containers/TwitchContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsNewContainer from '../containers/NewsNewContainer';
import ClansNewContainer from '../containers/ClansNewContainer';
import TwitchNewContainer from '../containers/TwitchNewContainer';

class App extends Component {

  renderHome = () => <HomeContainer/>;
  renderTwitch = () => <TwitchContainer/>;
  renderTwitchNew = () => <TwitchNewContainer/>;
  renderNews = () => <NewsContainer/>;
  renderNewsNew = () => <NewsNewContainer/>;
    renderNewsShow = () => <Show />
  renderClansNew = () => <ClansNewContainer/>;
  

  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome}/>
          <Route exact path="/twitch" component={this.renderTwitch}/>
          <Route exact path="/news" component={this.renderNews}/>
          <Switch>
              <Route exact path="/news/new" component={this.renderNewsNew}/>
              <Route exact path="/twitch/new" component={this.renderTwitchNew}/> 
              <Route exact path="/clan/new" component={this.renderClansNew}/>  
  	  		    <Route path="/news/:slug" component={this.renderNewsShow} />
  	  		</Switch>
        </div>
      </Router>
    );
  }
}

export default App;
