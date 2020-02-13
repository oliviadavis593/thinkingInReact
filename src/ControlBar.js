import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faTrashAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

class ControlBar extends Component {
    render() {
      return (
        <div className="ControlBar">
          <div className="ControlBar__btn"><FontAwesomeIcon icon={faRedoAlt}/></div>
          <div className="ControlBar__btn"><FontAwesomeIcon icon={faTrashAlt}/></div>
          <div className="ControlBar__btn"><FontAwesomeIcon icon={faCloudDownloadAlt}/></div>
        </div>
      );
    }
  }
  
  export default ControlBar;

  /*=========== Building static app (#8)===========*/
  //The final component is simply responsible for the three button bars on each filed displayed on a ListItem