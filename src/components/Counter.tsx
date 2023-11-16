import { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
    const [v, setV] = useState<number>(0)

    return (
        <div className={classes.counter}>
            <h1>{v}</h1>
            <button onClick={() => setV(v + 1)}>+</button>
        </div>
    )
}