import { useEffect, useState } from 'react';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Card = () => {
    const [courses , setCourses] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className=' flex '>

            {/* card section  div start*/}
            <div className=' w-[80%] grid grid-cols-3 gap-6'>
                    {
                        courses.map(course =>
                            <div key={course.id} className=" p-4 rounded-xl w-[320px] bg-white">
                    <figure className="">
                        <img src={course.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-justify">
                        <h2 className=" text-lg font-semibold text-center pt-4 pb-2">{course.course_title} </h2>
                        <p className="text-[#1C1B1B99] font-normal "> {course.details} </p>
                        {/* price and credit */}
                        <div className="flex justify-between mt-5 text-[#1C1B1B99] font-normal">
                            <p className=' flex justify-center items-center'> <FaDollarSign /> <span className=' ml-2'>Price : {course.price} </span>
                            </p>
                            <p className=' flex justify-center items-center'> <FaBookOpen /> <span className=' ml-2'>Credit : {course.credit}hr</span>
                            </p>
                        </div>
                        <div className="text-center">
                        <button className="w-full py-2  bg-[#2F80ED]  rounded-lg text-white font-semibold text-base mt-5">Select</button>
                        </div>
                    </div>
                    </div>
                            )
                    }
            </div>
            {/* card div end */}

            <div className=' w-[20%]'>
                <h1 className='text-5xl'>Cart</h1>
            </div>

        </div>
    );
};

export default Card;