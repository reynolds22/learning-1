import React, {useState} from "react";
import "./styles.css";

function TestComponent(){

    const [displayed, setDisplayed] = useState("");
    const [dataVal, setDataVal] = useState("");

    function handleSubmit(e){
        setDisplayed(dataVal);
    };

    function handleInput(e){
        setDataVal(e.target.value);
    };

    return (
        <div className="container">
            <h1>Enter Test</h1>
            <div>
                <p>{displayed !== "" ? displayed : null}</p>
            </div>
            <input 
                onChange={handleInput} 
                type="text" 
                placeholder="Enter text to display" 
            />
            <button 
                onClick={handleSubmit} 
                type="submit"
            >Submit</button>
        </div>
    );
};

export default TestComponent;