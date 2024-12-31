import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/50 p-4 backdrop-blur-md shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"><a href="/"> Todo App</a></h1>
        <nav>
          <ul className="flex space-x-4 ">
            <li>
              <a href="/" className="hover:text-gray-300 transition duration-300 ease-in-out">Home</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300 transition duration-300 ease-in-out">About</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300 transition duration-300 ease-in-out">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
