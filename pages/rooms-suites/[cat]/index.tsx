import Link from "next/link";
import Image from "next/image";
import { URL } from "url";
export default function AccomodationCat({ data, catData }) {
  return (
    <div className="wrappe wrapp">
      <div>
        {catData.map((im) => (
          <div key={im.id}>
            <div className="next__image"
              style={{
                backgroundImage: `url(${im.image})`,
                width: "100%",
                height: "700px",
                backgroundPosition: "center",
              }}
            ></div>
            <h1 className="des__title">{im.destitle}</h1>
            <div className="border"></div>
          </div>
        ))}
      </div>
      <div className="suites__image">
        {data.map((ev) => (
          <Link
            className="cat__card"
            key={ev.id}
            href={`/rooms-suites/${ev.id}/${ev.slug}`}
            passHref
          >
            <Image alt={ev.title} className='cat__image' width={300} height={300} src={ev.imgi} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const { accomodation__categories } = await import("../../Data/data.json");
  const allPaths = accomodation__categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  console.log(context);
  const { all__accomodation } = await import("../../Data/data.json");
  const { accomodation__categories } = await import("../../Data/data.json");
  const id = context?.params.cat;
  const data = all__accomodation.filter((ac) => ac.id === id);
  const catData = accomodation__categories.filter((ca) => ca.id === id);
  return {
    props: { data, catData },
  };
}
