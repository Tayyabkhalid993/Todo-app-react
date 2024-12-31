import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 p-4 backdrop-blur-md shadow-2xl w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Todo App. All Rights Reserved.
        </p>
        <p className="text-sm">
          Made with ❤️ by{' '}
          <a
            href="https://www.linkedin.com/in/muhammad-tayyab-khalid-tayyabk993"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:bg-gray-300"
          >
            Tayyab Khalid
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
