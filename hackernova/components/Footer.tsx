import Link from "next/link"
import { Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white mb-4 md:mb-0">&copy; 2025 Hackernova 4.0. All rights reserved | Made with ❤ by the Hackanova Team</div>
        <nav className="flex space-x-4 items-center">
          <Link
            href="https://www.instagram.com/tsdw_tcet?igsh=eXN1NDdyNjd5cG8z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.youtube.com/@tcet_tsdw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </Link>
          <Link
            href="https://t.me/+T-xYOtvS4IwwY2U9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

