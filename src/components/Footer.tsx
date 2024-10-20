function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Contact Us Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">123 Main St,</p>
            <p className="text-sm">Rahim Yar Khan, 64200</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>
  
          {/* About Us Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to delivering top-notch services in web
              development, with a focus on customer satisfaction.
            </p>
          </div>
  
          {/* Follow Us Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
  
          {/* Reviews Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Reviews</h3>
            <p className="text-sm">
              &quot;Excellent service and support. Highly recommend!&quot;
            </p>
            <p className="text-sm">- Jane Doe</p>
            <p className="text-sm mt-4">
              &quot;Great team, very helpful and responsive!&quot;
            </p>
            <p className="text-sm">- John Smith</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  