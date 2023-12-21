import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f8f8;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add box shadow for separation */

  h1 {
    font-family: "Monospace", Monaco;
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px; /* Adjust margin to create space between the header and content */
  }

  @media (max-width: 600px) {
    padding: 10px;
  }
`;
export const SearchInputContainer = styled.div`
  position: relative;
  width: 100%; // Set width to 100%
  max-width: 500px; // Set a max-width if needed
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 80%;
  padding: 20px;
  padding-left: 40px;
  margin-top: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #023678;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 60%;
  left: 15px;
  transform: translateY(-50%);
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #555;
`;
export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: start;
  width: 100%;
`;

export const NoteContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
  background-color: ${(props) => props.color || "#fff"};
  min-width: 200px;
  word-wrap: break-word;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  min-height: 200px;

  h3 {
    margin-bottom: 8px;
    font-size: 1.2rem;
    text: #023678;
  }

  p {
    margin-bottom: 10px;
    color: #555;
  }

  button {
    margin-top: 18px;
    padding: 8px 12px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const NoteFormContainer = styled.div`
  margin: 20px 0;
  width: 100%; // Set width to 100%
  max-width: 500px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  input,
  textarea,
  button {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  textarea {
    resize: vertical;
  }

  button {
    background-color: #023678;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #04bade;
  }
`;

export const ColorPickerContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

// New style for mobile layout
export const MobileLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  margin-right: 12px;
`;
