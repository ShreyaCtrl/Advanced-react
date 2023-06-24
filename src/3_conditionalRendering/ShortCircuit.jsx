import { useState, useEffect } from 'react';

export const ShortCircuit = () => {
    const [num, setnum] = useState(0);
    const [Text, setText] = useState('text');
    const [Dark, setDark] = useState('');
    return (
        <div>
            <h1>Short circuit</h1>
            <h2>num || text : {num || Text}</h2>
            <h2>num && text : {num && Text}</h2>
            <h2>!num && text : {!num && Text}</h2>
            <p>the below is used to set value to a variable if it given else set to some default value (text in this case)</p>
            <h2>Dark || text : {Dark || Text}</h2>
            <button type="button" className='btn'>{Dark?"Light":"Dark"}</button>
        </div>
    )
}