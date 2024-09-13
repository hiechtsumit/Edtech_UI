import React, { useEffect, useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  useEffect(()=>{
    if(email !== ''){
      if(validateEmail(email)){
        setError('')
      }else{
        setError('Invalid email address')
      }
    }else{
      setError('')
    }
  },[email])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
      // Here you would typically send the email to your backend
      console.log('Submitting email:', email);
      // Reset form after successful submission
      setEmail('');
    }
  };

  return (
    <div className=" mx-auto mt-10 p-20 bg-[#FDF3F1]">
      <h2 className="text-center text-[#96BA7B] font-semibold">Newsletter</h2>
      <h3 className="text-xl font-bold my-2 text-center text-black-blue">Watch our Courses</h3>
      <p className="text-sm mb-4 text-center">
        Problems trying to resolve the conflict between<br/>the two major realms of Classical physics: Newtonian mechanics
      </p>
      <form onSubmit={handleSubmit} className="py-4">
        <div className="w-full flex flex-col justify-center sm:flex-row">
          <input
          name='email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="max-w-md flex-grow px-4 py-2 border rounded-l-sm focus:outline-none focus:ring-[0.5px] focus:ring-[#96BA7B]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#96BA7B] font-semibold text-white rounded-r-sm hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
        {error && <p className="w-full text-center mt-2 text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default NewsletterSignup;