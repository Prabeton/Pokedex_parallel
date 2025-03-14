import styled from "styled-components";
import { useSnackbar } from "notistack";
import useRegisterForm from "../../hooks/useRegisterForm";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 60px;
`;

const Heading = styled.div`
  width: 53%;
  height: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;
const Form = styled.form`
  width: 640px;
  min-height: 478px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const InputBox = styled.div`
  width: 99%;
  height: auto;
`;
const Label = styled.div`
  width: 100%;
  height: 21px;
  font-family: "Pokemon-Solid";
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  margin-bottom: 8px;
`;

const Input = styled.input`
  height: 52px;
  width: 100%;
  background-color: #00ff00;
  border: 1px solid #4b5563;
  font-family: "Pokemon-Solid";
  border-radius: 20px;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  padding-left: 10px;
  padding-top: 4px;
  box-sizing: border-box;
  caret-color: #000;

  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: #9ca3af;
  }
`;
const RegisterButton = styled.button`
  width: 165px;
  height: 51px;
  border-radius: 20px;
  color: #fff;
  background-color: #db1a6e;
  font-family: "Pokemon-Solid";
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  &:active {
    border: 3px solid #e3b10e;
    color: #e3b10e;
  }
`;

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { formik } = useRegisterForm(enqueueSnackbar);

  return (
    <Container>
      <Heading>Zarejestruj sie</Heading>
      <Form onSubmit={formik.handleSubmit}>
        <InputBox>
          <Label>name</Label>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </InputBox>

        <InputBox>
          <Label>your email</Label>
          <Input
            type="email"
            placeholder="name@poke-fun.com"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </InputBox>
        <InputBox>
          <Label>password</Label>
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </InputBox>
        <InputBox>
          <Label>repeat password</Label>
          <Input
            type="password"
            placeholder="repeat password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </InputBox>
        <RegisterButton type="submit">Create Account</RegisterButton>
      </Form>
    </Container>
  );
};
export default Register;
