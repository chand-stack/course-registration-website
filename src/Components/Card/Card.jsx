import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
const Card = ({card}) => {
    console.log(card);
    const {cover_img,title,info,hours,price} = card;
    return (
        <div>
            <img src={cover_img} alt="" />
            <h1>{title}</h1>
            <p>{info}</p>
            <div className='flex items-center justify-between'>
                <p className='flex items-center gap-1'><FaDollarSign></FaDollarSign> Price: {price}</p>
                <p className='flex items-center gap-1'><FaBookOpen></FaBookOpen> Credit : {hours}hr</p>
            </div>
        </div>
    );
};

export default Card;