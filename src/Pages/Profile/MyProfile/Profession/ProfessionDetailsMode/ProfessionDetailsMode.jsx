import React, { useContext } from "react";
import { AuthContext } from "../../../../../contexts/UserProvider/UserProvider";
const ProfessionDetailsMode = () => {
  const { user } = useContext(AuthContext);
  console.log("first", user);
  return (
    <div className='mt-5'>
      {user?.profession?.workAs === "schoolStudent" && (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 '>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>Profession</h3>
            <h4 className='text-lg ml-2'>{user?.profession?.workAs}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              School Name
            </h3>
            <h3 className='text-lg ml-2'>{user?.profession?.schoolName}</h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>Grade</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.grade}</h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Country Name
            </h3>
            <h3 className='text-lg ml-2'>
              {user?.profession?.address?.country}
            </h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>State Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.state}</h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>City Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.city}</h3>
          </div>
        </div>
      )}
      {user?.profession?.workAs === "collageStudent" && (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>Profession</h3>
            <h4 className='text-lg ml-2'>{user?.profession?.workAs}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Name of Institute
            </h3>
            <h4 className='text-lg ml-2'>{user?.profession?.coLLageName}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Latest Degree
            </h3>
            <h4 className='text-lg ml-2'>{user?.profession?.latestDegree}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>graduation</h3>
            <h4 className='text-lg ml-2'>
              {user?.profession?.graduationMonth}{" "}
              {user?.profession?.graduationYear}
            </h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Country Name
            </h3>
            <h3 className='text-lg ml-2'>
              {user?.profession?.address?.country}
            </h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>State Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.state}</h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>City Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.city}</h3>
          </div>
        </div>
      )}
      {user?.profession?.workAs === "jobSeeker" && (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>Profession</h3>
            <h4 className='text-lg ml-2'>{user?.profession?.workAs}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Name of Collage
            </h3>
            <h4 className='text-lg ml-2'>{user?.profession?.coLLageName}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Latest Degree
            </h3>
            <h4 className='text-lg ml-2'>{user?.profession?.latestDegree}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>graduation</h3>
            <h4 className='text-lg ml-2'>
              {user?.profession?.graduationMonth}{" "}
              {user?.profession?.graduationYear}
            </h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Country Name
            </h3>
            <h3 className='text-lg ml-2'>
              {user?.profession?.address?.country}
            </h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>State Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.state}</h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>City Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.city}</h3>
          </div>
        </div>
      )}
      {user?.profession?.workAs === "employee" && (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4'>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>Profession</h3>
            <h4 className='text-lg ml-2'>{user?.profession?.workAs}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Current Company Name
            </h3>
            <h4 className='text-lg ml-2'>{user?.profession?.companyName}</h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Current Job Title
            </h3>
            <h4 className='text-lg ml-2'>
              {user?.profession?.currentJobTitle}
            </h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>Experience</h3>
            <h4 className='text-lg ml-2'>
              {user?.profession?.yearsOfExperience} Year
            </h4>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>
              Country Name
            </h3>
            <h3 className='text-lg ml-2'>
              {user?.profession?.address?.country}
            </h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>State Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.state}</h3>
          </div>
          <div className=''>
            <h3 className='text-lg font-semibold text-green-500'>City Name</h3>
            <h3 className='text-lg ml-2'>{user?.profession?.address?.city}</h3>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfessionDetailsMode;
