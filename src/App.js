import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import RecipeForm from './recipe.component';
import RecipeItems from './recipe.item';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recipe Finder</h2>
        </div>
          {
          this.props.favourite.length!==0? <Link to="/favorites">Favourites</Link>:<div></div>
            }
          <RecipeForm/><br/>
          <RecipeItems/>
      </div>
    );
  }
}
function mapStatetoProps(state)
{
    return {
        favourite:state.favourite
    }
}
export default connect(mapStatetoProps,null)(App);
