const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-3 sm:gap-0">
          <div className="flex flex-col items-center gap-2 sm:hidden">
            <span className="text-lg font-bold text-white">A.S.</span>
            <span className="text-zinc-400 text-xs text-center">
              {currentYear} © Designed & Developed By
            </span>
            <span className="text-white text-sm font-medium">
              Abhishek Singh
            </span>
          </div>

          <div className="hidden sm:flex items-center justify-between w-full">
            <span className="text-xl font-bold text-white hover:text-zinc-300 transition-colors cursor-pointer">
              A.S.
            </span>
            <span className="text-zinc-400 text-base">
              © Designed & Developed By{" "}
              <span className="text-white font-medium hover:text-zinc-300 transition-colors cursor-pointer">
                Abhishek Singh
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
