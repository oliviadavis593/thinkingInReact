import React, { Component } from 'react';

class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input 
            type="radio" 
            value="All" 
            id="filter_all" 
            name="filter" 
            checked={filterOption ==="All"} 
            onChange={e => this.props.handleFilterChange(e.target.value)}/>
          All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input 
            type="radio" 
            value="Uploaded" 
            id="filter_uploaded" 
            name="filter" 
            checked={filterOption ==="Uploaded"} 
            onChange={e => this.props.handleFilterChange(e.target.value)}/>
          Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_synced">
            <input 
            type="radio" 
            value="Synced" 
            id="filter_synced" 
            name="filter" 
            checked={filterOption ==="Synced"} 
            onChange={e => this.props.handleFilterChange(e.target.value)}/>
          Synced
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_new">
            <input 
            type="radio" 
            value="New" 
            id="filter_new" 
            name="filter" 
            checked={filterOption ==="New"} 
            onChange={e => this.props.handleFilterChange(e.target.value)}/>
          New
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;

/*=========== Building static app (#5)===========*/
//We've added some radio buttons 
//FilterOptions.js ===> FilterableList.js 

/*=========== Adding State (#5)===========*/
//We have a number of radio buttons & the one to be selected is determined by the value of filterOption in the state
//Passed to this component as a prop 
//To specify whether a radio button is checked or not = use the checked attribute of the radio button

//Overview: 
//State is now initialized & owned by the right component at the right level in the hierachy (App component)
//These values are passed down the hiearchy via props to the component that needs them 
//The interface is not interactive yet = you can't change searchTerm nor filterOption 
//To be able to do this we need to write some event handlers
//Interactivity starts at App.js 

/*=========== Interactivity (#3)===========*/
//Update the filterOption:
//Finally we'll add the event handler to the radio buttons 
