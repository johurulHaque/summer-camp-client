import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const image_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  //   const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    const { name, image, price, instructorName, instructorEmail,seats } = data;
    const classInfo = {
      name,
      image,
      price: parseFloat(price),
      instructorName,
      instructorEmail,
      seats,      
      status:"pending",
      enrolledStudent: 0,
    };
    console.log(classInfo)

    axiosSecure.post("/class", classInfo).then((data) => {
        if (data.data.acknowledged) {
        //   reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <h3 className="text-center text-3xl">Instructor/Add class</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Class Name <span className="text-red-500 ">*</span>
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 120 })}
              placeholder="class name Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">
                Class Image <span className="text-red-500 ">*</span>
              </span>
            </label>
            <input
              type="url"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full "
            />
          </div>
        </div>
        {/* <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Pick a file</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true, maxLength: 120 })}
            className="file-input file-input-bordered w-full "
          />
        </div> */}
        <div className="flex my-5 gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor Name </span>
            </label>
            <input
              type="text"
              {...register("instructorName", {
                required: true,
                maxLength: 120,
              })}
              //   defaultValue="jony@gmailcom"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="email"
              {...register("instructorEmail", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="flex my-5 gap-4">


          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">
                Seats<span className="text-red-500 "> *</span>
              </span>
            </label>
            <input
              type="number"
              {...register("seats", { required: true, maxLength: 120 })}
            //   placeholder="Price Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">
                Price<span className="text-red-500 "> *</span>
              </span>
            </label>
            <input
              type="number"
              {...register("price", { required: true, maxLength: 120 })}
              placeholder="Price Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <input className="btn btn-sm mt-4" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddClasses;
