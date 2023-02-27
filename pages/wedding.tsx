import Link from "next/link";
export default function Wedding() {
  return (
    <main>
      <div className="wedding">
        <div className="wedding__image"></div>
        <div className="wedding__content">

          <h1>Weddings at The Whitehall</h1>
          <h6>Say Your Vows In One of Chicago's Most Romantic Hotels</h6>
          <p>
            The historic Whitehall Hotel offers beautiful intimate ceremony
            venues and open spaces ready for dancing ideal for value-minded
            couples. Our onsite catering allows custom menus and our events team
            will assist you at every step to execute the wedding day of your
            dreams. Plus, our convenient downtown Chicago location ensures your
            guests will enjoy an unforgettable stay with ready access to The
            Windy City's best entertainment and attractions. Say your vows in
            one of Chicago's most romantic hotels.
          </p>
        </div>
        <div className="eventspace__plan">
          <Link href="/" className="plan__content">
            START PLANNING YOUR EVENT
          </Link>
        </div>
        <div className="wedding__display">
            <div className="salon1">
               <div className="display__image"></div>
               <div className="display__content">
                <h1>Salon I,II,III</h1>
                <p>Spread out in these spacious meeting and conference venues offering 1166 square feet of space with upscale, classic décor.</p>
               </div>
            </div>
            <div className="colo1">
               <div className="display__image"></div>
               <div className="display__content">
                <h1>Colonnade</h1>
                <p>Enjoy 532 square feet of space in this flexible venue offering upscale, classic décor for any event.</p>
               </div>
            </div>
            <div className="plaza1">
               <div className="display__image"></div>
               <div className="display__content">
                <h1>Plaza</h1>
                <p>Enjoy 395 square feet of space in this flexible, more intimate venue featuring upscale, classic décor.</p>
               </div>
            </div>
        </div>
      </div>
    </main>
  );
}
