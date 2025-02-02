import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      className="bg-white rounded-2xl p-8 text-Grey-darker mx-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <section className="md:flex md:gap-8">
        <div className="flex flex-col gap-2 mt-5 md:w-60">
          <label htmlFor="" className="text-Grey-medium font-semibold">
            First Name *
          </label>
          <input
            {...register("firstName", { required: "This field is required" })}
            className={`w-full p-2 border ${
              errors.firstName ? "border-Red" : "border-gray-300"
            } rounded`}
          />
          {errors.firstName && (
            <p className="text-Red text-sm">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5 md:w-60">
          <label htmlFor="" className="text-Grey-medium font-semibold">
            Last Name *
          </label>
          <input
            {...register("lastName", { required: "This field is required" })}
            className={`w-full p-2 border ${
              errors.lastName ? "border-Red" : "border-gray-300"
            } rounded`}
          />
          {errors.lastName && (
            <p className="text-Red text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-2 mt-5">
        <label htmlFor="" className="text-Grey-medium font-semibold">
          Email Address *
        </label>
        <input
          {...register("email", {
            required: "Please enter a valid email address",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
          className={`w-full p-2 border ${
            errors.email ? "border-Red" : "border-gray-300"
          } rounded`}
        />
        {errors.email && (
          <p className="text-Red text-sm">{errors.email.message}</p>
        )}
      </section>

      <section>
        <h3 className="font-semibold mt-5">Query Tpe *</h3>
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="border-1 mt-5 p-4 rounded-xl flex gap-3 text-center md:w-60 ">
            <input
              type="radio"
              value="General Enquiry"
              {...register("queryType", {
                required: "Please select a query type",
              })}
              className="transform scale-150"
            />
            <label htmlFor="" className="text-Grey-medium font-bold">
              General Enquiry
            </label>
          </div>
          <div className="border-1 mt-5 p-4 rounded-xl flex gap-3 text-center md:w-64">
            <input
              type="radio"
              value="Support Request"
              {...register("queryType", {
                required: "Please select a query type",
              })}
              className="transform scale-150"
            />
            <label htmlFor="" className="text-Grey-medium font-bold">
              Support Request
            </label>
          </div>
        </div>
      </section>
      <section>
        <h3 className="font-semibold mt-5">Message *</h3>
        <textarea
          {...register("message", { required: "This field is required" })}
          className={`w-full p-2 border mt-3 md:h-60 rounded-xl ${
            errors.message ? "border-Red" : "border-gray-300"
          } rounded`}
        ></textarea>
        {errors.message && (
          <p className="text-Red text-sm">{errors.message.message}</p>
        )}
      </section>

      <section className="flex flex-col gap-5 justify-center mt-5">
        <>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("consent", {
                required:
                  "To submit this form, please consent to being contacted",
              })}
            />
            <span>I consent to being contacted by the team *</span>
          </label>
          {errors.consent && (
            <p className="text-Red text-sm">{errors.consent.message}</p>
          )}
        </>
      </section>
      <button
        className="bg-Green-medium hover:bg-Grey-darker text-Green-lighter font-bold p-5 rounded-xl mt-10 w-full cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
