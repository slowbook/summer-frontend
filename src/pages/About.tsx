import { Home, Info, LogOut } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-white hover:text-gray-300 flex items-center">
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

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to our platform! We are dedicated to providing the best user experience and innovative solutions for our customers.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to empower users with cutting-edge technology and exceptional service. We strive to create a seamless and enjoyable experience for all our users.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Innovation: We constantly seek new ways to improve and evolve.</li>
            <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
            <li>User-Centric: Our users' needs are at the heart of everything we do.</li>
            <li>Excellence: We are committed to delivering top-quality products and services.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;