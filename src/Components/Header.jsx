import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cart } from '../Context'


export const Header = () => {

  const { cartItem } = useContext(Cart)
  const [active, setActive] = useState('Home')
  const location = useLocation();

  // Update active state based on the current location
  useEffect(() => {
    if (location.pathname === '/') {
      setActive('Home')
    } else if (location.pathname === '/cart') {
      setActive('Cart')
    }
  }, [location])

  return (
    <div className='header'>
      <h1> For you &hearts;</h1>
      <ul className='nav'>
        <li className={active === 'Home' ? 'active' : ''}>
          <Link to='/'>Home</Link>
        </li>
        <li className={active === 'Cart' ? 'active' : ''}>
          <Link to='/cart'>Cart ({cartItem.length})</Link>
        </li>
      </ul>
    </div>
  )
}

