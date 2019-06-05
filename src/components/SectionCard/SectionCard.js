import React, { Component } from 'react';
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

    render() {
        return (
            <div className={["card", styles.card].join(' ')}>
                <div className={["card-body", styles.cardBody].join(' ')}
                onClick={this.editHandler}>
                    <textarea
                        type="text" 
                        placeholder="Click to enter" 
                        className={styles.textarea}
                        disabled={this.state.isDisabled}>
                    </textarea>
                </div>
            </div>
        )
    }
}

export default SectionCard;