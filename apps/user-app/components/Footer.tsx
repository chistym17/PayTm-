
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Company Name</h3>
            <p className="text-sm">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-google"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 mt-4">
          <div className="md:col-span-1">
            <h6 className="text-lg font-semibold mb-4">Company</h6>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Careers</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h6 className="text-lg font-semibold mb-4">Products</h6>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:text-gray-400">Mobile App</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Web App</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">API</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h6 className="text-lg font-semibold mb-4">Resources</h6>
            <ul className="text-sm">
              <li><a href="#" className="text-white hover:text-gray-400">Documentation</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">Support</a></li>
              <li><a href="#" className="text-white hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h6 className="text-lg font-semibold mb-4">Contact</h6>
            <p className="text-sm">
              <i className="fas fa-map-marker-alt mr-2"></i> New York, NY 10012, US
            </p>
            <p className="text-sm">
              <i className="fas fa-envelope mr-2"></i> info@example.com
            </p>
            <p className="text-sm">
              <i className="fas fa-phone-alt mr-2"></i> +01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-400">© 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
