
import { NavLink} from 'react-router-dom'





const Navbar = () =>{
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopping
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/montain' 
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Montain
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/route' 
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Route
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electrical'  
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Electrical
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/urban'  
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Urban
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/fitness'  
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Fitness
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/others'  
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
             <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                   kellysalb56@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-account' 
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                 <li>
                    <NavLink 
                        to='/my-order' 
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                      My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-orders' 
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                      My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'  
                        className={({ isActive}) =>
                        isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar