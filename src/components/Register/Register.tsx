import React, { useState } from "react";

const states = [
  "Maharashtra",
  "Karnataka",
  "MP",
  "UP",
  "HP",
  "Gujarat",
  "Delhi",
  "Rajasthan",
  "Uttarakhand",
];

const cities = ["Nagpur", "Pune", "Mumbai", "Satara", "Nashik", "Bangalore"];
const Register = () => {
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [country, setCountry] = useState<string | undefined>();
  const [state, setState] = useState<string | undefined>();
  const [city, setCity] = useState<string | undefined>();
  const [gender, setGender] = useState<string | undefined>();

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    value = value.replace(/[^a-za-z]/gi, "");
    setFirstName(value);
  };

  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleSetCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleSetState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };

  const handleSetCity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  const handleSetGender = (gender: string) => {
    setGender(gender);
  };

  const handleSubmit = () => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      Country: country,
      State: state,
      City: city,
      Gender: gender,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Register</h1>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            onChange={(event) => handleFirstName(event)}
            required
          />
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            onChange={(event) => handleLastName(event)}
            required
          />
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <label htmlFor="selectCountry">Select Country</label>
          <select
            data-testid="selectCountry"
            onChange={(event) => handleSetCountry(event)}
          >
            <option selected disabled>
              Select Country
            </option>
            <option value={"India"}>India</option>
          </select>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <label htmlFor="selectState">Select State</label>
          <select
            data-testid="selectState"
            onChange={(event) => handleSetState(event)}
          >
            <option selected disabled>
              Select State
            </option>
            {states.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <label htmlFor="selectCity">Select City</label>
          <select
            data-testid="selectCity"
            onChange={(event) => handleSetCity(event)}
          >
            <option selected disabled>
              Select City
            </option>
            {cities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <label htmlFor="gender">Select Gender</label>
          <div id="gender">
            <input
              type="radio"
              id="male"
              value="Male"
              name="gender"
              onClick={() => handleSetGender("Male")}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              value="Female"
              name="gender"
              onClick={() => handleSetGender("Female")}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
        >
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Register;
