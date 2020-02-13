import React, { Component } from 'react';
import ListItem from './ListItem';

class FilterableList extends Component {
  render() {
      const { searchTerm, filterOption } = this.props; 
    const list = this.props.files
        .filter(file => file.name.includes(searchTerm)
        && (filterOption === 'All' || file.status === filterOption))
        .map((file, key) => <ListItem {...file} key={key} />);
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};

export default FilterableList;

/*=========== Building static app (#6)===========*/
//Componenet is responsible for taking the array of files as a props named files 
//...and displaying listItem for each file in the array 
//map() = used to iterate the array & output ListItem component for each file
//FilterableList.js ===> ListItem.js 

/*=============================*/

/*=========== Adding State (#2)===========*/
//We can use these 2 values to filter the array of files displayed 
//We simply access the values from the props, iterate over the files array keeping those that match the criteria
//The file name containes the searchTerm & the file status is equal to filterOption or the filterOption is 'All'
//You can test that it works by editing the App.js and modifying the initital state & seeing if the files are changed based on state change 
//FilterableList.js ===> SearchBar.js 