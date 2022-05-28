import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const ButtonContainer = styled.span`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  align-items: center;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.7;
  background: #049AE1;
  border-radius: 2rem;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};
  &:hover {
    opacity: 1;
  }
`;


const BTP = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if(window.innerWidth > 700){
      const checkScrollHeight = () => {
        if ( !showButton && window.pageYOffset > 400) {
          setShowButton(true);
        } else if ( (showButton && window.pageYOffset <= 400 )) {
          setShowButton(false);
        }
      };
      window.addEventListener('scroll', checkScrollHeight);
      return () => {
        window.removeEventListener('scroll', checkScrollHeight);
      };
    }
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (

    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BTP;