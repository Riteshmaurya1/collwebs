
// import React from 'react'
// import { Link, useLocation } from 'react-router-dom'

// const Navbar = () => {
//   const location = useLocation()
//   return (
//     <nav className="fixed top-2 left-0 right-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-md z-50"
//       style={{
//         left: '50%',
//         transform: 'translateX(-50%)',
//         maxWidth: '360px', // or max-w-7xl (max-width in px)
//         width: 'auto',
//         borderRadius: '9999px',
//       }}>
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
//         <ul className="flex justify-center gap-8 text-white text-lg font-medium">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'Projects', path: '/projects' },
//             { name: 'Contact', path: '/contact' }
//           ].map(({ name, path }) => (
//             <li key={name}>
//               <Link
//                 to={path}
//                 className={`relative hover:bg-amber-500 px-3 py-2 rounded-full hover:text-black transition-colors duration-300
//                    border-3 border-black/10 ${location.pathname === path ? 'text-white font-semibold' : ''
//                   }`}
//               >
//                 {name}
//                 {location.pathname === path}
//                 {/* && (
//                   <span className="absolute left-0 bottom-0 w-full h-[2px] bg-amber-400 rounded" />
//                 )} */}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar


import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <nav
      className="fixed top-2 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md shadow-md"
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '360px',
        width: 'auto',
        borderRadius: '9999px',
      }}
    >
      <div className="px-6 py-3 flex items-center justify-center">
        <ul className="flex justify-center gap-6 text-white text-lg font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' }
          ].map(({ name, path }) => {
            const isActive = location.pathname === path
            return (
              <li key={name}>
                <Link
                  to={path}
                  className={`
                    relative px-4 py-2 rounded-full transition-all duration-300
                    ${isActive
                      ? 'bg-amber-500 text-black font-semibold'
                      : 'hover:bg-amber-500 hover:text-black'}
                  `}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
