import React from 'react'
import Button from 'react-bootstrap/Button';
import { Tours } from '../data/Tours'
import Table from 'react-bootstrap/Table';


const Home = () => {
    return (
        <>
            <div className='d-flex flex-column gap-4 align-items-center
        py-5 bg-success justify-content-center'>
                <Button variant="outline-primary" size='lg'>Get Out Latest Album</Button>
                <i className="fa-regular fa-circle-play fs-1 text-primary"></i>

            </div>
            <Table striped bordered hover size="sm" className='mt-5 w-50 text-center mx-auto'>

                {Tours.map((data) => (

                    <tbody key={data.date}>

                        <tr >
                            <td>{data.date}</td>
                            <td>{data.Place}</td>
                            <td>{data.city}</td>
                            <td><Button>BUY TICEKETS</Button></td>
                        </tr>
                    </tbody>

                ))
                }
            </Table>
        </>

    )
}

export default Home