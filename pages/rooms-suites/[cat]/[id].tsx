import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
const Final=({data})=>{
    const router=useRouter()
    const eventId=router?.query.slug;
    return(
       <div className='cat_specific'>
        <Image src={data.img}  alt={data.title} width={500} height={500}></Image>
       <div>
       <h2>{data.title}</h2>
        <p>{data.slugDescription}</p>
        <Link href='/' passhref className='book'>BOOK NOW</Link>
       </div>
        </div>
    )
}
export default Final;
export async function getStaticPaths(){
    const { all__accomodation  } = await import("../../Data/data.json");
    const allpaths=all__accomodation .map((path)=>{
        return{
            params:{
                cat:path.id,
                id:path.slug,
                // id:path.id
            }
        }
    })
    return{
        paths:allpaths,
        fallback:true
    }
}
export async function getStaticProps(context){
    const id=context.params.id;
    const { all__accomodation } = await import("../../Data/data.json");
     const allCat=all__accomodation.find(ev=>id===ev.slug)
    return{
        props:{data:allCat}
    }
}