/* eslint-disable react/prop-types */
import "./index.css";

export const Button = ({buttonText, handleClick})=>{
    return(
        <button
        className="button"
        onClick={handleClick}
      >
        <span>{buttonText}</span>
      </button>
    )
}