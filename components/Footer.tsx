import React from 'react'

const Footer = () => {
  return (
    <footer className="text-white py-6 snap-end">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Joshua's Portfolio. All rights reserved.</p>
        <p className="text-xs mt-2">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer