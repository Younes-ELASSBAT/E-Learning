import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Fonction pour vérifier si un lien est actif
  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-indigo-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
        <div className="p-6 flex items-center justify-between">
          <h1 className={`text-2xl font-bold ${!sidebarOpen && 'hidden'}`}>Admin Panel</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white focus:outline-none">
            {sidebarOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            )}
          </button>
        </div>
        <nav className="mt-6">
          {/* Dashboard Link */}
          <NavLink 
            to="/Admin"
            end
            className={({ isActive }) => 
              `flex items-center px-6 py-3 ${isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'} transition-colors duration-200`
            }
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            {sidebarOpen && <span>Tableau de bord</span>}
          </NavLink>

          {/* Courses Management */}
          <div className="mt-4">
            <h2 className={`px-6 mb-2 text-sm text-indigo-300 uppercase font-semibold ${!sidebarOpen && 'hidden'}`}>Cours</h2>
            <NavLink 
              to="/Admin/CoursesIndex"
              className={`flex items-center px-6 py-3 ${isActive('Courses') ? 'bg-indigo-700' : 'hover:bg-indigo-700'} transition-colors duration-200`}
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              {sidebarOpen && <span>Gestion des cours</span>}
            </NavLink>
            <NavLink 
              to="/Admin/CoursesCreate"
              className={`flex items-center px-6 py-3 ${isActive('CoursesCreate') ? 'bg-indigo-700' : 'hover:bg-indigo-700'} transition-colors duration-200`}
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              {sidebarOpen && <span>Ajouter un cours</span>}
            </NavLink>
          </div>

          {/* Categories Management */}
          <div className="mt-4">
            <h2 className={`px-6 mb-2 text-sm text-indigo-300 uppercase font-semibold ${!sidebarOpen && 'hidden'}`}>Catégories</h2>
            <NavLink 
              to="/Admin/Categoryindex"
              className={`flex items-center px-6 py-3 ${isActive('Category') ? 'bg-indigo-700' : 'hover:bg-indigo-700'} transition-colors duration-200`}
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              {sidebarOpen && <span>Liste des catégories</span>}
            </NavLink>
            <NavLink 
              to="/Admin/Categoryajout"
              className={`flex items-center px-6 py-3 ${isActive('Categoryajout') ? 'bg-indigo-700' : 'hover:bg-indigo-700'} transition-colors duration-200`}
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              {sidebarOpen && <span>Ajouter une catégorie</span>}
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div className="rounded-full h-8 w-8 bg-indigo-600 flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>

        {/* Footer */}
        
      </div>
    </div>
  );
}