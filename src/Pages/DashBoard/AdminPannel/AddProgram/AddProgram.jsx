import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import { AuthContext } from "../../../../contexts/UserProvider/UserProvider";
import { toast } from "react-hot-toast";

const inputStyle =
  "p-3 border border-[#D0D5DD] hover:border-[#4BA25D] hover:shadow hover:shadow-[#4BA25D] focus:border-[#4BA25D] focus:shadow focus:shadow-[#4BA25D] focus:ring-0 duration-200 rounded-lg w-full mt-1";

const AddProgram = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const justNow = moment().format();
    const programDetails = {
      programName: data?.programName,
      actionsDetails: {
        isDeleted: false,
        creation: {
          createdAt: justNow,
          creatorEmail: user.email,
        },
        updation: {
          updatedAt: justNow,
          updaterEmail: user.email,
        },
      },
    };
    fetch("https://api.geeksofgurukul.com/api/v1/programs/add-program", {
      method: "POST",
      body: JSON.stringify(programDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data?.success);
        if (data.success) {
          toast.success(data?.message);
          reset();
        } else {
          toast.error(data?.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Text Area */}
        <div className="w-full mx-auto mb-10 font-poppins text-sm">
          <label
            htmlFor="programName"
            className="text-gray-900 dark:text-gray-400"
          >
            Program Name
          </label>
          <input
            id="programName"
            name="programName"
            {...register("programName", {
              required: "Program Name is required",
            })}
            className={`${inputStyle} input border-[#5FB370]`}
            placeholder="Write program name"
            aria-invalid={errors.programName ? "true" : "false"}
          />
          {errors.programName && (
            <p
                      className="text-red-500 text-[14px] font-poppins font-normal"
                      role="alert"
                    >
              {errors.programName?.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
        <button
          type="submit"
          className="py-3 w-full md:w-28 font-poppins text-white rounded-lg bg-[#4BA25D] hover:bg-[#5fb370]"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddProgram;
