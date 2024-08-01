// import EmojiPicker from 'emoji-picker-react';
// import { useState } from 'react';
import { BsEmojiWinkFill } from 'react-icons/bs';
import {
  FaCamera,
  FaImage,
  FaInfo,
  FaMicrophone,
  FaPhone,
} from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa6';

const Chat = () => {
  // const [openEmoji, setOpenEmoji] = useState(false);

  return (
    <div className='border-r-2 pb-10 border-[#dddddd35] w-1/2 py-3'>
      {/* top */}
      <div className='px-8 flex items-center justify-between pb-2'>
        <div className='flex items-center gap-3'>
          <img
            src='https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
            alt='user'
            className='rounded-full size-11'
          />
          <div className='flex flex-col gap-[0.5px]'>
            <span className='text-sm text-gray-100 font-semibold'>
              Jane Doe
            </span>
            <p className='text-xs text-gray-200 font-light'>
              lorem text text lorem text text
            </p>
          </div>
        </div>
        <div className='flex items-center gap-5 '>
          <FaPhone className='text-white size-4 cursor-pointer' />
          <FaVideo className='text-white size-4 cursor-pointer' />
          <FaInfo className='text-white size-4 cursor-pointer' />
        </div>
      </div>

      {/* middle */}
      <div className='border-t-2 border-b-2 border-[#dddddd35] h-[85%] px-8 pb-2'></div>

      {/* bottom */}
      <div className='flex items-center justify-center px-8'>
        <div className='flex items-center justify-between gap-5'>
          <FaImage className='text-white size-5 cursor-pointer' />
          <FaCamera className='text-white size-5 cursor-pointer' />
          <FaMicrophone className='text-white size-5 cursor-pointer' />
          <input
            className='rounded-lg px-3 py-1 border-none outline-none text-white bg-gray-500 bg-opacity-70'
            type='text'
            placeholder='Type a message...'
          />
          <BsEmojiWinkFill
            className='text-white size-5 cursor-pointer'
            // onClick={() => setOpenEmoji((prev) => !prev)}
          />
          {/* <EmojiPicker openEmoji={openEmoji} /> */}
          <button className='bg-[#FFA500] bg-opacity-75 py-1 px-7 rounded-lg text-white'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
