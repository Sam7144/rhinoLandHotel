import Link from "next/link";
import Image from "next/image";
export default function FooterFunction() {
  return (
    <footer className="wrapper">
      <div className="footer__contact">
        <div className="contact">
          <Link href="/reviews"  className="footer__links">
            REVIEWS
          </Link>
          <Link href="/privancy"  className="footer__links">
            PRIVANCY POLICY
          </Link>
          <Link href="/terms-conditions"  className="footer__links">
            TERMS&CONDITIONS
          </Link>
          <Link href="/accesibility"  className="footer__links">
            ACCESSIBILITY
          </Link>
          <Link href="/carrer"  className="footer__links">
            CAREERS
          </Link>
        </div>
        <div className="form form-tab">
          <form >
          <input className="email" type='email' required placeholder="Your Email" />
          <button className="btn-submit" >Sign Up</button>
          </form>
        </div>
      </div>
      <div className="address">
        <div className="address__contact">
          <h3>The RhinoLand Hotel</h3>
          <p>105 E. Delaware Place, Chicago, Illinois 60611</p>
          <p>
            Phone: 254-724337899 | Reservations: 254-746392964 | Fax: 254-42337899
          </p>
          <p>samutech144@gmail.com</p>
        </div>
        <div className="address__image">
          <Link href="/">
          <Image
            src={'/images/icon-linkedin.svg'}
            alt="twitter"
            width={30}
            height={20}
          />
          </Link>
          <Link href="/">
         <Image
            src={'/images/icon-twitter.svg'}
            alt="twitter"
            width={30}
            height={20}
          />
         </Link>
         <Link href="/">
         <Image
            src={'/images/icon-facebook.svg'}
            alt="twitter"
            width={30}
            height={20}
          />
         </Link>
          <Link href="/">
          <Image
            src={'/images/icon-instagram.svg'}
            alt="twitter"
            width={30}
            height={20}
          />
          </Link>
          <p>Copyright <Link href="/">samutech144@gmail.com</Link></p>
        </div>
      </div>
    </footer>
  );
}
