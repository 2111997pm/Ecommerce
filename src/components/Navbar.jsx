import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-dark  text-center py-2 d-flex justify-content-center gap-5'>

            <a href="Home" className='text-white' style={{textDecoration:'none'}}>Home</a>
            <a href="store" className='text-white' style={{textDecoration:'none'}}>Store</a>
            <a href="About" className='text-white'style={{textDecoration:'none'}}>About</a>

        </div>
    )
}

export default Navbar