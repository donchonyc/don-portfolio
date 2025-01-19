import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-cloud font-normal"
        ></Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li key="works">
              <Link href="#works" className="hover:text-cloud/70">
                Work
              </Link>
            </li>
            <li>
              <Link href="" className="hover:text-cloud/70">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
