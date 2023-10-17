import { useState, useEffect } from "react";
import { review } from "./data";

export default function Reviews({
  id,
  reviews,
}: {
  id: string;
  reviews: Array<review>;
}) {
  const [index, setIndex] = useState(0);

  function showReview(iterate: number) {
    let newIndex = index + iterate;
    if (newIndex < 0) newIndex += reviews.length;
    if (newIndex >= reviews.length) newIndex -= reviews.length;
    setIndex(newIndex);
  }

  return (
    <>
      <h2 id={id} className="section-title">
        REVIEWS
      </h2>
      <button onClick={() => showReview(1)}>Previous</button>
      <div>
        <Review review={reviews[index]} />
      </div>
      <button onClick={() => showReview(-1)}>Next</button>
    </>
  );
}

function Review({ review }: { review: review }) {
  return (
    <>
      <article key={review.id}>
        <h4>{review.name}</h4>
        <p className="title">{review.points}</p>
        <p className="text">{review.description}</p>
      </article>
    </>
  );
}
