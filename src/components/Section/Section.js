import React, { Component } from 'react';
import styles from './Section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import SectionCard from '../SectionCard/SectionCard';

class Section extends Component {
    state = {
        card: [],
        // cardNumber: 0
    }
    
    count = 0;
    array = [];
    addCardHandler = () => {
        this.count++;
        this.array.push(this.count);
        this.setState({
            card: this.array
        })
        console.log(this.count);
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

                <div style={{overflowY: 'scroll', height: '18rem', padding: '0 1rem'}}>
                    {this.state.card.map(item => {
                        return (
                            <SectionCard key={item}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Section;

