import React, { useState, useRef } from 'react';
import Chevron from './Chevron';
import "./faq.css"
function FAQ(props)  {
//
        const [setActive, setActiveState] = useState("");
        const [setHeight, setHeightState] = useState("0px");
        const [setRotate, setRotateState] = useState("accordion__icon");

        const content = useRef(null);

        function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : "100px" //`${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate" 
        );
        }
//
        return (
                <div className="FAQ_questions">
                    <button className= {`faqButton_title ${setActive}`} onClick={toggleAccordion} >
                        <p>{props.children[0]}</p>
                        <p><Chevron className={`${setRotate}`} width={10} fill={"#777"} /> </p> 
                                    {/* style={"float:right"}  */}
                    </button>
        
                    <div className="faq_content"   style={{ marginLeft:'100', maxHeight: `${setHeight}` }}  > 
                        <ul>
                            <li><p>{props.children[1]}</p></li>
                            <li><p>{props.children[2]}</p></li>    
                        </ul> 
                    </div>
                </div>

        );
}

export default FAQ;