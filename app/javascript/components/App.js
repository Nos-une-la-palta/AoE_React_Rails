import React, {Component} from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import NewsContainer from './containers/NewsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom'
import TwitchContainer from './containers/TwitchContainer';

class App extends Component {

  renderHome = () => <HomeContainer/>;
  renderNews = () => <NewsContainer/>;
  renderTwitch = () => <TwitchContainer/>;

  render(){
    return (
        <BrowserRouter>
            <div>
            <Route exact path="/" component={this.renderHome}/>
            <Route exact path="/twitch" component={this.renderTwitch}/>
            <Route exact path="/news" component={this.renderNews}/>
                <Switch>
                    <Route path="/news/:slug" component={NewCustomerContainer} />
  	  	        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
