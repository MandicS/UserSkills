import React from 'react';

import classes from './AddSkill.module.css';

const AddSkill = ({ skName, skDesc, changeName, changeDesc, submit }) => {
    return (
        <div className={classes.LogIn}>
            <form onSubmit={submit}>
                <h1>Skill Name</h1>
                <input
                    className={classes.Text}
                    type='text'
                    placeholder='Skill Name'
                    value={skName}
                    onChange={changeName} />
                <h1>Skill Description</h1>
                <input
                    className={classes.Text}
                    type='text'
                    placeholder='Skill Description'
                    value={skDesc}
                    onChange={changeDesc} />
                <input
                    className={classes.Submit}
                    type='submit'
                    value='Add Skill' />
            </form>
        </div>
    );
}

export default AddSkill;