import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Login_Data } from "../redux/AuthReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { Loding } from "../Components/Loading";
import { useEffect } from "react";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [LoginData, setLoginData] = useState({});
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  if (isAuth) {
    return navigate("/");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...LoginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login_Data(LoginData))
      .then((res) => {
        if (res.success) {
          window.localStorage.setItem("Token", res.token);
          navigate("/");
        } else {
          alert("Inavlid Creditendials");
        }
      })
      .catch((err) => {
        alert("Reused Email");
        console.log(err);
      });
  };

  return (
    <Container>
      <LoginDiv>
        <Logo
          src={
            "http://localhost:3000/static/media/logo.eebab486d12135e36e7f.jpeg"
          }
        ></Logo>
        <Form onSubmit={handleSubmit}>
          <Input
            type={"email"}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            required
          ></Input>
          <Input
            type={"password"}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
          ></Input>
          <Input type={"submit"} />
        </Form>
        <Bottom>
          <Link to={"/user/register"} border="none">
            {" "}
            <Button style={{ color: "orange" }}>Sign up</Button>
          </Link>
        </Bottom>
      </LoginDiv>
      <Loding />
    </Container>
  );
};

export default Login;

const Container = styled.div``;
const LoginDiv = styled.div`
  width: 30vw;
  margin: 40px auto;
  box-shadow: rgba(10, 0, 0, 0.56) 0px 22px 70px 4px;
  padding: 50px;
`;
const Logo = styled.img`
  @media only screen and (max-width: 1150px) {
    width: 70%;
  }
`;
const Hr = styled.hr``;
const Bottom = styled.div`
  margin-top: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
`;
const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.border};
`;
