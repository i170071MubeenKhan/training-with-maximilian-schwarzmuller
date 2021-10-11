import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const context = useContext(FavoritesContext);

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
              <span className={classes.badge}>{context.favorites.length}</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
