
// SignUp Component
import React from "react";
const SignUp = ({ onNavigateToSignIn }) => {

  const [cinemaName, setCinemaName] = useState('');


  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('https://localhost:5000/api/auth/login', {
        email,
        password,
      });
      setError('');
      onSignIn(response.data.token); 
    } catch (err) {
      setError('Invalid email or password');
    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">

      <div className="bg-opacity-70 bg-black p-10 rounded-lg shadow-lg max-w-md w-full text-center">

        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Sign Up</h1>

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          className="w-full p-3 mb-4 text-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"

        />

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {success && <div className="text-green-500 mb-4">{success}</div>}



        <button

          onClick={handleSignUp}

          className="w-full p-3 bg-green-600 rounded text-white font-semibold hover:bg-green-700"

        >

          Sign Up

        </button>



        <p className="mt-6 text-sm">

          Already have an account?{' '}

          <button onClick={onNavigateToSignIn} className="text-yellow-400 font-semibold hover:underline">

            Sign In

          </button>

        </p>

      </div>

    </div>

  );

};  
export default SignUp;





