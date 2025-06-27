// LanguageToggle.tsx
import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import styled from 'styled-components';

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const ToggleButton = styled.div`
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px); /* suporte Safari */
  background: linear-gradient(
    90deg,
    rgba(116, 116, 116, 0.2) 0%,
    rgba(228, 228, 228, 0.2) 100%
  );
`;

const FlagImg = styled.img`
  width: 24px;
  height: 24px;
`;

const LanguageToggle: React.FC = () => {
  // true = inglês, false = português
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    i18next.changeLanguage(isEnglish ? 'en' : 'pt');
  }, [isEnglish]);

  const handleToggle = () => {
    setIsEnglish(prev => !prev);
  };

  return (
    <ToggleLabel onClick={handleToggle}>
      <HiddenCheckbox checked={isEnglish} onChange={handleToggle} />
      <ToggleButton>
        <FlagImg 
          src={isEnglish ? "EN.svg" : "BR.svg"} 
          alt={isEnglish ? "English" : "Português"} 
        />
        {isEnglish ? 'EN' : 'BR'}
      </ToggleButton>
    </ToggleLabel>
  );
};

export default LanguageToggle;
