import React, { Component } from 'react';
import ControlBar from './ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileImage, 
    faFileAudio, 
    faFileAlt, 
    faFileVideo,
} from '@fortawesome/free-solid-svg-icons';

class ListItem extends Component {
    render() {
        const icons  = {
            'jpg': faFileImage, 
            'mov': faFileVideo,
            'txt': faFileAlt,
            'mp3': faFileAudio
        }
        return(
            <div className='ListItem'>
                <div className='ListItem__icon'>
                    <div className='ListItem__circle'>
                        <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt} />
                    </div>
                    <div className='ListItem__content'>
                        <div className='ListItem__heading'>
                            <div className='ListItem__title'>{this.props.name}</div>
                            <div classsName='ListItem__size'>{this.props.size}</div>
                        </div>
                        <div className='ListItem__actions'>
                            <div className='ListItem__status'>
                                {this.props.status}
                            </div>
                            <ControlBar />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem; 

/*=========== Building static app (#7)===========*/
//This component takes a number of props describing a single file
//It must determine which icon to display based on the fileType prop
//A lookup list of the file  types corresponding to the icons is 1st created to make the mapping of fileType to icon faster
//ListItem.js ===> ControlBar.js 