import Link from "next/link";
export default function EventSpaces() {
  return (
    <main>
      <div className="eventspace">
        <div className="eventspace__image"></div>
        <div className="eventspace__content">
          <h1>Our Event Spaces</h1>
          <h6>Preview The Many Venue Options Available</h6>
          <p>
            Discover the ideal venues for productive meetings and conferences
            and memorable social events in Chicago at The Whitehall Hotel. Our
            event spaces include spacious banquet facilities, intimate meeting
            rooms, reception ballrooms, plush lounge area, and more - all
            customizable to your event. Our onsite event planning team,
            available group rates, chic décor, and comfortable ambiance ensure
            event success. Preview the options below then contact us to start
            planning.
          </p>
        </div>
        <div className="eventspace__plan">
          <Link href="/" className="plan__content">
            START PLANNING YOUR EVENT
          </Link>
        </div>
        <div className="eventspace__display">
          <div className="salon p-1">
            <div className="salon__image"></div>
            <div className="salon__content">
              <h1>Salon I,II,III</h1>
              <p>
                Spread out in these spacious meeting and conference venues
                offering 1166 square feet of space with upscale, classic décor.
              </p>
            </div>
          </div>
          <div className="colo p-2">
            <div className="colo__image"></div>
            <div className="colo__content">
              <h1>Colonnade</h1>
              <p>
                Enjoy 532 square feet of space in this flexible venue offering
                upscale, classic décor for any event.
              </p>
            </div>
          </div>
          <div className="plaza p-3">
            <div className="plaza__image"></div>
            <div className="plaza__content">
              <h1>Plaza</h1>
              <p>
                Enjoy 395 square feet of space in this flexible, more intimate
                venue featuring upscale, classic décor.
              </p>
            </div>
          </div>
          <div className="exe p-4">
            <div className="exe__image"></div>
            <div className="exe__content">
              <h1>Executive Boardroom</h1>
              <p>
                Our elegant 273 foot executive boardroom is an intimate space
                offering the ideal setting for private meetings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
