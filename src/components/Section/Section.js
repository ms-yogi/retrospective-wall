import React, { Component } from 'react';
import styles from './Section.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
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
    }

    deleteHandler = () => {
        this.setState({
            card: []
        })
        this.array = [];
    }

    cardDeleteHandler = (i) => {
        let tempCard = this.state.card.filter(element => {
            if( element !== i ) {
                return element
            }
        })

        this.setState({
            card: tempCard
        })
    }
    
    render() {
        return (
            <div className={styles.section}>
                <h3>{this.props.sectionName}
                    <FontAwesomeIcon 
                        icon={faPlusCircle} 
                        className={styles.icon}
                        style={{color: '#5fc569'}}
                        onClick={this.addCardHandler}/>

                    <FontAwesomeIcon 
                        icon={faTrash} 
                        className={styles.icon}
                        style={{color: '#F02F4C'}}
                        onClick={this.deleteHandler}/>
                </h3>

                <div className={styles.cardContainer}>
                    {this.state.card.map(item => {
                        return (
                            <SectionCard key={item} onDelete={() => this.cardDeleteHandler(item)}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Section;

