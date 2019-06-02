import React from 'react';
import styles from './Layout.module.css';
import Section from '../Section';

const sectionList = [
    "What went well?",
    "What went wrong?",
    "What can be improved?",
    "List of to-dos"
]

const Layout = () => {
    return (
        <div className={[styles.Layout , "container"].join(' ')}>
            <div className="row">
                {sectionList.map((item, index) => {
                    return (
                        <div className="col-lg-6" key={index}>
                            <Section sectionName={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Layout;