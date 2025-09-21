import { useLoaderData } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import FormError from "../components/FormError";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";

const EditJobPage = ({ editJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    values: {
      type: job.type,
      salary: job.salary,
      title: job.title,
      description: job.description,
      location: job.location,
      name: job.company.name,
      company_description: job.company.description,
      email: job.company.contactEmail,
    },
  });

  const onSubmit = (data) => {
    data = {
      ...data,
      company: {
        name: data.name,
        description: data.description,
        contactEmail: data.email,
        contactPhone: data.phone,
      },
    };
    editJob(job.id, data);
    return navigate("/jobs");
  };
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white shadow-md rounded-md p-8 border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-4xl text-center font-bold mb-6">Edit Job</h2>
            <label
              htmlFor="type"
              className="block text-gray-700 mb-2 font-bold"
            >
              Job Type
            </label>
            <select
              name="type"
              id="type"
              className="border w-full px-2 py-1 mb-2 rounded"
              {...register("type", { required: "Please Select a type" })}
            >
              <option value="" disabled>
                -- Select a type --
              </option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
            {errors.type && <FormError errorMessage={errors.type.message} />}

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 mb-2 font-bold"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                name="title"
                className="border w-full px-2 py-1 mb-2 rounded"
                {...register("title", { required: "Please Enter a name" })}
                placeholder="eg. Beautiful Apartment In Miami"
              />
              {errors.title && (
                <FormError errorMessage={errors.title.message} />
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 mb-2 font-bold"
              >
                Description
              </label>
              <textarea
                name="description"
                className="border rounded w-full py-1 px-2"
                rows={4}
                placeholder="Add any job duties,expectations, requirements, etc"
                {...register("description", {
                  required: "Please Enter a description",
                })}
              ></textarea>
              {errors.description && (
                <FormError errorMessage={errors.description.message} />
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="salary"
                className="block text-gray-700 mb-2 font-bold"
              >
                Salary
              </label>
              <select
                name="salary"
                id="salary"
                className="border w-full px-2 py-1 mb-2 rounded"
                {...register("salary", {
                  required: "Please Select a salary range",
                })}
              >
                <option value="">-- Select a salary --</option>
                <option value="Under $50K">Under $50k</option>
                <option value="$50K - $60K">$50k - $60k</option>
                <option value="$60K - $70K">$60k - $70k</option>
                <option value="$70K - $80K">$70k - $80k</option>
                <option value="$80K - $90K">$80k - $90k</option>
                <option value="$90K - $100K">$90k - $100k</option>
                <option value="$100K - $125K">$100k - $125k</option>
                <option value="$125K - $150K">$125k - $150k</option>
                <option value="$150K - $175K">$150k - $175k</option>
                <option value="$175K - $200K">$175k - $200k</option>
                <option value="Over $200K">Over $200k</option>
              </select>
              {errors.salary && (
                <FormError errorMessage={errors.salary.message} />
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 font-bold"
                htmlFor="location"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Company Location"
                {...register("location", {
                  required: "Please Enter a location",
                })}
                className="border w-full px-2 py-1 mb-2 rounded"
              />
              {errors.location && (
                <FormError errorMessage={errors.location.message} />
              )}
            </div>

            <h2 className="text-4xl my-4 font-semibold">Company Info</h2>

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-bold"
              >
                Company Name
              </label>
              <input
                type="text"
                name="name"
                className="border w-full px-2 py-1 mb-2 rounded"
                {...register("name", {
                  required: "Please Enter a name",
                })}
                placeholder="Company Name"
              />
              {errors.name && <FormError errorMessage={errors.name.message} />}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 font-bold"
                htmlFor="company_description"
              >
                Company Description
              </label>
              <textarea
                name="company_description"
                id="company_description"
                rows="4"
                {...register("company_description", {
                  required: "Please Enter a Company Description",
                })}
                placeholder="What does your company do?"
                className="border rounded w-full py-1 px-2"
              ></textarea>
              {errors.company_description && (
                <Form Error errorMessage={errors.company_description.message} />
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-bold"
              >
                Contact Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                id="email"
                placeholder="Email address for applicants"
                className="border rounded w-full py-1 px-2"
                {...register("email", {
                  required: "Please Enter an email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <FormError errorMessage={errors.email.message} />
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-2 font-bold"
              >
                Contact Phone
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone number required",
                  minLength: {
                    value: 10,
                    message: "Too short (min 10 digits)",
                  },
                  maxLength: { value: 14, message: "Too long (max 14 digits)" },
                }}
                render={({ field, fieldState }) => (
                  <>
                    <PhoneInput
                      {...field}
                      defaultCountry="SY"
                      international
                      initialValueFormat="national"
                      value={job.company.contactPhone.replace(/-/g, "")}
                      className="border rounded w-full py-1 px-2"
                    />
                    {fieldState.error && (
                      <FormError errorMessage={fieldState.error.message} />
                    )}
                  </>
                )}
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 w-full mt-4 py-2 text-xl font-bold rounded-full  text-white"
            >
              Edit Job
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditJobPage;
