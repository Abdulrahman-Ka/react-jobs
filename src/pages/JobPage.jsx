import { FaArrowLeft, FaMapMarker, FaTrash } from "react-icons/fa";
import { Link, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import DeletePopup from "../components/DeletePopup";

const JobPage = ({ deleteJob }) => {
  const [isOpen, setIsOpen] = useState(false);
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteJob(job.id);
    navigate("/jobs");
  };

  return (
    <>
      <section className="mx-8 my-5 text-indigo-600">
        <NavLink to="/" className="flex items-center gap-2  ">
          <FaArrowLeft />
          <p>Back to Job Listings</p>
        </NavLink>
      </section>
      <section className="grid grid-cols-10 gap-6 bg-blue-50 p-10">
        <section className="grid gap-6 col-span-10 md:col-span-7 max-h-1/2">
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6 ">
                <div className="text-gray-600 my-2">{job.type}</div>
                <h3 className="text-3xl font-bold ">{job.title}</h3>
                <div className="text-orange-700  mt-3">
                  <FaMapMarker className="inline text-xl mb-1 mr-1" />
                  {job.location}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <h4 className="text-indigo-600 text-xl  my-4">
                  Job Description
                </h4>
                <div className="">{job.description}</div>
                <h4 className="text-indigo-600 text-xl my-4">Salary</h4>
                <h3 className="">{job.salary} / Year</h3>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-10 md:col-span-3 grid gap-4">
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6 ">
                <h3 className="text-2xl font-bold pb-4">Company Info</h3>
                <h4 className="text-3xl pb-2">{job.company.name}</h4>
                <div className="text-xl">{job.company.description}</div>
                <div className="border border-gray-100 my-5"></div>
                <h4 className="text-2xl tracking-tighter">Contact Email:</h4>
                <div className="bg-gray-300 font-bold my-3 p-2">
                  {job.company.contactEmail}
                </div>
                <h4 className="text-2xl tracking-tighter">Contact Phone:</h4>
                <div className="bg-gray-300 font-bold my-3 p-2">
                  {job.company.contactPhone}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-2xl font-bold pb-4">Manage Job</h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 my-4 rounded-full block text-center font-semibold"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 w-full rounded-full block text-center font-semibold "
                >
                  Delete Job
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>{" "}
      <DeletePopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={() => handleDelete()}
      />
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader };
