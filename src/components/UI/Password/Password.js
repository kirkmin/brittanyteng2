import React, { useState } from 'react';

import styles from './Password.module.css';
import { ReactComponent as ArrowDisabled } from '../../../assets/images/arrow-right-icon.svg';
import { ReactComponent as ArrowEnabled } from '../../../assets/images/arrow-right-filled-icon.svg';

const Password = ({ onCorrect }) => {
    const [showError, setShowError] = useState(false);
    const [value, setValue] = useState("");
    const [disabled, setDisabled] = useState(true);

    const onChangeHandler = e => {
        setValue(e.target.value);
        setDisabled(e.target.value === "");
        setShowError(false);
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        if (value === "LILKIM") {
            onCorrect();
        } else {
            setValue("");
            setDisabled(true);
            setShowError(true);
        }
    };

    return (
        <div className={styles["password"]}>
            <h3 className={styles["password__header"]}>WHAT'S THE MAGIC WORD?</h3>
            <form className={styles["password__form"]} onSubmit={onSubmitHandler}>
                <input className={styles["password__input"]} type="text" value={value} onChange={onChangeHandler} />
                <button className={styles["password__button"]} type="submit" disabled={disabled}>{disabled ? <ArrowDisabled /> : <ArrowEnabled />}</button>
                {showError && <p className={styles["password__error"]}>That's not it</p>}
            </form>
        </div>
    )
};

export default Password;