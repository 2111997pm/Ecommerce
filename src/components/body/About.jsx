import React from 'react';
import { Image } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-4 text-center'>
            <h4>About</h4>
                    <Image src="//unsplash.it/300" alt="" roundedCircle/>

                </div>
                <div className='col-8'>
                    <p className='mt-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, architecto et voluptatum accusantium itaque animi repudiandae similique enim dolore facere, officia quos unde pariatur voluptate sapiente nam inventore vitae quis!
                        At iusto nemo non natus repellat quisquam exercitationem quam possimus ut assumenda quidem ullam, minima ipsa. At quos fugiat impedit recusandae, aspernatur voluptatum, amet quidem hic fuga in inventore a.
                        Voluptas numquam nulla corporis incidunt. Architecto eaque fugiat explicabo deleniti reprehenderit dolorum reiciendis nemo provident omnis expedita. Pariatur eos cupiditate odit, tempora minus labore tempore totam porro reiciendis dolorem quisquam!
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About