"use client"

import { useState } from "react"
import Image from "next/image"

interface AmbitLogoProps {
  width?: number
  height?: number
  className?: string
}

export function AmbitLogo({ width = 120, height = 60, className = "" }: AmbitLogoProps) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div
        className={`flex flex-col items-center justify-center font-bold text-foreground leading-tight ${className}`}
        style={{ minWidth: width, minHeight: height }}
      >
        <span className="text-lg">AMBIT</span>
        <span className="text-sm font-normal text-muted-foreground">Finvest</span>
      </div>
    )
  }

  return (
    <Image
      src="/ambit-logo.png"
      alt="Ambit Logo"
      width={width}
      height={height}
      className={className}
      onError={() => setImgError(true)}
      unoptimized
    />
  )
}
