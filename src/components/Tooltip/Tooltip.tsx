import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

interface Props {
  text: string
  position?: 'top' | 'right' | 'bottom' | 'left'
  children: React.ReactNode
}

interface TextProps {
  isTooltipVisible: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
}

const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;
  justify-content: center;
  display: flex;
`

const Text = styled.span<TextProps>`
  display: block;
  opacity: 0;
  visibility: ${({ isTooltipVisible }) => (isTooltipVisible ? 'visible' : 'hidden')};
  background: var(--main-bg-color);
  border-radius: 8px;
  color: var(--main-color);
  padding: 0.5em 1em;
  position: absolute;
  top: 100%;
  white-space: pre-line;
  width: max-content;
  max-width: 250px;
  z-index: 1;
  margin-top: 18px;
`

export const Tooltip: React.FC<Props> = ({ children, text, position }) => {
  const setTextPosition = (inView: boolean, position: string): React.CSSProperties => {
    switch (position) {
      case 'bottom':
        return {
          opacity: 1,
        }
        break
      case 'top':
        return {
          bottom: '100%',
          top: 'unset',
          marginBottom: '18px',
          opacity: 1,
        }
        break
      case 'right':
        return {
          top: '50%',
          left: inView ? '100%' : 'unset',
          transform: 'translateY(-50%)',
          marginTop: 'unset',
          marginLeft: inView ? '18px' : 'unset',
          opacity: 1,
        }
        break
      case 'left':
        return {
          top: '50%',
          right: inView ? '100%' : 'unset',
          marginTop: 'unset',
          left: 'unset',
          transform: 'translateY(-50%)',
          marginRight: '18px',
          opacity: 1,
        }
        break
      default:
        break
    }
  }

  const [ref, inView] = useInView({ threshold: 1 })
  const [isTooltipVisible, setTooltipVisible] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState(setTextPosition(inView, position))

  const showTooltip = (): void => setTooltipVisible(true)

  const closeTooltip = (): void => setTooltipVisible(false)

  useEffect(() => {
    setTooltipPosition(setTextPosition(inView, position))
  }, [isTooltipVisible])

  return (
    <TooltipWrapper onFocus={showTooltip} onBlur={closeTooltip} onMouseEnter={showTooltip} onMouseLeave={closeTooltip}>
      <Text ref={ref} style={tooltipPosition} position={position} isTooltipVisible={isTooltipVisible}>
        {text}
      </Text>
      {children}
    </TooltipWrapper>
  )
}

Tooltip.defaultProps = {
  position: 'bottom',
}
