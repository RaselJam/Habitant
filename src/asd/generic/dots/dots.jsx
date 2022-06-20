import React, {useState} from "react";
import styel from './dots.module.scss'

const Dots = ({ quantity, activeIndex, activate }) => {
  const [active, setActive] = useState(activeIndex)
  let toRender = Array(quantity).fill(<span onClick={()=> setActive()}></span>);

  return (
    <div className={style.dots}>
    
    {toRender}

      
    </div>
  );
};

export default Dots;
