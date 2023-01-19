import React, { useState } from "react";
import {
  ErrorMessage,
  FormBody,
  FormContainer,
  FormHeader,
  FormInput,
  FormInputWrapper,
  FormLabel,
  FormSection,
  FormSelect,
  FormWrapper,
  SectionHeading,
  SubmitButton,
} from "../components/RegisterComps/RegisterComps";
import { ContentBody } from "../components/Home/homepage.styles";
import { CardName } from "./../components/Home/homepage.styles";

const Register = () => {
  const formatName = /^[a-zA-Z]{2,}$/; // regular expression to match only letters
  const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [inputs, setInputs] = useState<any>({
    name: "",
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
  });

  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
  });

  const validate = (name: any, value: any) => {
    const nameFormat = /^[a-zA-Z]+$/;
    const phoneFormat = /^[0-9]{10}$/;
    const passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

    switch (name) {
      case "name":
        if (value.length < 4) {
          return "Name must be at least 4 characters long.";
        } else if (!/^[a-zA-Z]+$/.test(value)) {
          return "Name can only contain letters.";
        }
        break;
      case "email":
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          return "Please enter a valid email address.";
        }
        break;

      case "phone":
        if (value.length < 10) {
          return "Phone number must be of 10 digits";
        } else if (!phoneFormat.test(value)) {
          return "Phone number only contain numbers.";
        }
        break;
      case "password":
        if (!passwordFormat.test(value)) {
          return "Invalid Password";
        }
        break;
      case "cPassword":
        if (value!== inputs.password) {
          return " Password doesnt match";
        }
        break;
    //   case "password":
    //     if (!passwordFormat.test(value)) {
    //       return "Invalid Password";
    //     }
    //     break;
      case "cpName":
        if (value.length < 4) {
          return "Name must be at least 4 characters long.";
        } else if (!nameFormat.test(value)) {
          return "Name can only contain letters.";
        }
        break;
      case "cpPhone":
        if (!phoneFormat.test(value)) {
          return "Invalid Phone number";
        }
        break;

      default:
        return "";
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors: any = {};
    Object.keys(inputs).forEach((input) => {
      if (!inputs[input]) {
        newErrors[input] = `${input} cannot be empty.`;
      } else {
        newErrors[input] = validate(input, inputs[input]);
      }
    });
    setErrors(newErrors);
    const {
      name,
      email,
      phone,
      password,
      cpName,
      cpPhone,
      iBan,
      bBan,
      cCode,
      sepa,
      country,
      state,
      pincode,
      cmpName,
      cmpHqAdd,
    } = newErrors;
    if (
      !newErrors.name &&
      !newErrors.email &&
      !phone &&
      !password &&
      !cpName &&
      !cpPhone &&
      !iBan &&
      !bBan &&
      !cCode &&
      !sepa &&
      !country &&
      !state &&
      !pincode &&
      !cmpName &&
      !cmpHqAdd
    ) {
      console.log("NO ERRORS");
    } else {
      console.log(" ERRORS");
    }
  };
  return (
    <ContentBody align="none">
      <FormWrapper>
        <FormContainer>
          <FormHeader>My Profile</FormHeader>

          <FormBody
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <FormSection>
              <SectionHeading>Personal details</SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="Name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={inputs.name}
                />
                {errors.name && (
                  <ErrorMessage className="invalid">{errors.name}</ErrorMessage>
                )}
              </FormInputWrapper>

              <FormInputWrapper>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={inputs.email}
                />
                {errors.email && (
                  <ErrorMessage className="invalid">
                    {errors.email}
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
                  onChange={handleChange}
                  value={inputs.phone}
                />
                {errors.phone && (
                  <ErrorMessage className="invalid">
                    {errors.phone}
                  </ErrorMessage>
                )}
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={inputs.password}
                />
                {errors.password && (
                  <ErrorMessage className="invalid">
                    {errors.password}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="cPassword">Confirm Password</FormLabel>
                <FormInput
                  type="text"
                  id="cPassword"
                  name="cPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  value={inputs.cPassword}
                />
                {errors.cPassword && (
                  <ErrorMessage className="invalid">
                    {errors.cPassword}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
            </FormSection>

            <FormSection>
              <SectionHeading>Contact Person </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cpName">Contact Person Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="cpName"
                  name="cpName"
                  placeholder="Contact Person Name"
                  onChange={handleChange}
                  value={inputs.cpName}
                />
                {errors.cpName && (
                  <ErrorMessage className="invalid">
                    {errors.cpName}
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
                  onChange={handleChange}
                  value={inputs.cpPhone}
                />
                {errors.cpPhone && (
                  <ErrorMessage className="invalid">
                    {errors.cpPhone}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              {/*
               */}
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
                  onChange={handleChange}
                  value={inputs.clName}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="mBrand">Main Brand</FormLabel>
                <FormInput
                  type="text"
                  id="mBrand"
                  name="mBrand"
                  placeholder="Main Brand"
                  onChange={handleChange}
                  value={inputs.mBrand}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="crNum">Company CR number</FormLabel>
                <FormInput
                  type="text"
                  id="crNum"
                  name="crNum"
                  placeholder="Company CR number"
                  onChange={handleChange}
                  value={inputs.crNum}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="vcNum">Vat certificate number</FormLabel>
                <FormInput
                  type="text"
                  id="vcNum"
                  name="vcNum"
                  placeholder="Company CR number"
                  onChange={handleChange}
                  value={inputs.vcNum}
                />
                <ErrorMessage className="invalid"></ErrorMessage>
              </FormInputWrapper>
            </FormSection>

            <FormSection>
              <SectionHeading>Payment Information </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cCode">ISO COUNTRY CODE</FormLabel>
                <FormSelect
                  name="cCode"
                  onChange={handleChange}
                  value={inputs.cCode}
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
                {errors.cCode && (
                  <ErrorMessage className="invalid">
                    {errors.cCode}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="iBan">IBAN CHECK Digits</FormLabel>
                <FormSelect
                  name="iBan"
                  id="iBan"
                  onChange={handleChange}
                  value={inputs.iBan}
                >
                  <option value="" disabled>
                    Select IBAN check digits
                  </option>
                  <option value="Saudi Arabia"> 01 </option>
                  <option value="India"> 02 </option>
                  <option value="Srilanka"> 03 </option>
                  <option value="China"> 04 </option>
                </FormSelect>
                {errors.iBan && (
                  <ErrorMessage className="invalid">{errors.iBan}</ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="bBan">BBAN</FormLabel>
                <FormInput
                  type="text"
                  id="bBan"
                  name="bBan"
                  placeholder="bBan number"
                  onChange={handleChange}
                  value={inputs.bBan}
                />
                {errors.bBan && (
                  <ErrorMessage className="invalid">{errors.bBan}</ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="sepa">SEPA Number</FormLabel>
                <FormSelect
                  name="sepa"
                  id="sepa"
                  onChange={handleChange}
                  value={inputs.sepa}
                >
                  <option value="" disabled>
                    Select SEPA number
                  </option>
                  <option value="Saudi Arabia"> 01 </option>
                  <option value="India"> 02 </option>
                  <option value="Srilanka"> 03 </option>
                  <option value="China"> 04 </option>
                </FormSelect>
                {errors.sepa && (
                  <ErrorMessage className="invalid">{errors.sepa}</ErrorMessage>
                )}{" "}
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
                  onChange={handleChange}
                  value={inputs.cmpName}
                />
                {errors.CardName && (
                  <ErrorMessage className="invalid">
                    {errors.CardName}
                  </ErrorMessage>
                )}{" "}
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
                  onChange={handleChange}
                  value={inputs.cmpHqAdd}
                />
                {errors.cmpHqAdd && (
                  <ErrorMessage className="invalid">
                    {errors.cmpHqAdd}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="country">Country</FormLabel>
                <FormSelect
                  name="country"
                  id="country"
                  onChange={handleChange}
                  value={inputs.country}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="Saudi Arabia"> Saudi Arabia </option>
                  <option value="India"> India </option>
                  <option value="Srilanka"> Srilanka</option>
                  <option value="Qatar"> Qatar </option>
                </FormSelect>
                {errors.country && (
                  <ErrorMessage className="invalid">
                    {errors.country}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="state">State</FormLabel>
                <FormSelect
                  name="state"
                  id="state"
                  onChange={handleChange}
                  value={inputs.state}
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
                {errors.state && (
                  <ErrorMessage className="invalid">
                    {errors.state}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
              <FormInputWrapper>
                <FormLabel htmlFor="pincode">Pincode</FormLabel>
                <FormSelect
                  name="pincode"
                  id="pincode"
                  onChange={handleChange}
                  value={inputs.pincode}
                >
                  <option value="" disabled>
                    Select Pincode
                  </option>
                  <option value="440033"> 440033 </option>
                  <option value="440034"> 440034</option>
                  <option value="440035"> 440035</option>
                  <option value="440036">440036</option>
                </FormSelect>
                {errors.pincode && (
                  <ErrorMessage className="invalid">
                    {errors.pincode}
                  </ErrorMessage>
                )}{" "}
              </FormInputWrapper>
            </FormSection>
            <FormSection>
              <SectionHeading>Address Location 2 </SectionHeading>
              <FormInputWrapper>
                <FormLabel htmlFor="cpname">Contact Person Full Name</FormLabel>
                <FormInput
                  type="text"
                  id="cpname"
                  name="cpname"
                  placeholder="Contact Person Name"
                />
                <ErrorMessage className="invalid"></ErrorMessage>
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
                <ErrorMessage className="invalid"> </ErrorMessage>
              </FormInputWrapper>
            </FormSection>

            <FormInputWrapper>
              <SubmitButton> Submit </SubmitButton>
            </FormInputWrapper>
          </FormBody>
        </FormContainer>
      </FormWrapper>
    </ContentBody>
  );
};

export default Register;
