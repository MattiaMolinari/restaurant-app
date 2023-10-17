export default function HoursAndLocation({ id }: { id: string }) {
  return (
    <>
      <h2 id={id} className="section-title">
        HOURS AND LOCATION
      </h2>
      <div className="underline"></div>
      <p>map</p>
      <p>address</p>
      <p>timetable</p>
      <ul>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wendsday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
        <li>Sunday</li>
      </ul>
    </>
  );
}
