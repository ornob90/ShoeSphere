import React from "react";
import Input from "../../../components/html/Input";
import profileInput from "../../../utils/profileDetails";
import Select from "../../../components/html/Select";

const ProfileForm = () => {
  const country = ["USA", "Canada", "UK", "Australia", "Other"];
  const region = ["California", "New York", "Texas", "Florida", "Other"];
  return (
    <div className="mt-10 bg-white min-h-[77vh]">
      <form className="w-[90%] mx-auto pt-5 grid grid-cols-1 md:grid-cols-6 gap-2 ">
        <Input
          name="firstName"
          placeholder="First Name"
          className="md:col-span-3"
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          className="md:col-span-3"
        />
        <Select
          options={country}
          placeHolder="Country"
          className="md:col-span-2"
        />
        <Input className="md:col-span-2" name="city" placeHolder="City" />
        <Select
          options={region}
          placeHolder="Region"
          className="md:col-span-2"
        />
        <Input
          className="md:col-span-6 "
          name="address"
          placeHolder="Address"
        />
        <Input
          className="md:col-span-6 "
          name="email"
          placeHolder="Email"
          type="email"
        />
        <Input className="md:col-span-3 " name="phone" placeHolder="Phone" />
        <Input
          className="md:col-span-3 "
          name="zipCode"
          placeHolder="Zip Code"
        />
      </form>
    </div>
  );
};

export default ProfileForm;
