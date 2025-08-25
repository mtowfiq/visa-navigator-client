import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VisaCard from '../Components/VisaCard';

const AllVisas = () => {
    const visas = useLoaderData()
    console.log(visas)
    return (
        <div>
            <h2 className='text-center m-3'>All Visas:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    visas.map(visa => <VisaCard key={visa._id} visa={visa}></VisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisas;