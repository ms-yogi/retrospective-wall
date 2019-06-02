import React, { Component } from 'react';
import styles from './Section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Section extends Component {
    render() {
        return (
            <div className={styles.section}>
                <h3>{this.props.sectionName}
                    <FontAwesomeIcon icon={faPlusCircle} className={styles.plus}/>
                </h3>
            </div>
        )
    }
}

export default Section;

