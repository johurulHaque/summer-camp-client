import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ClassCard = ({approvedClass,role}) => {    
    const { _id,seats, image, instructorName, name, price, students } = approvedClass;

    const {user} = useAuth();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    
    
    // console.log(cart)

    const handleAddToCart = () => {

        if(user && user.email){
            const cartItem = {classId: _id, instructorName, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
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
                        position: 'top-end',
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
                title: 'Please login to order the food',
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
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="class image" />
        </figure>
        <div className="card-body" style={{ background: (seats-students) ? '' : 'red' }}>
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{instructorName || "jony"}</p>
          <div className="card-actions justify-end">
            <div className="badge  badge-primary badge-outline">
              Available {seats - students} seats
            </div>
            <div className="badge  badge-accent badge-outline">
              Total student {students}
            </div>
          </div>
          <div>
            {
                (role == ("instructor" || "admin") || (seats - students == 0))  ? <button className='btn btn-primary btn-outline' disabled  >Select</button> :  <button className='btn btn-primary btn-outline' onClick={handleAddToCart} >Select</button>
            }
           
          </div>
        </div>
      </div>
    );
};

export default ClassCard;