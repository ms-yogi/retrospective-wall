import React from 'react';
import styles from './SectionCard.module.css'

const SectionCard = () => {
    return (
        <div className={["card", styles.card].join(' ')}>
            <div className="card-body">
                <p className="card-title">Added a card</p>
            </div>
        </div>
    )
}

export default SectionCard;