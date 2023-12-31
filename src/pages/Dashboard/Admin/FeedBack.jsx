import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const FeedBack = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const handleFeedback =(event) =>{
    event.preventDefault();
    const form = event.target;
    const feedback = form.feedback.value;

    console.log(feedback)
    fetch(`https://sports-academy-server-delta.vercel.app/class/feedback/${id}`, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({feedback})
        })
    
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                // refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Status is changed to !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/dashboard/ManageClasses')
            }
        })
    // console.log(id)

  }
  return (
    <div>
      <form onSubmit={handleFeedback}>
        <textarea
          className="textarea textarea-bordered"
          name="feedback"
          placeholder="Feedback to instructor"
        ></textarea> <br />
        <input type="submit" className="btn btn-accent" />
      </form>
    </div>
  );
};

export default FeedBack;
