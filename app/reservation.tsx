import { FormEvent } from "react";

export default function Reservation({ id }: { id: string }) {
  return (
    <>
      <h2 id={id} className="section-title">
        RESERVATION
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTimeout(() => {
            alert("Your reservation has been made!");
          }, 3000);
        }}
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Telephone" />
        <input type="number" placeholder="Number of people" />
        <input type="datetime-local" placeholder="Date" />
        <button type="submit">Make reservation</button>
      </form>
    </>
  );
}
