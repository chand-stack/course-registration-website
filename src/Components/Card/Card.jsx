import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';
const Card = ({card,selectHandler}) => {
    // console.log(card);
    const {cover_img,title,info,hours,price} = card;
    return (
        <div className=' bg-white p-3 rounded-xl mx-auto md:mx-0 space-y-1'>
            <img className=' w-full' src={cover_img} alt="" />
            <h1 className=' text-lg font-semibold'>{title}</h1>
            <p className=' text-gray-600'>{info}</p>
            <div className='flex items-center justify-between '>
                <p className='flex items-center gap-1'><FiDollarSign></FiDollarSign> <span className=' text-gray-600 font-medium'> Price: {price}</span></p>
                <p className='flex items-center gap-1'><BsBook></BsBook> <span className=' text-gray-600 font-medium'>Credit : {hours}hr</span></p>
            </div>
            <button onClick={()=>selectHandler(card)} className=' btn bg-sky-600 text-lg text-white font-semibold w-full py-2'>Select</button>
        </div>
    );
};

export default Card;