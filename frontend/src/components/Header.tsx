import React from "react";

const Header = () => {
  return (
    <header className="bg-red shadow-sm sticky top-0 z-50 h-16">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <p className="text-2xl font-bold text-white">Mi Nombre</p>
      </div>
    </header>
  );
};

export default Header;