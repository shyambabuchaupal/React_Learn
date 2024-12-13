const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-3 shadow-lg">
        <h1>Logo</h1>
        <div className="flex justify-between gap-5">
          <p>Home</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </nav>
    </>
  );
};

export default Header;
