import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoSearchSharp } from 'react-icons/io5';
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className='h-full px-8'>
      {/* search */}
      <div className='flex justify-between items-center py-7 gap-3'>
        <div className='flex bg-gray-500 bg-opacity-70 gap-2 rounded-xl items-center py-1 justify-between w-full'>
          <IoSearchSharp className='size-5 ml-3' />
          <input
            className='border-none outline-none text-white bg-transparent w-full rounded-xl'
            placeholder='Search'
          />
        </div>
        <div
          className='cursor-pointer bg-gray-700 rounded-full p-1 hover:scale-125 transform ease-out'
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? (
            <FaMinus className='size-4' />
          ) : (
            <FaPlus className='size-4' />
          )}
        </div>
      </div>

      {/* chat list */}
      <div className='overflow-y-auto flex flex-col max-h-[80%]'>
        <div className='pb-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
        <div className='py-3 flex items-center cursor-pointer gap-3 border-b border-[#dddddd35]'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='size-11 rounded-full'
          />
          <div className='texts flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-extralight'>Hello Jane </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
