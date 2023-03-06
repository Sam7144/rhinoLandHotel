    import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from 'next/router';
export default function proposalEM() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router=useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [message, setMessage] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [entry, setEntry] = useState({
    firstName: "",
    lastName: "",
    org_name: "",
    email: "",
    orgTel: "",
    organizatioName: "",
    Address: "",
    City: "",
    Postalcode: "",
    Country: "",
  });
  const changeEntry = (e: { preventDefault: () => void; target: { name: any; value: any; }; }) => {
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setEntry((previous)=>{
        return{
            ...previous,[name]:value
        }
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!entry.email.match(validRegex)) {
      setMessage("invalid email please try again");
    }
    try{
        const response=await fetch('/api/proposalReg',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({entry})
        })
        const data=await response.json()
        setMessage(data.msg)
    }catch(err){
        console.log(err)
    }
    if(!message){
      router.push('/');
    }
    console.log(entry)
   
  };
  return (
    <main>
      <div className="proposal">
        <h1>Request for Proposal</h1>
        <p>
          For more information about booking a group or event, please complete
          this RFP or contact our sales department directly at (254) 742337899.
        </p>
        <div className="border"></div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h3>Contact Information</h3>

            <div className="form__contact">
              <div className="p-1">
                <label>
                  First Name <span className="req">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  //id="firstname"
                  value={entry.firstName}
                  onChange={changeEntry}
                  required
                  placeholder="First Name"
                />
                <br />
              </div>
              <div className="p-2">
                <label>
                  LastName <span>*</span>
                </label>
                <br />
                <input
                  name="lastName"
                  id="lastname"
                  value={entry.lastName}
                  onChange={changeEntry}
                  required
                  placeholder="Last Name"
                />
                <br />
              </div>
              <div className="p-4">
                <label>
                  Email <span>*</span>
                </label>
                <br />
                <input
                  name="email"
                  id="email"
                  value={entry.email}
                  onChange={changeEntry}
                  required
                  placeholder="Email"
                />
                <br />
              </div>
              <div className="p-5">
                <label>
                  Telephone <span>*</span>
                </label>
                <br />
                <input
                  name="orgTel"
                  id="tel"
                  value={entry.orgTel}
                  onChange={changeEntry}
                  required
                  placeholder="Telephone no"
                />
                <br />
              </div>
              <div className="p-6">
                <label>Address</label>
                <br />
                <input
                  type="text"
                  name="Address"
                  id="add"
                  placeholder="Address"
                  onChange={changeEntry}
                  value={entry.Address}
                />
                <br />
              </div>
              <div className="p-7">
                <label>City/Region</label>
                <br />
                <input
                  name="City"
                  id="city-region"
                  placeholder="City/region"
                  value={entry.City}
                  onChange={changeEntry}
                />
                <br />
              </div>
              <div className="p-8">
                <label>Postal code</label>
                <br />
                <input
                  name="Postalcode"
                  id="postal-code"
                  placeholder="Postal Code"
                  value={entry.Postalcode}
                  onChange={changeEntry}
                />
                <br />
              </div>
              <div className="p-9">
                <label>Country</label>
                <br />
                <input
                type="text"
                  name="Country"
                  id="country"
                  placeholder="Country"
                  value={entry.Country}
                  onChange={changeEntry}
                />
                <br />
              </div>
            </div>
            <div className="alerH">
              if you dont receive call within 24hours please resend your details
            </div>
            <button type="submit" className="btn">
              send
            </button>
          </form>
          <p>{message}</p>
        </div>
      </div>
    </main>
  );
}
