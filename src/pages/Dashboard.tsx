import { Home, Info, LogOut } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="/dashboard" className="text-white hover:text-gray-300 flex items-center">
          <Home className="mr-2" size={20} />
          Home
        </a>
        <a href="/about" className="text-white hover:text-gray-300 flex items-center">
          <Info className="mr-2" size={20} />
          About
        </a>
      </div>
      <button
        onClick={() => {
          window.location.href = '/signin';
        }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <LogOut className="mr-2" size={20} />
        Logout
      </button>
    </div>
  </nav>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Welcome</h1>
          <p className="text-gray-600">Happy log in or sign up!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;