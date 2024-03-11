import React from 'react'; 

export default function Footer() {
    return(
    <footer className="bg-black text-white p-1 mt-8">
    <div className="flex flex-col items-center mt-3">
         <nav className="navbar flex space-x-6 justify-center">
         <ul className="flex space-x-4 ">
         <li><a href="/" className="hover:text-orange-500">Home</a></li>
        <li><a href="/movie" className="hover:text-orange-500">Movies</a></li>
        <li><a href="/series" className="hover:text-orange-500">Series</a></li>
        <li><a href="/bookmarks" className="hover:text-orange-500">Bookmarks</a></li>
         </ul>
          </nav>
        <p className="mt-4">&copy; 2024&nbsp; 
        <span className="text-white  ">JSE</span>
        <span className="text-orange-500">Movies</span>. All rights reserved.</p>
      </div>
    </footer>

    );
}