import React from 'react';

interface FooterProps {
  year: number;
}

const Footer: React.FC<FooterProps> = ({ year }) => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full absolute bottom-0 left-0">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Pizza Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
