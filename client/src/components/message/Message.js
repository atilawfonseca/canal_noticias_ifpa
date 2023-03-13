import { useState, useEffect } from 'react';
import styles from './Message.module.css'

function Message ({text, type}) {

    const[visivil, setVisivil] = useState(false);

    useEffect(() => {
        if(!text) {
            setVisivil(false);
            return
        }
        setVisivil(true);

        const time = setTimeout(() => {
            setVisivil(false)
        }, 4000)

        return () => clearTimeout(time);

    },[text])

    return (
        <>
        {visivil && (
            <div className={`${styles.message} ${styles[type]}`}>
                <p>{text}</p>
            </div>
        )}
        </>
    );
}


export default Message; 