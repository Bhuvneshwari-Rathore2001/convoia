import { IoIosMore } from "react-icons/io";
import { FaVideo } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

const UserInfo = () => {
  return (
    <div className='flex items-center justify-between px-8'>
      <div className='flex items-center justify-center gap-3'>
        <img
          src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
          alt='user'
          className='size-8 rounded-full'
        />
        <div className='text-sm text-gray-100 font-semibold'>Jane Doe</div>
      </div>
      <div className='flex items-center justify-center gap-3'>
        <IoIosMore className='text-white size-4 cursor-pointer' />
        <FaVideo className='text-white size-4 cursor-pointer' />
        <MdEdit className='text-white size-4 cursor-pointer' />
      </div>
    </div>
  );
}

export default UserInfo;