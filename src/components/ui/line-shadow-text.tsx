"use client"

import { motion, MotionProps } from "framer-motion"
import React from "react"

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string
  as?: React.ElementType
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className = "",
  as: Component = "span",
  ...props
}: LineShadowTextProps) {

  const MotionComponent = motion(Component)

  const content = typeof children === "string" ? children : null

  if (!content) {
    throw new Error("LineShadowText only accepts string content")
  }

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      data-text={content}
      className={`relative z-0 inline-flex line-shadow-animate
        after:absolute after:top-[0.05em] after:left-[0.05em]
        after:content-[attr(data-text)]
        after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]
        after:bg-[length:6px_6px]
        after:bg-clip-text after:text-transparent
        after:-z-10
        ${className}
      `}
      {...props}
    >
      {content}
    </MotionComponent>
  )
}