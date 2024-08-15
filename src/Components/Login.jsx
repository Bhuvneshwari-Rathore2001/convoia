import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth, db } from '../lib/firebase';
import upload from '../lib/upload';

const Login = () => {
  const [avator, setAvator] = useState({
    file: null,
    url: '',
  });

  const [loading, setLoading] = useState(false);

  const handleAvator = (e) => {
    if (e.target.files[0]) {
      setAvator({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  // ********************************************** Register *******************************************

  // it should be an async function becz we are making database request.
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. ********************* Authentication by using email and password. ******************************

    // create here a form data ....target represents our form and inside this form I can reach my inputs using their names.
    const formData = new FormData(e.target);

    // using this we can read to our username email and password. It's going to come from this formData to do that we can use Object fromEntries and pass here our form data.
    const { username, email, password } = Object.fromEntries(formData);

    // Here we are going to check in console
    // console.log(username)

    // 2. ************************** Create a user using email and password. ****************************

    // Firstly going to write a try and catch block if we have any error we are going to show it here.
    try {
      // we are going to call createUserWithEmailAndPassword method and going to pass our inputs.
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // now we check firebase authentication and there has user id nd user thats how we created user.

      //
      const imgUrl = await upload(avator.file);

      // 3. ***************code for database... Here we copy paste code from add data docs ****************

      // in this setDocs method we are going to pass database . Here 'users' is a collection name.
      await setDoc(doc(db, 'users', res.user.uid), {
        username: username,
        email: email,
        avator: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      // again create setDocs becz when we login remember we are going to patch our chats but at the beginning of course it's going to be an empty array.
      await setDoc(doc(db, 'userchats', res.user.uid), {
        chats: [],
      });

      // Now we can check firebase database after sign up and there is information

      toast.success('Account created! You can login now!');
    } catch (err) {
      console.log(err);

      // sowing error message by using toast library
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ********************************************** Sign In *******************************************

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  // How we are going to know we are logged in we have to store our user informaation somewhere if we using firebase so we use useeffect hook in app.jsx file

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
          <button
            className='bg-[#FFA500] bg-opacity-75 w-full py-2 rounded-md my-2 text-lg font-semibold hover:scale-105 transform cursor-pointer'
            disabled={loading}
          >
            {loading ? 'Loading' : 'Sign In'}
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

          {/* After creating user , we can store this username and this avator into our database. */}

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
          <button
            className='bg-[#FFA500] bg-opacity-75 w-full py-2 rounded-md my-2 text-lg font-semibold cursor-pointer hover:scale-105 transform'
            disabled={loading}
          >
            {loading ? 'Loading' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
