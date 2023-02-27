import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>RhinoLand Hotel</title>
        <meta name="description" content="RhinoLand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main>
        <div className="bg-image"></div>
        <section className="intro-section">
          <h1>Welcome to The Historic RhinoLand Hotel</h1>
          <p>
            The RhinoLand Hotel Chicago offers the charm of a bygone era in an
            upscale four-star boutique hotel setting steps from famed Michigan
            Avenue. Enjoy exquisite dining, thrilling nightlife, and an
            ineffable sense of history that pervades your experience. Dating
            back to 1928 and the birth of "The Magnificent Mile", our guests
            have included a host of celebrities such as Katharine Hepburn,
            Richard Burton, Sophia Loren, Paul Newman, and Robert Redford plus
            music icons Barry Manilow, The Beatles, and Mick Jagger. Throughout
            our rich history, The Whitehall has served as luxe accommodations
            with amenities to suit any traveler to Chicago.
          </p>
        </section>
        <section className="accomodation">
          <Link href="/accomodation">
            <h1>ACOOMODATION & HOTEL AMENITIES</h1>
            <div className="accomodation__container">
              <div className="r-h-side">
                <li>complimentary wi-fi</li>
                <li>Exclusive Handmade Hynos beds</li>
                <li>42" LED Tv & video on demand</li>
                <li>in Rooms safe</li>
              </div>
              <div className="l-h-side">
                <li>luxury bath amenities</li>
                <li>self parking</li>
                <li>meeting space and executive boardroom</li>
                <li>24hrs customer service</li>
              </div>
            </div>
            
              <button>ACCOMODATION</button>
          
          </Link>
        </section>
        <section className="explore">
          <div className="explore__image"></div>
          <div className="explore__content">
            <h2>Explore The RhinoLand</h2>
            <p>
              Preview your stay at our boutique hotel in the heart of Chicago's
              Gold Coast. Feel the welcoming ambiance of The Whitehall. We've
              kept both leisure and corporate travelers in mind. Our luxurious
              rooms and suites reflect our charming history and modern
              sensibilities.
            </p>
          </div>
        </section>
        <section className="stay">
          <a>
           <div className="stay__image"></div>
           <div className="stay__content">
            <h3>Stay&Park Package</h3>
            <h5>We saved you a parking space!</h5>
           </div>
          </a>
        </section>
        <section className="downtown">
          <div className="downtown__image"></div>
          <div className="downtown__content">
            <h1>OUR DOWNTOWN CHICAGO LOCATION</h1>
            <p>
            The Whitehall Hotel is a landmark destination on Delaware Place, one-half block west of famous Michigan Avenue shopping and dining, and east of Rush Street, a lively strip of vibrant hotspots with the combination of traditional 
            Chicago flare and international flavor in the Gold Coast neighborhood.
            </p>
            <h6>
            <Link href="/rooms-suites/suites" className="explore__downtown">EXPLORE DOWNTOWN</Link>
            </h6>
          </div>
        </section>
      </main>
    </>
  );
}
