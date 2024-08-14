import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../lib/firebase';

const Login = () => {
  const [avator, setAvator] = useState({
    file: null,
    url: '',
  });

  const handleAvator = (e) => {
    if (e.target.files[0]) {
      setAvator({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  // it should be an async function becz we are making dadabase request.

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    // console.log(username)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className='login flex items-center gap-32 justify-center w-full'>
      <div className='item flex flex-col items-center gap-5 justify-center'>
        <div className='font-bold text-2xl mb-3'>
          Welcome <span className='text-[#FFA500]'>back</span>
        </div>
        <form
          className='flex flex-col items-center justify-center gap-5'
          onSubmit={handleLogin}
        >
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='px-5 py-3 border-none outline-none bg-[rgba(248,249,252,0.53)] rounded-md placeholder:text-gray-800 text-gray-800'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='px-5 py-3 border-none outline-none bg-[rgba(248,249,252,0.53)] rounded-md placeholder:text-gray-800 text-gray-800'
          />
          <button className='bg-[#FFA500] bg-opacity-75 w-full py-2 rounded-md my-2 text-lg font-semibold hover:scale-105 transform cursor-pointer'>
            Sign In
          </button>
        </form>
      </div>

      <div className='seperator border-r border-[#dddddd35] h-5/6 w-[2px]' />

      <div className='item flex flex-col items-center gap-5 justify-center'>
        <div className='mb-3 font-bold text-2xl'>
          Create an <span className='text-[#FFA500]'>Account</span>
        </div>
        <form
          className='flex flex-col items-center justify-center gap-5'
          onSubmit={handleRegister}
        >
          <label
            htmlFor='file'
            className='flex items-center justify-between cursor-pointer underline gap-5'
          >
            <img
              src={
                avator.url ||
                'https://www.kindpng.com/picc/m/394-3947019_round-profile-picture-png-transparent-png.png'
              }
              alt='image'
              className='size-12 object-cover rounded-xl opacity-60'
            />
            Upload an image
          </label>
          <input
            type='file'
            id='file'
            style={{ display: 'none' }}
            onChange={handleAvator}
          />
          <input
            type='text'
            placeholder='Username'
            name='username'
            className='px-5 py-3 border-none outline-none bg-[rgba(248,249,252,0.53)] rounded-md placeholder:text-gray-800 text-gray-800'
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='px-5 py-3 border-none outline-none bg-[rgba(248,249,252,0.53)] rounded-md placeholder:text-gray-800 text-gray-800'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            className='px-5 py-3 border-none outline-none bg-[rgba(248,249,252,0.53)] rounded-md placeholder:text-gray-800 text-gray-800 '
          />
          <button className='bg-[#FFA500] bg-opacity-75 w-full py-2 rounded-md my-2 text-lg font-semibold cursor-pointer hover:scale-105 transform'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
