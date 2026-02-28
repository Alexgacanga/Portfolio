export default function Header() {
return (
  <div className="flex justify-center">
    <header className="z-50 fixed top-5 lg:top-8 md:top-7 sm:top-6 mx-3 sm:left-auto sm:right-auto left-0 right-0
                       flex items-center justify-between
                       px-4 py-3 sm:py-4 md:py-5 lg:py-6
                       shadow rounded-full
                       bg-white w-auto sm:w-2/3">
      <a href="/" className="shrink-0">
        <p className="text-red-700 [@media(min-width:350px)]:whitespace-nowrap [@media(min-width:310px)]:w-10 font-bold text-sm font-display lg:text-lg md:pl-10">
          GAM
        </p>
      </a>
      <nav className="flex [@media(min-width:365px)_and_(max-width:640px)]:gap-5 [@media(min-width:310px)_and_(max-width:365px)]:gap-3 pl-2 text-[0.6rem] sm:text-xs text-gray-900 font-bold sm:gap-8 sm:justify-around md:pr-10 lg:text-sm">
        <a class="py-2 group" href="#">
            Home
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a class="py-2 group" href="#">
            About
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a class="py-2 group" href="#">
            Projects
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
        <a class="py-2 group" href="#">
            Contacts
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </a>
      </nav>
    </header>
  </div>
);
}