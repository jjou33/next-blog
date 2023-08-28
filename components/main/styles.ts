import styled, { keyframes } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100vh;
  gap: 10rem;
  background: white;
  z-index: 1;
`

export const WaveKeyframe1 = keyframes`
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
`
export const WaveKeyframe2 = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`
export const WaveKeyframe3 = keyframes`
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
`
export const WaveKeyframe4 = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`

export const WaveAnimationContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  svg {
    width: 500px;
  }
`

export const SectionContainer = styled.div`
  padding: 0 2rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
export const WaveAnimationBox = styled.div`
  .editorial {
    display: block;
    width: 100%;
    height: 100px;
    max-height: 100px;
    margin: 0;
    z-index: 5;
    bottom: 0;
    position: absolute;
  }

  .parallax1 > use {
    animation: ${WaveKeyframe1} 10s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax2 > use {
    animation: ${WaveKeyframe2} 8s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax3 > use {
    animation: ${WaveKeyframe3} 6s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
  .parallax4 > use {
    animation: ${WaveKeyframe4} 4s linear infinite;
    &:nth-of-type(1) {
      animation-delay: -2s;
    }
  }
`
export const IndicatorContainer = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 70%;
  background-color: white;
  position: absolute;
  top: calc(100vh - 4.7rem);

  @media screen and (max-width: 768px) {
    top: calc(100vh - 4.5rem);
  }
`
export const scroll = keyframes`
  0% {
    bottom: 80%;
    opacity: 1;
  }

  100% {
    bottom: 20%;
    opacity: 0;
  }
`

export const MouseIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`
export const MouseIndicator = styled.div`
  position: relative;
  width: 2rem;
  height: 3rem;
  border: solid 4px;
  border-radius: 30px;

  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: #3e54ac;
    left: 50%;
    transform: translateX(-50%);
    animation: ${scroll} 2s infinite;
  }
`
