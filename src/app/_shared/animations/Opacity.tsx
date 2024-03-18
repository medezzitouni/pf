import { animated, useSpring } from '@react-spring/web'

type Props = {
  from: number,
  to: number,
  children: React.ReactNode
}

function Opacity({ from, to, children }: Props) {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: from },
      to: { opacity: to },
    }),
    []
  )

  return <animated.div style={props}>{children}</animated.div>
}