import { useEffect, useState } from 'react'

interface NumberCountProp {
  number: string
  duration?: number
}
export const useNumberCount = ({ number, duration }: NumberCountProp) => {
  /* 동시에 종료하여야 하기 때문에 duration 값을 2000ms 으로 설정하였고 
    부모 컴포넌트에서 duration 값을 조정할 수 있도록 props 로 정의 */
  const easeFormula = (t: number) => --t * t * t + 1
  // 1000ms 당 60번의 업데이트를 진행 할 경우 1번 변화 후 지속되는 frame 지속시간을 정의
  const eachFrameDuration = 1000 / 60
  // 부모 컴포넌트로부터 전달된 number 값을 10진수로 변환
  const maxNumber = parseInt(number, 10)
  const [count, setCount] = useState(0)
  // 전체 2000ms(2초)를 앞서 정의한 한 프레임당 지속시간으로 나누어 총 변경되야 하는 횟수를 정의
  const totalFrames = Math.round(duration / eachFrameDuration)

  useEffect(() => {
    // 한번 frame 이 업데이트 될 때마다 1씩 증가
    let currentframe = 0
    // setInterval API 를 활용하여 사전에 정의한 지속시간 마다 노출되는 Number(count)를 변경
    const counter = setInterval(() => {
      currentframe++
      // 현재 진행된 frame 과 전체 Frame을 통해 현재까지의 진행률을 계산
      const completeRate = easeFormula(currentframe / totalFrames)
      // 최종으로 변경되어야 할 값에 현재까지의 진행률을 곱하여 나온 값을 count의 상태로 업데이트
      const currentCount = maxNumber * completeRate
      setCount(currentCount)

      // 현재의 frame 이 최종 frames 와 동일하게 되면 종료
      if (currentframe === totalFrames) {
        clearInterval(counter)
      }
    }, eachFrameDuration)
  }, [totalFrames, eachFrameDuration, maxNumber])

  return Math.floor(count)
}
