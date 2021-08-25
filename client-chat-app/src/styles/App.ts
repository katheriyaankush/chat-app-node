import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
    text-align: center;
`

export const AppLogo = styled.div`{
  height: 40vmin;
  pointer-events: none;
}`

export const AppLogoAnimation = `
@media (prefers-reduced-motion: no-preference) {
  ${AppLogo} {
    animation: AppLogoSpin infinite 20s linear;
  }
}`

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const AppLink = styled.div`
  color: #61dafb;
`


export const AppLogoSpin: any = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;