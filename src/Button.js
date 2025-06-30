import PropTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}) {
    return(
        <button className={styles.btn} >{text}</button>
    );
}


// 250630 silee - 타입 체크
Button.propTypes = {
    text: PropTypes.string.isRequired
};


export default Button;