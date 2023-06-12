import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTimes } from 'react-icons/fa';


const ClassCard = ({approvedClass,role}) => {    
    const { _id,seats, image, instructorName, name, price, enrolledStudent } = approvedClass;

    const {user} = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();   
    // console.log(role)


    const handleAddToCart = () => {

        if(user && user.email){
            const cartItem = {classId: _id, instructorName, name, image, price, email: user.email}
            fetch('https://sports-academy-server-delta.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class is selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }


   

// console.log(role)
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="class image" className='w-full h-72'/>
        </figure>
        <div className="card-body" style={{ background: (seats) ? '' : 'red' }}>
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">$ {price}</div>
          </h2>
          <p><span className="text-xl font-semibold">Instructor name:</span> {instructorName}</p>
          <div className="card-actions justify-end">
            <div className="badge  badge-primary badge-outline">
              Available {seats} seats
            </div>
            <div className="badge  badge-accent badge-outline">
              Total student {enrolledStudent}
            </div>
          </div>
          <div>
            {
                ((role == "instructor" || role == "admin") || (seats == 0))  ? <button className='btn  btn-block btn-outline text-white' disabled  >Select <FaTimes></FaTimes></button> :  <button className='btn btn-accent btn-block text-white' onClick={handleAddToCart} >Select</button>
            }
           
          </div>
        </div>
      </div>
    );
};

export default ClassCard;