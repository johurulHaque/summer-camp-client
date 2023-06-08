
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// const image_hosting_token = import.meta.env.VITE_Image_upload_token;

const AddClasses = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // const formData = new FormData();
    // formData.append("image", data.image[0]);

  };

  return (
    <div className="w-full px-10">
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 120 })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select
              defaultValue="Pick one"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Pick one</option>
              <option>pizza</option>
              <option>Salad</option>
              <option>Drinks</option>
              <option>Dessert</option>
              <option>Soup</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true, maxLength: 120 })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register("recipe", { required: true, maxLength: 120 })}
            placeholder="Bio"
          ></textarea>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Pick a file</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true, maxLength: 120 })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddClasses;
