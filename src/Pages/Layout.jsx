import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <header>
              <div className="header">
                  <h1>Cat Search</h1>
          <Link to="/">Home</Link>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
