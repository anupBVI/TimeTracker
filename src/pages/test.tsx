import React, { createRef, useState } from "react";
import styled from "styled-components";
import { ContentBody } from "../components/Home/homepage.styles";

// import { MapContainer, TileLayer, useMap } from "react-leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import {} from "leaflet";

const FormWrapper = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 70vw;
  padding: 12px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const FormHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
const FormBody = styled.form`
  padding: 4px;
  display: flex;
  gap: 1.3rem;
  flex-direction: column;
`;
const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SectionHeading = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #414141;
`;

const FormInputWrapper = styled.div`
  /* background: #000; */
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px;
`;

const FormLabel: any = styled.label`
  cursor: pointer;
`;

const FormInput: any = styled.input`
  width: 100%;
  padding: 9px 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;
const ErrorMessage: any = styled.span`
  font-size: 14px;
  color: #e54040;

  /* display: none; */
`;
const SubmitButton = styled.button`
  width: 200px;
  padding: 8px;
  background: #43cda6;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: 0.3s ease all;
  &:hover {
    transform: scale(1.03);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 9px 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;

// 2d0b2cb51c364dd0aa0bbea42f78c8bd

function Form() {
  const [country2, setCountry2] = useState("");
  const [state2, setState2] = useState("");
  const [position, setPosition] = useState<any>([51.505, -0.09]);

  const apiKey = "2d0b2cb51c364dd0aa0bbea42f78c8bd";

  const retrieveCountryAndState = (lat: any, lng: any, callback: any) => {
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        if (results.length > 0) {
          const country = results[0].components.country;
          const state = results[0].components.state;
          callback(country, state);
        } else {
          console.log("No results found");
        }
      })
      .catch((error) => console.log(error));
  };

  const mapRef: any = createRef();

  // const handleClick2 = (event: any) => {

  //   const latlng = event.latlng;
  //   setPosition([latlng.lat, latlng.lng]);
  //   // code to get country and state from lat and lng
  //   retrieveCountryAndState(latlng.lat, latlng.lng, (country2:any, state2:any) => {
  //     setCountry2(country2);
  //     setState2(state2);
  //   });
  //   setCountry2(country2);
  //   setState2(state2);
  // };

  const handleClick2 = (event: any) => {
    // let country2: any;
    // let state2: any;

    console.log(event)

    if (event && event.latlng) {
      const latlng = event.latlng;
      setPosition([latlng.lat, latlng.lng]);
      retrieveCountryAndState(
        latlng.lat,
        latlng.lng,
        (country2: any, state2: any) => {
          setCountry2(country2);
          setState2(state2);
        }
      );
      mapRef.current.leafletElement.on("click", handleClick2);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    errors: {
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
  });

  const [formDatas, setFormDatas] = useState({
    Name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
    cpName: "",
    cpPhone: "",
    clName: "",
    mBrand: "",
    crNum: "",
    vcNum: "",
    cCode: "",

    iBan: "",
    bBan: "",
    sepa: "",
    cmpName: "",
    cmpHqAdd: "",
    country: "",
    state: "",
    pincode: "",

    errors: {
      Name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    let errors = { ...formData.errors };
    if (name === "email") {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        errors.email = "Invalid email address";
      } else {
        errors.email = "";
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else {
        errors.password = "";
      }
    }
    if (name === "confirmPassword") {
      if (value !== formData.password) {
        errors.confirmPassword = "Passwords do not match";
      } else {
        errors.confirmPassword = "";
      }
    }
    if (name === "country") {
      if (!value) {
        errors.country = "Country is required";
      } else {
        errors.country = "";
      }
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      errors,
    }));
  };

  const {
    Name,
    email,
    phone,
    password,
    cPassword,
    cpName,
    cpPhone,
    clName,
    mBrand,
    crNum,
    vcNum,

    cCode,
    iBan,
    bBan,
    sepa,

    cmpName,
    cmpHqAdd,
    country,
    state,
    pincode,
  } = formDatas;

  const formatName = /^[a-zA-Z]{2,}$/; // regular expression to match only letters
  const phoneFormat = /^[0-9]{10}$/;
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/; // 1num 1upr 1lwr and 1 splchar

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { email, password, confirmPassword, country, errors } = formData;
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    setFormData((prevState) => ({
      ...prevState,
      errors,
    }));

    if (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      !errors.country
    ) {
      console.log("Form submitted successfully");
      console.log(formData);
    }
  };

  const handleChange2 = (e: any) => {
    const { name, value } = e.target;

    let errors = { ...formDatas.errors };

    if (name === "Name") {
      const nameRegex = /^[a-zA-Z]{2,}$/;
      if (!nameRegex.test(value)) {
        errors.Name = "Invalid Name";
      } else {
        errors.Name = "";
      }
    }
    if (name === "email") {
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(value)) {
        errors.email = "Invalid email address";
      } else {
        errors.email = "";
      }
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        errors.phone = "Invalid phone number";
      } else {
        errors.phone = "";
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else {
        errors.password = "";
      }
    }
    if (name === "confirmPassword") {
      if (value !== formData.password) {
        errors.confirmPassword = "Passwords do not match";
      } else {
        errors.confirmPassword = "";
      }
    }
    if (name === "country") {
      if (!value) {
        errors.country = "Country is required";
      } else {
        errors.country = "";
      }
    }
    setFormDatas((prevState) => ({
      ...prevState,
      [name]: value,
      errors,
    }));
  };

  const handleSubmit2 = (e: any) => {
    e.preventDefault();
    const { email, phone, password, cPassword, country, errors } = formDatas;
    if (!Name) {
      errors.Name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }
    if (!phone) {
      errors.phone = "phone is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!cPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }
    setFormDatas((prevState) => ({
      ...prevState,
      errors,
    }));

    if (
      !errors.Name &&
      !errors.email &&
      !errors.phone &&
      !errors.password &&
      !errors.confirmPassword &&
      !errors.country
    ) {
      console.log("Form submitted successfully");
      console.log(formData);
    }
  };

  console.log(formDatas);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.errors.email && <span>{formData.errors.email}</span>}
        </label>
        <br />
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.errors.password && <span>{formData.errors.password}</span>}
        </label>
        <br />
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {formData.errors.confirmPassword && (
            <span>{formData.errors.confirmPassword}</span>
          )}
        </label>
        <br />
        <br />
        <label>
          Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          {formData.errors.country && <span>{formData.errors.country}</span>}
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />

      <div
        style={{ width: "800px", height: "400px", border: "2px solid yellow" }}
        onClick={handleClick2}
      >
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
          ref={(ref) => {
            // ref.leafletElement.on("click", handleClick2);
            onclick = handleClick2
          }}
          // ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <p>Country: {country}</p>
              <p>State: {state}</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <ContentBody align="none">
        <form>
          <label>
            Country:
            <input
              type="text"
              value={country2}
              onChange={(e) => setCountry2(e.target.value)}
            />
          </label>
          <br />
          <label>
            State:
            <input
              type="text"
              value={state2}
              onChange={(e) => setState2(e.target.value)}
            />
          </label>
        </form>

        <FormWrapper style={{ width: "600px", height: "400px" }}>
          <FormContainer>
            <FormHeader>My Profile</FormHeader>

            <FormBody
              onSubmit={(e) => {
                handleSubmit2(e);
              }}
            >
              <FormSection>
                <SectionHeading>Personal details</SectionHeading>
                <FormInputWrapper>
                  <FormLabel htmlFor="Name">Name</FormLabel>
                  <FormInput
                    type="text"
                    id="Name"
                    name="Name"
                    placeholder="Name"
                    onChange={handleChange2}
                    value={formDatas.Name}
                  />
                  {formDatas.errors.Name && (
                    <ErrorMessage className="invalid">
                      {formDatas.errors.Name}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange2}
                    value={email}
                  />
                  {formDatas.errors.email && (
                    <ErrorMessage className="invalid">
                      {formDatas.errors.email}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="phone">Phone No</FormLabel>
                  <FormInput
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone no."
                    onChange={handleChange2}
                    value={phone}
                  />
                  {formDatas.errors.phone && (
                    <ErrorMessage className="invalid">
                      {formDatas.errors.Name}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormInput
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange2}
                    value={password}
                  />
                  {formDatas.errors.password && (
                    <ErrorMessage className="invalid">
                      {formDatas.errors.password}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormLabel htmlFor="cPassword">Confirm Password</FormLabel>
                  <FormInput
                    type="text"
                    id="cPassword"
                    name="cPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange2}
                    value={cPassword}
                  />
                  {formDatas.errors.confirmPassword && (
                    <ErrorMessage className="invalid">
                      {formDatas.errors.confirmPassword}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>
              </FormSection>

              <FormSection>
                <SectionHeading>Contact Person </SectionHeading>
                <FormInputWrapper>
                  <FormLabel htmlFor="cpName">
                    Contact Person Full Name
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="cpName"
                    name="cpName"
                    placeholder="Contact Person Name"
                    onChange={handleChange2}
                    value={cpName}
                  />
                  {formData.errors.confirmPassword && (
                    <ErrorMessage className="invalid">
                      {formData.errors.password}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="cpPhone">
                    Contact Person Mobile no
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="cpPhone"
                    name="cpPhone"
                    placeholder="Contact Person Mobile no"
                    onChange={handleChange2}
                    value={cpPhone}
                  />
                  {formData.errors.confirmPassword && (
                    <ErrorMessage className="invalid">
                      {formData.errors.password}
                    </ErrorMessage>
                  )}
                </FormInputWrapper>
              </FormSection>

              <FormSection>
                <SectionHeading>Company Details </SectionHeading>
                <FormInputWrapper>
                  <FormLabel htmlFor="clName">Company Legal Name</FormLabel>
                  <FormInput
                    type="text"
                    id="clName"
                    name="clName"
                    placeholder="Company Legal Name"
                    onChange={handleChange2}
                    value={clName}
                  />
                  <ErrorMessage className="invalid">
                    {/* please enter Company Legal Name */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="mBrand">Main Brand</FormLabel>
                  <FormInput
                    type="text"
                    id="mBrand"
                    name="mBrand"
                    placeholder="Main Brand"
                    onChange={handleChange2}
                    value={mBrand}
                  />
                  <ErrorMessage className="invalid">
                    {/* please enter Main Brand */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="crNum">Company CR number</FormLabel>
                  <FormInput
                    type="text"
                    id="crNum"
                    name="crNum"
                    placeholder="Company CR number"
                    onChange={handleChange2}
                    value={crNum}
                  />
                  <ErrorMessage className="invalid">
                    {/* please enter Company CR number */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="vcNum">Vat certificate number</FormLabel>
                  <FormInput
                    type="text"
                    id="vcNum"
                    name="vcNum"
                    placeholder="Company CR number"
                    onChange={handleChange2}
                    value={vcNum}
                  />
                  <ErrorMessage className="invalid">
                    {" "}
                    {/* please enter Vat certificate number */}
                  </ErrorMessage>
                </FormInputWrapper>
              </FormSection>

              <FormSection>
                <SectionHeading>Payment Information </SectionHeading>
                <FormInputWrapper>
                  <FormLabel htmlFor="cCode">ISO COUNTRY CODE</FormLabel>

                  <FormSelect
                    name="cCode"
                    onChange={handleChange2}
                    value={cCode}
                    id="ccode"
                  >
                    <option value="" disabled>
                      Select country code
                    </option>
                    <option value="Saudi Arabia"> SA </option>
                    <option value="India"> IND </option>
                    <option value="Srilanka"> SL </option>
                    <option value="China"> CHN </option>
                  </FormSelect>

                  <ErrorMessage className="invalid">
                    {/* please select COUNTRY CODE */}
                    {/* {formError.cCode} */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="iBan">IBAN CHECK Digits</FormLabel>
                  <FormSelect
                    name="iBan"
                    id="iBan"
                    onChange={handleChange2}
                    value={iBan}
                  >
                    <option value="" disabled>
                      Select IBAN check digits
                    </option>
                    <option value="Saudi Arabia"> 01 </option>
                    <option value="India"> 02 </option>
                    <option value="Srilanka"> 03 </option>
                    <option value="China"> 04 </option>
                  </FormSelect>
                  <ErrorMessage className="invalid">
                    {/* please Select IBAN CHECK Digits */}
                    {/* {formError.iBan} */}
                  </ErrorMessage>
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormLabel htmlFor="bBan">BBAN</FormLabel>
                  <FormInput
                    type="text"
                    id="bBan"
                    name="bBan"
                    placeholder="bBan number"
                    onChange={handleChange2}
                    value={bBan}
                  />
                  <ErrorMessage className="invalid">
                    {/* please enter bban number */}
                    {/* {formError.bBan} */}
                  </ErrorMessage>
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormLabel htmlFor="sepa">SEPA Number</FormLabel>
                  <FormSelect
                    name="sepa"
                    id="sepa"
                    onChange={handleChange2}
                    value={sepa}
                  >
                    <option value="" disabled>
                      Select SEPA number
                    </option>
                    <option value="Saudi Arabia"> 01 </option>
                    <option value="India"> 02 </option>
                    <option value="Srilanka"> 03 </option>
                    <option value="China"> 04 </option>
                  </FormSelect>
                  <ErrorMessage className="invalid">
                    {/* please Select IBAN CHECK Digits */}
                    {/* {formError.sepa} */}
                  </ErrorMessage>
                </FormInputWrapper>
              </FormSection>

              <FormSection>
                <SectionHeading>Company Address </SectionHeading>
                <FormInputWrapper>
                  <FormLabel htmlFor="cmpName">Company Legal Name</FormLabel>
                  <FormInput
                    type="text"
                    id="cmpName"
                    name="cmpName"
                    placeholder="Company Name"
                    onChange={handleChange2}
                    value={cmpName}
                  />
                  <ErrorMessage className="invalid">
                    {/* please enter Company Name */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="cmpHqAdd">
                    Company Headquarter Address
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="cmpHqAdd"
                    name="cmpHqAdd"
                    placeholder="Company Headquarter Address"
                    onChange={handleChange2}
                    value={cmpHqAdd}
                  />
                  <ErrorMessage className="invalid">
                    {" "}
                    {/* please enter Company Head quarter address */}
                    {/* {formError.cmpHqAdd} */}
                  </ErrorMessage>
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormLabel htmlFor="country">Country</FormLabel>
                  <FormSelect
                    name="country"
                    id="country"
                    onChange={handleChange2}
                    value={country}
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
                    <option value="Saudi Arabia"> Saudi Arabia </option>
                    <option value="India"> India </option>
                    <option value="Srilanka"> Srilanka</option>
                    <option value="Qatar"> Qatar </option>
                  </FormSelect>
                  <ErrorMessage className="invalid">
                    {/* please Select country */}
                    {/* {formError.country} */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="state">State</FormLabel>
                  <FormSelect
                    name="state"
                    id="state"
                    onChange={handleChange2}
                    value={state}
                  >
                    {" "}
                    <option value="" disabled>
                      Select a State
                    </option>
                    <option value="Maharashtra"> Maharashtra </option>
                    <option value="Uttar Pradesh "> Uttar Pradesh </option>
                    <option value="Haryana"> Haryana </option>
                    <option value="Punjab"> Punjab </option>
                  </FormSelect>
                  <ErrorMessage className="invalid">
                    {/* please Select state */}
                    {/* {formError.state} */}
                  </ErrorMessage>
                </FormInputWrapper>

                <FormInputWrapper>
                  <FormLabel htmlFor="pincode">Pincode</FormLabel>
                  <FormSelect
                    name="pincode"
                    id="pincode"
                    onChange={handleChange2}
                    value={pincode}
                  >
                    <option value="" disabled>
                      Select Pincode
                    </option>
                    <option value="440033"> 440033 </option>
                    <option value="440034"> 440034</option>
                    <option value="440035"> 440035</option>
                    <option value="440036">440036</option>
                  </FormSelect>
                  <ErrorMessage className="invalid">
                    {/* please Select state */}
                    {/* {formError.pincode} */}
                  </ErrorMessage>
                </FormInputWrapper>

                {/*  */}

                {/* <div style={{ width: "100%", height: "100%" }}>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div> */}

                {/*  */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.147813380054!2d72.85098531490213!3d19.14500598704841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b137f65f1aab%3A0xbaecafd57d194ecc!2sBrainvire%20-%20eCommerce%20%26%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1673858578822!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  // allowFullScreen:=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </FormSection>
              <FormSection>
                <SectionHeading>Address Location 2 </SectionHeading>
                <FormInputWrapper>
                  <FormLabel htmlFor="cpname">
                    Contact Person Full Name
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="cpname"
                    name="cpname"
                    placeholder="Contact Person Name"
                  />
                  <ErrorMessage className="invalid">
                    {/* please enter contact person name */}
                  </ErrorMessage>
                </FormInputWrapper>
                <FormInputWrapper>
                  <FormLabel htmlFor="cpphone">
                    Contact Person Mobile no
                  </FormLabel>
                  <FormInput
                    type="text"
                    id="cpphone"
                    name="cpphone"
                    placeholder="Contact Person Mobile no"
                  />
                  <ErrorMessage className="invalid">
                    {" "}
                    {/* please enter Contact Person Mobile no */}
                  </ErrorMessage>
                </FormInputWrapper>
              </FormSection>

              <FormInputWrapper>
                <SubmitButton> Submit </SubmitButton>
              </FormInputWrapper>
            </FormBody>
          </FormContainer>
        </FormWrapper>
      </ContentBody>
    </>
  );
}

export default Form;
