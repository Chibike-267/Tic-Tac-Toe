import styled from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #ADD8E6;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  max-width: 400px;
  margin: 50px auto;
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  background-color: #444;
  padding: 5px;
  border-radius: 10px;
`;

export const Square = styled.button`
  width: 100px;
  height: 100px;
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.value === 'X' ? '#ff6b6b' : '#4ecdc4'};
  background-color: bisque;
  border: 2px solid #888;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }

  &::after {
    content: '${props => props.value || ''}';
  }
`;

export const Status = styled.div`
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const ResetButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;
