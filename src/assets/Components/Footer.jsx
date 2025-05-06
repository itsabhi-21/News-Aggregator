import React from 'react'

function Footer(){
  return (
    <div>
        <footer className="bg-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">NewsBuzz</h2>
              <p className="text-sm">
                Stay updated with the latest news in entertainment, games, exclusives and more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Games</a></li>
                <li><a href="#" className="hover:text-white">Entertainment</a></li>
                <li><a href="#" className="hover:text-white">Login</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mb-2">
                <a href="#" className="hover:text-white">🌐 Facebook</a>
                <a href="#" className="hover:text-white">🐦 Twitter</a>
                <a href="#" className="hover:text-white">📸 Instagram</a>
              </div>
      <p className="text-sm mt-2">Contact: support@newsbuzz.com</p>
    </div>

  </div>

  {/* Bottom copyright */}
  <div className="text-center text-sm text-gray-500 mt-6">
    &copy; {new Date().getFullYear()} NewsBuzz. All rights reserved.
  </div>
</footer>
    </div>
  )
}

export default Footer