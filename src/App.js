import React, { Component } from 'react';
import SearchBar from './SearchBar';
import FilterableList from './FilterableList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}/>
        <FilterableList
          files={this.props.files}  
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}/>
      </div>
    );
  }
}

export default App;


/*=========== Building static app (#2)===========*/
//App component is composed of 2 components - they are the children of App (SearchBar & FilterableList)
//We passed in the files prop to FilterableList component instance 
//App.js ===> SearchBar.js 

/*===================================*/

/*=========== Adding State (#1)===========*/
//Create a constructor & wrote and instance property named state 
//Set state to an object with the two values that we need 
//When browser loads = by default we'll display all files & there would be no SearchTerm entered in the searchBox
//We'll also pass these two values to the SearchBar & FilterableList component instances as props
//App.js ===? FilterableList.js 

/*===================================*/

/*=========== Interactivity (#1)===========*/
//Update the searchTerm:
//We have state inside the parent (App) - but we want the SearchBox to update that state 
//We created a callback function (updateSearchTerm) - and passed that to the SearchBar component instance
//App.js ===> SearchBar.js 

/*=========== Interactivity (#1)===========*/
//Update the filterOption:
//We can do something similar for filterOption that we did with searchTerm
//We'll 1st add a callback function ot update the state 
//Then we'll pass the callback prop to the SearchBar component instance 
//App.js ===> SearchBar.js 