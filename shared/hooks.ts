import { useParams } from "next/navigation";
import { INVITED_FRIENDS_INFO } from "./constants";
import { useEffect, useRef } from "react";
import { useInView, useSpring, useScroll, useTransform, useMotionValue, useMotionValueEvent } from "motion/react";

export const useInvitedUser = () => {
  const { slug } = useParams();
  const invitedFriendInfo = INVITED_FRIENDS_INFO[slug as keyof typeof INVITED_FRIENDS_INFO];

  return invitedFriendInfo;
};

export const useParallax = ({ offset = ['start end', 'end start'], isShowSidebar }:  { offset?: string[], isShowSidebar: boolean}) => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(parallaxRef)

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    offset
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
    mass: 1,
    // duration: 0.3,
    // bounce: 1
  })
  const baseX = useTransform(smoothProgress, [1, 0], [-75,0])
  const x = useTransform(baseX, (v) => isInView ? v : 0)

  const frozenX = useMotionValue(0);
  const booleanRef = useRef<boolean>(isShowSidebar)

  useEffect(() => {
    if (isShowSidebar) {
      booleanRef.current = isShowSidebar
    } else {
      setTimeout(() => {
        booleanRef.current = isShowSidebar
      }, 400)
    }
  }, [isShowSidebar])

  useMotionValueEvent(x, 'change', (latest) => {
    if (!isInView || booleanRef.current) return;

    frozenX.set(latest);
  })

  return { x: frozenX, isInView, parallaxRef }
}