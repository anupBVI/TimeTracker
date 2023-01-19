import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, redirect, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  /* background: #000; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
const LoginContainer = styled.div`
  width: 60%;
  height: auto;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Logo = styled.div`
  /* background: ; */
  width: 220px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Header = styled.div`
  height: 15%;
  background: #438eb9;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
  }
`;
const Body = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  .btnwrap {
    display: flex;
    width: 100%;
    gap :1rem;

  }
`;

const Footer = styled.div`
  span {
    color: #464646;
    font-size: 12px;
  }
`;
const Logins = (props: any) => {
  // const { formLogin, onFinish } = props;
  const [formLogin] = Form.useForm();

  const openMessage = (x: string, y: string) => {
    const key = "updatable";
    message.open({
      key,
      type: "loading",
      content: x,
    });
    setTimeout(() => {
      message.open({
        key,
        type: "success",
        content: y,
        duration: 2,
      });
    }, 1000);
  };

  // LOGIN
  const onFinish = (values: any) => {
    console.log("Success:", values);
    localStorage.setItem("login", "true");
    formLogin.resetFields();
    openMessage("Logging in", "Logged in Successfully");
    let login = localStorage.getItem("login");
    setTimeout(() => {
      if (login === "true") {
        navigate("/tracker");
      }
    }, 1000);
  };
  // LOGIN
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login === "true") {
      navigate("/tracker");
    }
  }, [navigate]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Wrapper>
        <Logo>
          <img
            src="https://www.brainvire.com/assets/images/brainvire-logo.png?w=640&q=50"
            alt=""
          />
        </Logo>
        <LoginContainer>
          <Header>
            <span>Login</span>
          </Header>
          <Body>
            <Form
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              form={formLogin}
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 2, span: 24 }}>
                <div className="btnwrap">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: "#438eb9" }}
                >
                  Login
                </Button>
                <p>
                  Dont have Account? <NavLink to="/register">Sign Up</NavLink>
                </p>
                {/* <p>
                  Dont have Account testing? <NavLink to="/testing">Sign Up</NavLink>
                </p> */}
                </div>  
              </Form.Item>
            </Form>
          </Body>
        </LoginContainer>

        <Footer>
          <span> Copyright © Brainvire 2016, All Rights Reserved.</span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Logins;
