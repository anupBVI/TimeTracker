import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
export const FormContainer = styled.div`
  width: 70vw;
  padding: 12px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
export const FormHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
export const FormBody = styled.form`
  padding: 4px;
  display: flex;
  gap: 1.3rem;
  flex-direction: column;
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SectionHeading = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #414141;
`;

export const FormInputWrapper = styled.div`
  /* background: #000; */
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 5px;
`;

export const FormLabel: any = styled.label`
  cursor: pointer;
`;

export const FormInput: any = styled.input`
  width: 100%;
  padding: 9px 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const ErrorMessage: any = styled.span`
  font-size: 14px;
  color: #e54040;

  /* display: none; */
`;
export const SubmitButton = styled.button`
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

export const FormSelect = styled.select`
  width: 100%;
  padding: 9px 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;