import React, { Component } from 'react';
import styles from './Section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import SectionCard from '../SectionCard/SectionCard';

class Section extends Component {
    state = {
        card: []
    }
    
    addCardHandler = () => {
        this.setState({
            card: <SectionCard />
        })
    }
    
    render() {
        return (
            <div className={styles.section}>
                <h3>{this.props.sectionName}
                    <FontAwesomeIcon 
                        icon={faPlusCircle} 
                        className={styles.plus}
                        onClick={this.addCardHandler}/>
                </h3>

                {this.state.card}
            </div>
        )
    }
}

export default Section;

