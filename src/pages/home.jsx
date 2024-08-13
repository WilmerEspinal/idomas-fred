import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full h-screen flex flex-col md:flex-row">
      <header className="w-full flex justify-between items-center bg-custom-teal2 p-4 md:hidden">
        <h2 className="text-2xl text-white">Aprende Ashaninka</h2>
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? (
            <span className="material-symbols-outlined text-white">close</span>
          ) : (
            <span className="material-symbols-outlined text-white">menu</span>
          )}
        </button>
      </header>

      {/* Fixed menu overlay for mobile */}
      {isMenuOpen && (
        <section className="fixed inset-0 bg-custom-teal2 z-50 p-4 md:hidden h-96">
          <nav>
            <button onClick={toggleMenu} className="text-2xl mb-4 self-end">
              <span className="material-symbols-outlined text-white">
                close
              </span>
            </button>
            <ul className="flex flex-col space-y-2 text-white">
              {[
                "saludo",
                "familia",
                "numeros",
                "aves",
                "colores",
                "animales",
                "alimentos",
                "objetos",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl bg-red-700 pt-2 pb-2 block"
                        : "text-xl hover:bg-red-700 pt-2 pb-2 block"
                    }
                    to={`/${item}`}
                    onClick={toggleMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      )}

      <section className="hidden md:block md:w-48 h-screen overflow-y-auto bg-custom-teal2">
        <h2 className="text-2xl text-center text-white">Aprende Ashaninka</h2>
        <nav className="mt-3 border-t">
          <ul className="flex flex-col space-y-2">
            {[
              "saludo",
              "familia",
              "numeros",
              "aves",
              "colores",
              "animales",
              "alimentos",
              "objetos",
            ].map((item) => (
              <li key={item}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-xl bg-red-700 pt-2 pb-2 block text-white"
                      : "text-xl hover:bg-red-700 pt-2 pb-2 block text-white"
                  }
                  to={`/${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="w-full h-full bg-custom-teal  overflow-y-auto">
        <Outlet />
      </section>
    </section>
  );
};

export default Home;
