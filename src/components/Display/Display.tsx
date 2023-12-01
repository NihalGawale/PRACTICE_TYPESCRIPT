import React from "react";

interface DataProps {
  data:
    | {
        firstName: string;
        lastName: string;
        email: string;
        country: string;
        state: string;
        city: string;
        gender: string;
      }
    | undefined;
}
const Display = ({ data }: DataProps) => {
  return (
    <div style={{ borderStyle: "solid", border: "2px", borderColor: "black" }}>
      <p>FirstName : {data?.firstName}</p>
      <p>LastName : {data?.lastName}</p>
      <p>Email : {data?.email}</p>
      <p>Country : {data?.country}</p>
      <p>State : {data?.state}</p>
      <p>City : {data?.city}</p>
      <p>Gender : {data?.gender}</p>
    </div>
  );
};

export default Display;
