import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: #f7f8fa;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`;

export const TextTitle = styled.h2`
  font-family: "Patrick Hand SC", cursive;
  color: black;
  font-size: 3.0rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const TextSubTitle = styled.h3`
  font-family: "Patrick Hand SC", cursive;
  color: black;
  font-size: 2.5rem;
  line-height: 1.3;
`;

export const TextDescription = styled.p`
  font-family: "Patrick Hand SC", cursive;
  color: black;
  font-size: 2.6rem;
  line-height: 1.4;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
