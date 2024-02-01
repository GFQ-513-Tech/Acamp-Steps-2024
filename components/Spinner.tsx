import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 20px solid ${({ color }) => color};
  border-radius: 50%;
  border-top-color: transparent;
  animation: ${spinAnimation} 0.8s linear infinite;
`;

const Spinner = ({ color = '#007bff', size = 40, thickness = 4 }) => {
  return (
    <SpinnerWrapper color={color} style={{ width: size, height: size, borderWidth: thickness }} />
  )
};

export default Spinner;
