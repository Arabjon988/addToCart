import { memo, useContext } from 'react'
import {Link} from 'react-router-dom'
import Context from '../context/Context'


const Navbar = () => {
  const {cartItems} = useContext(Context)

  return (
    <div className="navbar">
        <div className="container">
            <div className="nav_main">
                <Link to='/'>
                  home
                </Link>
                <br />
                <Link to='cart'>
                  Cart <b>{cartItems.length}</b>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default memo(Navbar)