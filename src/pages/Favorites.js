import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

export default function FavoritesPage() {
  const context = useContext(FavoritesContext);

  let content;

  if (context.favorites.length === 0) {
    content = <p>You got no favorites yet.</p>;
  } else {
    content = <MeetupList meetups={context.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
