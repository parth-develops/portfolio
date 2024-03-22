import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='block mb-2 text-xs'>&copy; {currentYear} Parth. All rights reserved.</small>
            <p><span className='font-semibold'>About this website:</span> Built with React and Next.js (App router & server actions), TypeScript, Tailwind, Framer motion and hosted on vercel.</p>
        </footer>
    )
}
