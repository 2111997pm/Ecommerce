import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='row mt-5 bg-primary py-5'>
                <div className='col-6 text-center text-white'>
                    <h1>The Generics</h1>
                </div>
                <div className='col-6 text-center d-flex justify-content-center gap-5 fs-1 text-white'>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-spotify"></i>
                    <i className="fa-brands fa-facebook"></i>

                </div>
            </div>
        </>
    )
}

export default Footer