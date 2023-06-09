const Layout = ({ children }) => {
    return (
      <div className="container mx-auto mt-12 bg-gradient-to-r from-green-100 to-green-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;