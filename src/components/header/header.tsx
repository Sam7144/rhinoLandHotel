import Link from "next/link";
import React, { useRef} from "react";
export default function Header(){
  const menuSideBar=useRef<HTMLUListElement>()
  const ele=menuSideBar.current;
  const sideM =useRef<HTMLInputElement>(null);
  
  const Toggle = () => {
    let toggId=document.getElementById('togg');
    if(toggId?.classList.contains('toggle')){
      toggId?.classList.remove('toggle');
      const sidemuu=sideM?.current
    sidemuu?.classList.add('display-none')
    }
    else{
      toggId?.classList.add('toggle');
      const sidemu=document.getElementById('side-menu')
    if(sidemu?.classList.contains('display-none')){
      sidemu?.classList.remove('display-none')
    }
    }
  };
  const unToggle=()=>{
    let toggId=document.getElementById('togg');
    if(toggId?.classList.contains('toggle')){
      toggId?.classList.remove('toggle');
      const sidemuu=sideM?.current
    sidemuu?.classList.add('display-none')
    }
  }
  const displayMenu=()=>{
    const elem=document.getElementById('dan');
    if(elem?.classList.contains('display-none')){
      elem?.classList.remove('display-none')
    }
  }
  const displayMenu2=()=>{
    const elem2=document.getElementById('dan2');
    if(elem2?.classList.contains('display-none')){
      elem2?.classList.remove('display-none')
    }
  }
  const displayMenu3=()=>{
    const elem3=document.getElementById('dan3');
    if(elem3?.classList.contains('display-none1')){
      elem3?.classList.remove('display-none1')
    }
  }
  const displayMenu4=()=>{
    const elem4=document.getElementById('dan4');
    if(elem4?.classList.contains('display-none1')){
      elem4?.classList.remove('display-none1')
    }
  }
  const hideMenu=()=>{
    const elem=document.getElementById('dan');
    elem?.classList.add('display-none')
  }
  const hideMenu2=()=>{
    const elem2=document.getElementById('dan2');
    elem2?.classList.add('display-none')
  }
  const hideMenu3=()=>{
    const elem3=document.getElementById('dan3');
    elem3?.classList.add('display-none1')
  }
  const hideMenu4=()=>{
    const elem4=document.getElementById('dan4');
    elem4?.classList.add('display-none1')
  }
  return (
    <header>
      <div className="header__logo">
        <h1>R</h1>
        <h5>RhinoLandHotel</h5>
      </div>
      <div className="header__nav hide-for-desktop">
        <nav>
          <ul>
            <li>
              <Link href="/" passHref legacyBehavior>
               < a className="anchors"> OUR HOTEL</a>
              </Link>
            </li>
            <li  className="side__menu__list"  onMouseOver={displayMenu2} onMouseLeave={hideMenu2}
            >
                <Link href='/accomodation'>Accomodation</Link>
                <ul className='menu__sidebar hide-for-desktop display-none' id="dan2">
                  <li>
                  <Link href='/rooms-suites/suites' className="side">SUITES</Link>
                  </li>
                  <li>
                  <Link href='/rooms-suites/rooms' className="side">ROOMS</Link>
                  </li>
                </ul>
            </li>
            <li>
              <Link href="/packages" passHref legacyBehavior>
              <a className='anchors'>PACKAGES</a>
              </Link>
            </li>
            <li  className="side__menu__list"  onMouseOver={displayMenu} onMouseLeave={hideMenu}
            >
                MEETING&EVENTS
                <ul className='menu__sidebar hide-for-desktop display-none' id="dan">
                  <li>
                  <Link href='/events-spaces' className="side">EVENTS SPACES</Link>
                  </li>
                  <li>
                  <Link href='/wedding' className="side">WEDDING</Link>
                  </li>
                  <li className="side-list">
                  <Link href='/proposalEM' className="side side2">PROPOSAL</Link>
                  </li>
                </ul>
            </li>
            <li className="book">
              <Link href="/book" passHref>
                BOOK NOW
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="herburger">
        <div
          onClick={Toggle} id='togg'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='hide-for-mobile mobile-side-menu display-none'id='side-menu' ref={sideM}>
           <ul>
             <li>
                <Link href='/' onClick={unToggle}>HOME</Link>
             </li>
             <li onMouseOver={displayMenu3} onMouseLeave={hideMenu3}
            >
                <Link href='/accomodation' className="ac2" onClick={unToggle}>ACCOMODATION</Link>
                <ul className='menu__sidebar2 hide-for-desktop display-none1' id="dan3">
                  <li>
                  <Link href='/rooms-suites/suites' className="side" onClick={unToggle}>SUITES</Link>
                  </li>
                  <li>
                  <Link href='/rooms-suites/rooms' className="side" onClick={unToggle}>ROOMS</Link>
                  </li>
                </ul>
            </li>
             <li><Link href='/packages' onClick={unToggle}>PACKAGES</Link></li>
             <li className="side__menu__list"  onMouseOver={displayMenu4} onMouseLeave={hideMenu4}>MEETING&EVENTS
             <ul className='menu__sidebar3 hide-for-desktop display-none1' id="dan4">
                  <li>
                  <Link href='/events-spaces' className="side"onClick={unToggle} >EVENTS SPACES</Link>
                  </li>
                  <li>
                  <Link href='/wedding' className="side" onClick={unToggle}>WEDDING</Link>
                  </li>
                  <li className="side-list">
                  <Link href='/proposalEM' className="side side2" onClick={unToggle}>PROPOSAL</Link>
                  </li>
                </ul>
             </li>
             <li><Link href='/book' onClick={unToggle}>BOOK NOW</Link></li>
           </ul>
      </div>
    </header>
  );
}
