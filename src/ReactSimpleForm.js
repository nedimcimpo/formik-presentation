import { useState } from "react";

import { cities } from "./cities";

export default function ReactSimpleForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("----------------------------------");
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(city);
    console.log("----------------------------------");
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <div className="field">
        <label>Email</label>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="field">
        <label>City</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="" label="Select city">
            Select city
          </option>
          {cities.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
