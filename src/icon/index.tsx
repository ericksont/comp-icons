import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div<{ color?: string }>`
  color: ${p => p.color || 'pink'};
`;

interface IconProps {
  text: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ text, color }) => (
  <StyledIcon color={color}>{text}</StyledIcon>
);

export { IconProps, Icon };