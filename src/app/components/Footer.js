const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container">
        <div className="flex pl-8 justify-start py-8">
          <a href="https://www.linkedin.com/in/donchony/">
            <p className="flex flex-wrap text-cloud hover:text-cloud/70 font-semibold">
              Connect
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/donchony/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 ml-2 mr-4 mb-4 sm:mb-2"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <div className="text-gray-500 text-left">
            <p>&copy; 2025 Don Cho. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
