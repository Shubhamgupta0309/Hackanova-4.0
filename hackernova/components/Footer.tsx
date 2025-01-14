const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-4 md:mb-0">
          &copy; 2023 Hackernova 4.0. All rights reserved.
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-500 transition-colors">Privacy Policy</a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">Terms of Service</a>
          <a href="#" className="text-white hover:text-orange-500 transition-colors">Contact Us</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

