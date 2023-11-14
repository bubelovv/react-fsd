import { Link, Outlet } from 'react-router-dom'
import { Counter } from './components/Counter'
import './index.scss'

export const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/main'}>main</Link>
            <br/>
            <Link to={'/about'}>about</Link>
            <Counter/>
            <Outlet/>
        </div>
    )
}