import { GetSVG } from "../../../assets/icons/index";
import style from "./arrowButton.module.scss";

const ArrowButton = ({cssCustomClass='',textButton='', customInlineStyle={}}) => {
  return (
    <button style={customInlineStyle} className={`${style.arrowButton}  ${style[cssCustomClass]} ` }>
     <span>{textButton}</span> 
      <div className={style.arrow} >
        {GetSVG({name : "arrowScrollDown"})}
      </div>
    </button>
  )
}

export default ArrowButton;
