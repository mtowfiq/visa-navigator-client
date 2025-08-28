import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyAddedVisaCard from '../Components/MyAddedVisaCard';

const MyAddedVisas = () => {
    const {user} = useContext(AuthContext)
    // console.log(user)

    const [addedVisas, setAddedVisas] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/my-added-visa?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setAddedVisas(data)
            console.log(data)
        })
    },[user?.email])


    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-xl font-bold text-center mt-6'>Number of added visas: {addedVisas.length}</h2>
            <div className='flex justify-center'>
                <div className=' mt-13 grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    addedVisas.map(addedVisa => <MyAddedVisaCard key={addedVisa._id} addedVisa={addedVisa}></MyAddedVisaCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default MyAddedVisas;