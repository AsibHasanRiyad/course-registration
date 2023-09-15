/* eslint-disable react/prop-types */
const Cart = ({selected}) => {
    console.log(selected);
    return (
        <div className=" bg-white rounded-xl p-6 mb-8 lg:fixed text-center lg:text-start">
            <h3 className="text-[#2F80ED] text-lg font-bold mb-4">Credit Hour Remaining 7 hr</h3>
            <hr />
            <h1 className=" text-[#1C1B1B] font-bold text-xl my-2">Course Name</h1>
            <ul className="text-[#1C1B1B99]  text-base mb-4">
                {
                    selected.map(item => <li key={item.id}> {item.course_title} </li>  )
                }
            </ul>
            <hr />
            <h3 className=" py-4 text-base font-medium">Total Credit Hour : 13</h3>
            <hr />
            <h3 className=" mt-4 text-base font-semibold">Total Price : 48000 USD</h3>
            
        </div>
    );
};

export default Cart;