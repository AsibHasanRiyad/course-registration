import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Card = () => {
    return (
        <div>

            {/* card section  div start*/}
            <div>
                    <div className=" p-4 rounded-xl w-[320px] bg-white">
                    <figure className="">
                        <img src="https://i.ibb.co/8gLhgVy/Rectangle-2-1.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className=" items-center text-justify">
                        <h2 className=" text-lg font-semibold text-center pt-4 pb-2">Introduction to C Programming</h2>
                        <p className="text-[#1C1B1B99] font-normal ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        {/* price and credit */}
                        <div className="flex justify-between mt-5 text-[#1C1B1B99] font-normal">
                            <p className=' flex justify-center items-center'> <FaDollarSign /> <span className=' ml-2'>Price : 15000</span>
                            </p>
                            <p className=' flex justify-center items-center'> <FaBookOpen /> <span className=' ml-2'>Credit : 1hr</span>
                            </p>
                        </div>
                        <div className="text-center">
                        <button className="w-full py-2  bg-[#2F80ED]  rounded-lg text-white font-semibold text-base mt-5">Select</button>
                        </div>
                    </div>
                    </div>
            </div>
            {/* card div end */}

        </div>
    );
};

export default Card;