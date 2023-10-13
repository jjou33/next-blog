import * as S from './styles'

import ColorText from 'components/common/ColorText'
import ComputerLottie from 'components/common/Lottie/computer'
import MotionShowBox from 'components/common/Motion/MotionShowBox'

import { useChangeOpacityByScroll } from 'hooks/useScrollAnimation'
import { useImageIndexSlider } from 'hooks/useIntervalAnimation'
import { FlexBox } from 'components/common/StyledLayout'

const HeroSection = () => {
  const IMAGE_DATA = {
    LIST: [
      '/static/images/HeroImage/landing.jpg',
      '/static/images/HeroImage/landing2.jpg',
      '/static/images/HeroImage/landing3.jpg',
    ],
  }

  const currentPercentage = useChangeOpacityByScroll()
  const currentImage = useImageIndexSlider(IMAGE_DATA.LIST)

  return (
    <S.HeroImageContainer>
      {IMAGE_DATA.LIST.map((image, index) => (
        <S.StyledImage
          key={index}
          src={image}
          alt={'Hero Image'}
          fill
          selected={index === currentImage}
        />
      ))}
      <S.HeroInfoContainer currentPercentage={currentPercentage}>
        <FlexBox
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          textAlign="center"
          gap="1rem"
          padding={'0 2rem'}
        >
          <S.HeroContentsWrapper>
            <S.HeroTextWrapper>
              <ColorText
                text="HIPPO'S DEV DIARY"
                aggressive="montserratAlternates_Medium_002"
              />
            </S.HeroTextWrapper>
            <S.LottieWrapper>
              <MotionShowBox showDirection="down">
                <ComputerLottie />
              </MotionShowBox>
            </S.LottieWrapper>
          </S.HeroContentsWrapper>

          <S.MouseIndicatorWrapper>
            <S.MouseIndicator></S.MouseIndicator>
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </S.HeroInfoContainer>
    </S.HeroImageContainer>
  )
}

export default HeroSection
