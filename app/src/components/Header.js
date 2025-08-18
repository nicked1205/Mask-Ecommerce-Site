function Header() {
  return (
    <section>
      <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
          <div className="logo">
            <h1>MyApp</h1>
          </div>
          <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
          </ul>
      </nav>
    </section>
  );
}

export default Header;