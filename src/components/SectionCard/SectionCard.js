import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './SectionCard.module.css'

class SectionCard extends Component {
    state = {
        isDisabled : true
    }

    editHandler = () => {
        this.setState({
            isDisabled : false
        })
    }

    blurHandler = () => {
        this.setState({
            isDisabled : true
        })
    }

    render() {
        return (
            <div className={["card", styles.card].join(' ')}>
                <FontAwesomeIcon 
                        icon={ faTimes } 
                        className={styles.close}
                        style={{color: '#ccc'}}
                        onClick={this.props.onDelete}/>
                <div className={["card-body", styles.cardBody].join(' ')}
                onClick={this.editHandler}>
                    <textarea
                        type="text" 
                        placeholder="Click to enter" 
                        className={styles.textarea}
                        disabled={this.state.isDisabled}
                        onBlur={this.blurHandler}
                        style={
                            !this.state.isDisabled 
                                ? { color : '#f2f2f2' } 
                                : null 
                        }>
                    </textarea>
                </div>
            </div>
        )
    }
}

export default SectionCard;