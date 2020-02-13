import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FilterOptions from './FilterOptions';

class SearchBar extends Component {
    render() {
        return(
            <div className='SearchBar'>
                <div className='SearchBar__heading'>
                    <h1>File Uploader</h1>
                </div>
                <div className='SearchBar__controls'>
                    <SearchBox 
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate}
                    />
                    <FilterOptions 
                    filterOptions={this.props.filterOption}
                    handleFilterChange={this.props.handleFilterChange}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBar; 

/*=========== Building static app (#3)===========*/
//We places all files related to SearchBar in this folder
// SearchBar.js ===> SearchBox.js 

/*=========== Adding State (#3)===========*/
//2nd component that is getting searchTerm & filterOptions as props 
//SearchBar is not using these props directly - rather passing them along to respective child components
//searchTerm is needed in the SearchBox 
//filterOption is needed in the FilterOptions components respectively 
//Simply passed along the props in SearchBar
//SearchBar.js ===> SearchBox.js 

/*=============================*/

/*=========== Interactivity (#2)===========*/
//Update the searchTerm:
//In the SearchBar comp we aren't directly using this function 
//So we're just passing it along to the SearchBox component instance 
//SearchBar.js ===> SearchBox.js 

/*=========== Interactivity (#2)===========*/
//Update the filterOption:
//We'll pass the callback alon got the FilterOptions component instance 
//SearchBar.js ===> FilterOptions.js