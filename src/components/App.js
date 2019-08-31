import React, { useState } from 'react';
import styles from './App.css';
import ReactDOM from 'react-dom';

function App(props) {
    const [count, setCount] = useState(0);

    function doClick(event) {
	setCount(count + 1);
    }
    
    return (
	    <button className={styles.myButton} onClick={doClick}>Click Count - {count}</button>
    );
}


export default App;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
