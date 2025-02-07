import { useState } from 'react';
import useGlobalContext from '../../context/GlobalContext/useGlobalContext';
import signUpAPI from '../../services/signup';

const SignUpComponent = () => {
  // State to manage form data
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    });

    const {setModal} = useGlobalContext()

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    // Validate if passwords match
    const validateData = () => {
        const { password, confirmPassword,name } = formData;
        if (name.length <= 6) {
            setModal({
                'isOpen' : true,
                'isError' : true,
                'message' : `Name Must Be At Least 6 Characters`,
            })
        }
        if (password && confirmPassword && password !== confirmPassword) {
            setModal({
                'isOpen' : true,
                'isError' : true,
                'message' : `Passwords Mismatch`,
            })
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        validateData();
        
        // Process form data
        console.log('Form data:', formData);
        signUpAPI()
        
    };

    return (
        <section className="flex justify-center">
        <div className="mb-10 mx-5 group relative w-96 overflow-hidden rounded-2xl bg-gray-300 p-1 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-slate-200 hover:to-charlie">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-xl bg-slate-800 p-6">
            <h2 className="text-center text-2xl font-bold text-white mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                </div>
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                </div>
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                </div>
                <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                </div>
                <button
                type="submit"
                className=" hover:cursor-pointer w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                Sign Up
                </button>
            </form>
            </div>
        </div>
        </section>
    );
};

export default SignUpComponent;
