import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  margin: auto;
  display: ${({ open }) => (open ? "block" : "none")};
  input,
  textarea,
  button {
    padding: 10px;
    display: block;
    width: 100%;
    margin: 10px 0;
  }
  button{
    cursor: pointer;
  }
  @media only screen and (max-width: 1200px) {
   width: 100%; 
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 1200px;
  margin: auto;
`;

export const Toggle = styled.button`
  margin-top: 10px;
    color: white;
    border: none;
    cursor: pointer;
  padding: 5px 10px;
  background-color:lightblue;
`;

export const Card = styled.div`
  width: 30%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: lightblue;
  h2 {
    word-wrap: break-word;
    background-color: white;
    padding: 10px 0;
  }
  button {
    padding: 10px;
    display: block;
    width: 100%;
    color: white;
    border: none;
    cursor: pointer;
  }
  .red{
    border-radius: 0 0 15px 15px;
    background-color: red;
    transition-duration: .5s;
    &:hover{
      color: red;
      background-color: white;
    }
  }
  .green {
    background-color: green;
    border-radius: 15px 15px 0 0;
    transition-duration: .5s;
    &:hover{
      color: green;
      background-color: white;
    }
  }
`;
