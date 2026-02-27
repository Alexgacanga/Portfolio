export default function Header() {
return (
  <div className="flex justify-center">
    <header className="fixed top-5 lg:top-8 md:top-7 sm:top-6 mx-3 sm:left-auto sm:right-auto left-0 right-0
                       flex items-center justify-between
                       px-4 py-3 sm:py-4 md:py-5 lg:py-6
                       shadow rounded-full
                       bg-white w-auto sm:w-2/3">
      <a href="/" className="shrink-0">
        <p className="text-red-700 [@media(min-width:350px)]:whitespace-nowrap [@media(min-width:310px)]:w-10 font-bold text-sm lg:text-lg md:pl-10">
          Alex Gacanga
        </p>
      </a>
      <nav className="flex [@media(min-width:365px)_and_(max-width:640px)]:gap-4 [@media(min-width:310px)_and_(max-width:365px)]:gap-2 pl-2 text-xs text-gray-900 font-bold sm:gap-8 sm:justify-around md:pr-10 lg:text-sm">
        <a className="hover:text-red-700" href="#">Home</a>
        <a className="hover:text-red-700" href="#">About</a>
        <a className="hover:text-red-700" href="#">Projects</a>
        <a className="hover:text-red-700" href="#">Contacts</a>
      </nav>
    </header>
  </div>
);
}
