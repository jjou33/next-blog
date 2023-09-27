import * as S from './styles'

import Image from 'next/image'
import theme from 'styles/theme'
import MotionShowBox from 'components/common/Motion/MotionShowBox'
import FlyingAirplaneLottie from 'components/common/Lottie/FlyingAirplane'

import { Badge, Typography } from 'components/common'
import {
  Divider,
  FlexBox,
  SubMaxContainer,
} from 'components/common/StyledLayout'
import { PostData } from 'types/post'

const PostListHeader = ({
  categoryId,
  postInfo,
  keywords,
}: {
  categoryId?: string | string[]
  postInfo: PostData[]
  keywords: string[]
}) => {
  const { category1depth, category2depth } = postInfo[0]

  return (
    <S.HeroImageContainer>
      <FlexBox
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        position="relative"
        width="100%"
        height="100%"
        padding={'0 2rem'}
      >
        <Image
          src={`/static/images/${category1depth}/${category2depth}/headImage.png`}
          alt={'alt'}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(0.4)',
            zIndex: '-1',
          }}
        />
        <FlexBox flexDirection="column" position="absolute">
          <SubMaxContainer>
            <S.LottieContainer>
              <FlyingAirplaneLottie />
            </S.LottieContainer>
            <MotionShowBox showDirection="down">
              <S.TextContainer>
                <Typography
                  variant="h3"
                  aggressive="montserratAlternates_Medium_001"
                  color={theme.colors.gray_002}
                  align="center"
                >
                  {`${categoryId ? categoryId : 'ALL POST'} Collection`}
                </Typography>
              </S.TextContainer>
              <Divider
                direction="horizontal"
                width="100%"
                height="1px"
                margin="20px 0 0 0"
                color={theme.colors.gray_002}
              />
              <FlexBox
                gap={'1rem'}
                margin={'1rem 0'}
                flexWrap={'wrap'}
                justifyContent="center"
              >
                {keywords.map(keyword => (
                  <Badge
                    borderRadius="2rem"
                    backgroundColor={theme.colors.primary_004}
                    aggressive="montserratAlternates_Regular_003"
                    padding="10px 20px 10px 20px"
                    key={keyword}
                  >
                    {keyword}
                  </Badge>
                ))}
              </FlexBox>
              {/* <S.DynamicTextBox>
              <Typography
                variant="span"
                aggressive="montserratAlternates_Medium_002"
                color={theme.colors.primary_006}
              >
                {categoryId ? `${currentTitle}` : 'All Posts'}
              </Typography>
            </S.DynamicTextBox> */}
            </MotionShowBox>
          </SubMaxContainer>
        </FlexBox>
        <FlexBox justifyContent="center" margin="5rem 0 0 0">
          <S.MouseIndicatorWrapper>
            <S.MouseIndicator></S.MouseIndicator>
          </S.MouseIndicatorWrapper>
        </FlexBox>
      </FlexBox>
    </S.HeroImageContainer>
  )
}

export default PostListHeader
