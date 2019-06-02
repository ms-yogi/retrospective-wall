import React, { Component } from 'react';
import styles from './Section.module.css';

class Section extends Component {
    render() {
        return (
            <div className={styles.section}>
                <h3>{this.props.sectionName}</h3>
            </div>
        )
    }
}

export default Section;

