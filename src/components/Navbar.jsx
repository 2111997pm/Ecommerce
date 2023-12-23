import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-dark  text-center py-2 d-flex justify-content-center gap-5'>

            {/* <Link to="/" className='text-white' style={{textDecoration:'none'}}>Home</Link> */}
            <Link to="/store" className='text-white' style={{textDecoration:'none'}}>Store</Link>
            <Link to="/About" className='text-white'style={{textDecoration:'none'}}>About</Link>

        </div>
    )
}

export default Navbar