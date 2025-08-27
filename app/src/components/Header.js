function Header() {
  return (
    <section>
      <nav className="flex justify-between items-center p-4 bg-black text-white md:px-16">
          <div className="logo">
            <h1>MyApp</h1>
          </div>
          <ul className="flex space-x-6">
              <li><a href="/">Company</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">PR</a></li>
              <li><a href="/contact">Community</a></li>
          </ul>
      </nav>
    </section>
  );
}

export default Header;