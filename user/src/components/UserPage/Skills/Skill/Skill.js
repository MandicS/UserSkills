import React, {Component} from 'react';

import classes from './Skill.module.css';

class Skill extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.skillName.value !== nextProps.value;
      }

    render() {
        return (
            <div className={classes.Skill}>
                <div>
                    <h2>Skill Name</h2>
                    <h3>{this.props.skillName}</h3>
                </div>
                <div>
                    <h2>Skill Description</h2>
                    <h3>{this.props.skillDescription}</h3>
                </div>
            </div>
        );
    }
}

export default Skill;