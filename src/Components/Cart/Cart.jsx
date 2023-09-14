const Cart = ({cartlist,creditHour,remCreditHour}) => {
    console.log(cartlist);
    return (
        <div className=" w-full md:w-1/4 ">

            <div className="bg-white rounded-xl p-6">
            <h1 className=" text-xl font-bold text-sky-600 pb-2 border-b-2">Credit Hour Remaining {remCreditHour} hr</h1>
            <h1 className=" text-xl font-bold py-2">Course Name</h1>
            <div className=" border-b-2 pb-2 list-decimal space-y-1 font-semibold text-gray-500">
                {
                    cartlist.map(item => (<li key={item.id}>{item.title}</li>))
                }
            </div>
            <h1 className=" font-semibold py-2 border-b-2">Total Credit Hour : {creditHour}</h1>
            <h1 className=" font-semibold py-2">Total Price : 48000 USD</h1>
            </div>
            
        </div>
    );
};

export default Cart;