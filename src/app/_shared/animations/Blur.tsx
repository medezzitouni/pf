import { animated, easings, useSpring } from '@react-spring/web'

type Props = {
  children: React.ReactNode,
  className?: string,
}

export default function Blurry({ children, className }: Props) {
  const [props, api] = useSpring(
    () => ({
      from: { filter: "blur(7px)" },
      to: { filter: "blur(1px)" },
      config: { easing: easings.easeInBack(5) },
    }),
    []
  )
  
  return <animated.div className={className} style={props}>{children}</animated.div>
}