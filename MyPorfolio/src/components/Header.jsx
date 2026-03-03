export default function Header() {
  const navlist = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];
  return (
    <div className="flex justify-center">
      <header
        className="z-50 fixed top-5 md:top-10 sm:top-7 mx-3 sm:left-auto sm:right-auto left-0 right-0
                       flex items-center justify-between
                       px-4 py-1 sm:py-2 lg:py-3
                       shadow-xl rounded-full
                       bg-white w-auto sm:w-3/5"
      >
        <a href="/" className="shrink-0">
          <p className="text-red-700 [@media(min-width:350px)]:whitespace-nowrap [@media(min-width:310px)]:w-10 font-bold text-lg font-display  pt-0.5 hover:text-red-600 lg:text-3xl md:pl-10">
            GAM
          </p>
        </a>
        <nav className="flex [@media(min-width:365px)_and_(max-width:640px)]:gap-5 [@media(min-width:310px)_and_(max-width:365px)]:gap-3 pl-2 text-[0.6rem] sm:text-xs text-gray-900 font-bold sm:gap-8 sm:justify-around md:pr-10 lg:text-sm">
          <ul className="flex flex-row">
            {navlist.map((item, index) => (
              <li key={index} className="px-2 py-1 group">
                <a href={item.href} className="">
                  {item.name}
                  <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
