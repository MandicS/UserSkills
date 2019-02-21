import React from 'react';

import classes from './Skill.module.css';

const Skill = ({ skillName, skillDescription }) => {
    return (
        <div className={classes.Skill}>
            <div>
                <h2>Skill Name</h2>
                <h3>{skillName}</h3>
            </div>
            <div>
                <h2>Skill Description</h2>
                <h3>{skillDescription}</h3>
            </div>
        </div>
    );
}

export default Skill;