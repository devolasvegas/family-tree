const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-gray-800 text-white">
      <div className="text-lg font-bold">Family Tree</div>
      <div>
        <a href="/" className="mx-2 hover:underline">
          Home
        </a>
        <a href="/about" className="mx-2 hover:underline">
          About
        </a>
        <a href="/contact" className="mx-2 hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
