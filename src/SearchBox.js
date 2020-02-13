import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input
          placeholder="Search term"
          value={this.props.searchTerm}
          onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>   
    );
  }
}

export default SearchBox;

/*=========== Building static app (#4)===========*/
//We used the imported 3rd party library used to display SVG icons 
//SearchBox.js ===> FilterOptions.js 

/*=========== Adding State (#4)===========*/
//searchTerm should be set in the input to be displayed 
//To do this: we set the value attrivute on the input to the searchTerm prop
//This is anoter part in which you can test that it works by changing state inside App.js
//SearchBox.js ===> FilterOptions.js 

/*=============================*/

/*=========== Interactivity (#3)===========*/
//Update the searchTerm:
//We'll add an onChange event handler to the input & invoke the callback function whenever the content of the input changes 