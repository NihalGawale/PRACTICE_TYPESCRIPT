import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Display from "../Display/Display";

type Inputs = {
  firstName: string;
  lastName: string;
  country: string;
  state: string;
  city: string;
  email: string;
  gender: string;
};

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

const Registration = () => {
  const [submit, setSubmit] = useState(false);
  const [userData, setUserData] = useState<Inputs>();
  const { register, handleSubmit, watch, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    {
      setUserData(data);
      console.log(data, "DDDD");
    }
  };
  const email = watch("email");
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const country = watch("country");
  const state = watch("state");
  const city = watch("city");
  const gender = watch("gender");
  const sampleRegex = /[`~@$%^\s\d*#!}[(\]{|<>-]/;
  const handleReset = async () => {
    await reset();
    setSubmit(!submit);
  };
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmitButton = () => {
    if (!email?.match(/gmail.com/)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setSubmit(true);
    }
  };

  useEffect(() => {
    if (firstName?.match(sampleRegex)) {
      setFirstNameError(true);
    } else if (lastName?.match(sampleRegex)) {
      setLastNameError(true);
    } else {
      setFirstNameError(false);
      setLastNameError(false);
    }
  }, [firstName, lastName, email]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            marginTop: "15px",
          }}
        >
          <h1>Registration</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              placeholder="First Name"
              value={firstName}
              {...register("firstName", {
                pattern: /^[A-Za-z]+$/i,
                required: true,
              })}
            />
          </div>

          {firstNameError ? (
            <p style={{ fontSize: "12px" }}>
              Special Characters,Spaces and Numbers are not allowed
            </p>
          ) : (
            ""
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              value={lastName}
              placeholder="Last Name"
              {...register("lastName", {
                pattern: /^[A-Za-z]+$/i,
                required: true,
              })}
            />
          </div>

          {lastNameError ? (
            <p style={{ fontSize: "12px" }}>
              Special Characters,Spaces and Numbers are not allowed
            </p>
          ) : (
            ""
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Email"
              value={email}
              {...register("email", { required: true })}
            />
          </div>

          {emailError ? (
            <p style={{ fontSize: "12px" }}>
              Email is not in the expected format
            </p>
          ) : (
            ""
          )}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label htmlFor="country">Select Country</label>
            <select
              data-testid="country"
              {...register("country")}
              required
              defaultValue="select country"
            >
              <option disabled selected>
                select country
              </option>
              <option value="India">India</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label htmlFor="state">Select State</label>
            <select
              data-testid="state"
              {...register("state")}
              defaultValue="select state"
            >
              <option disabled selected>
                select state
              </option>
              {states.map((state) => (
                <option value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label htmlFor="city">Select City</label>
            <select
              required
              data-testid="city"
              {...register("city")}
              defaultValue="select city"
            >
              <option disabled selected>
                select city
              </option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label htmlFor="gender">Select Gender</label>
            <div id="gender" {...register("gender", { required: true })}>
              <input
                id="male"
                type="radio"
                value="Male"
                name="gender"
                required
              />
              <label htmlFor="male">Male</label>

              <input id="female" type="radio" value="Female" name="gender" />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={handleSubmitButton}
            >
              Submit
            </button>
            <button
              style={{ marginTop: "15px", marginLeft: "10px" }}
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          {submit && userData && <Display data={userData} />}
        </div>
      </div>
    </form>
  );
};

export default Registration;
