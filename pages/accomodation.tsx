import Link from "next/link";
import Image from "next/image";
export default function Acoomodation({ data }): JSX.Element {
  return (
    <>
      <div className="acomo">
        <div className="acomo__image"></div>
        <div className="ac-content">
            <h1>Spacious Downtown Chicago Hotel Rooms & Suites</h1>
            <p>
            In addition to historic charm and standout location, The Whitehall Hotel features sophisticated accommodations to serve as the perfect downtown base for your Chicago vacation. Our boutique hotel rooms and suites are luxuriously appointed with features unique to The Whitehall. Our spacious suites provide you with options for one or two-bedroom configurations. Feel the warm and welcoming ambiance of 
            The Whitehall, a gem among suite hotels in Chicago.
            </p>
        </div>
        <div className="acomo__body">
          {data.map((ac): JSX.Element => (
            <Link className="card" href={`rooms-suites/${ac.id}`} key={ac.id}>
              <Image alt={ac.title} width={600} height={400} src={ac.imgi} />
              <div className="content">
                <h2>{ac.title}</h2>
                <h3>{ac.description}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const { accomodation__categories } = await import("./Data/data.json");
  return {
    props: {
      data: accomodation__categories,
    },
  };
}
