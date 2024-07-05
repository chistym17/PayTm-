import React from 'react';
import './Paylink.css'; // Ensure to create this file for custom styles
import { useSession, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { data: session } = useSession();
    const name = session?.user?.name;

    const handlesignout = () => {
        signOut()
        toast.success('SignOut successful')
    
      }
    
    return (
        <div>
            <nav className="navbar flex justify-between items-center p-4 md:p-6 bg-gray-800 text-white">
                <div className="text-xl md:text-2xl font-bold text-shadow">
                    Paylink
                    <h2 className="text-sm md:text-xl text-purple-200 mb-0">Secure and Fast</h2>
                </div>
                <div className="flex space-x-4 md:space-x-8">
                    {!session ? (
                        <>
                            <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-home mr-2"></i>Home</a>
                            <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-info-circle mr-2"></i>Transfer</a>
                            <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-cogs mr-2"></i>Send</a>
                            <a href="#" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-envelope mr-2"></i>Contact</a>
                            <a href="/SignIn" className="hover:underline text-base md:text-lg border border-white px-3 py-3 rounded-md"><i className="fas fa-user-plus mr-2"></i>Sign up</a>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center space-x-4">
                                <span className="rounded-full  px-3 py-3 text-xl md:text-xl">Welcome, {name}</span>
                                <a href="/dashboard" className="hover:underline text-base md:text-lg flex items-center"><i className="fas fa-tachometer-alt mr-2"></i>Dashboard</a>
                                <button 
                                    onClick={handlesignout} 
                                    className="hover:underline text-base md:text-lg border border-white px-3 py-3 rounded-md">
                                    <i className="fas fa-sign-out-alt mr-2"></i>Logout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
