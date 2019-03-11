import React from 'react';
import {Link,withRouter} from 'react-router-dom';
const Navbar = (props) => {
    return(
        <nav className='nav-wrapper black darken-4'>
            <Link to='/' className='brand-logo left'>HomePage</Link>
            <ul className='right'>
                <li><Link to='/'>HomePage</Link></li>
                <li><Link to='/Info'>Person Info</Link></li>
            </ul>
        </nav>
    )
}
export default withRouter (Navbar);
