import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(newMeetup) {
    fetch("https://meetup-app-c9b8f-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
