import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
const Detail = () => {
  return (
    <div className='w-1/4 px-8 py-3'>
    {/* top */}
      <div className=' flex flex-col items-center justify-center gap-2 pb-5'>
        <img
          src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
          alt='user'
          className='rounded-full size-[70px]'
        />
        <span className='font-semibold'>Jane Doe</span>
        <p className='text-xs text-gray-200 font-light'>
          lorem text text lorem text text
        </p>
      </div>


      {/* border */}
      <div className='border-t-2 border-[#dddddd35] pb-3' />

      {/* middle */}
      <div>
        <div className='flex items-center justify-between py-2'>
          <span className='text-sm text-gray-100 font-semibold'>
            Chat Settings
          </span>
          <div className='bg-gray-700 rounded-full hover:scale-125 transform ease-out cursor-pointer'>
            <MdKeyboardArrowUp className='h-5 w-5' />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between py-2'>
        <span className='text-sm text-gray-100 font-semibold'>
          Privacy & help
        </span>
        <div className='bg-gray-700 rounded-full hover:scale-125 transform ease-out cursor-pointer'>
          <MdKeyboardArrowUp className='h-5 w-5 ' />
        </div>
      </div>

      <div className='flex items-center justify-between pt-2 pb-4'>
        <span className='text-sm text-gray-100 font-semibold'>
          Shared photos
        </span>
        <div className='bg-gray-700 rounded-full hover:scale-125 transform ease-out cursor-pointer'>
          <MdKeyboardArrowDown className='h-5 w-5' />
        </div>
      </div>

      <div className='py-1 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <img
            src='https://cdn.pixabay.com/photo/2017/07/13/19/51/sunset-2501727_960_720.png'
            className='size-8'
          />
          <span className='text-sm text-gray-100'>photo_2024_2.png</span>
        </div>
        <HiOutlineDotsVertical className='cursor-pointer hover:scale-125 transform ease-out' />
      </div>

      <div className='py-1 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <img
            src='https://cdn.pixabay.com/photo/2017/07/13/19/51/sunset-2501727_960_720.png'
            className='size-8'
          />
          <span className='text-sm text-gray-100'>photo_2024_2.png</span>
        </div>
        <HiOutlineDotsVertical className='cursor-pointer hover:scale-125 transform ease-out' />
      </div>

      <div className='py-1 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <img
            src='https://cdn.pixabay.com/photo/2017/07/13/19/51/sunset-2501727_960_720.png'
            className='size-8'
          />
          <span className='text-sm text-gray-100'>photo_2024_2.png</span>
        </div>
        <HiOutlineDotsVertical className='cursor-pointer hover:scale-125 transform ease-out' />
      </div>

      <div className='py-1 flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <img
            src='https://cdn.pixabay.com/photo/2017/07/13/19/51/sunset-2501727_960_720.png'
            className='size-8'
          />
          <span className='text-sm text-gray-100'>photo_2024_2.png</span>
        </div>
        <HiOutlineDotsVertical className='cursor-pointer hover:scale-125 transform ease-out' />
      </div>

      <div className='flex items-center justify-between pb-2 pt-4'>
        <span className='text-sm text-gray-100 font-semibold'>
          Shared Files
        </span>
        <div className='bg-gray-700 rounded-full hover:scale-125 transform ease-out cursor-pointer'>
          <MdKeyboardArrowUp className='h-5 w-5' />
        </div>
      </div>


      {/* buttons */}
      <button className='bg-red-900 bg-opacity-60 w-full py-2 rounded-md my-2 text-sm font-semibold'>
        Block User
      </button>
      <button className='bg-[#FFA500] bg-opacity-75 w-full py-2 rounded-md my-2 text-sm font-semibold'>
        Logout
      </button>
    </div>
  );
};

export default Detail;
