import { useEffect, useState } from 'react';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import Cart from '../Cart/Cart';

const Card = () => {
    const [courses , setCourses] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='flex flex-col lg:flex-row gap-5'>

            {/* card section  div start*/}
            <div className='w-full lg:w-[78%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-8'>
                    {
                        courses.map(course =>
                            <div key={course.id} className=" p-4 rounded-xl bg-white">
                    <figure className="flex justify-center w-full">
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

            <div className=' w-full  lg:w-[22%]'>
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Card;