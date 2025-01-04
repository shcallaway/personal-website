import NextImage from "next/image"
import { cn } from "@/lib/utils"

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function Image({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  priority = false
}: ImageProps) {
  // Handle both full paths and relative paths
  const imagePath = src.startsWith('/') ? src : `/images/${src}`

  return (
    <div className={cn("relative", className)}>
      <NextImage
        src={imagePath}
        alt={alt}
        width={width}
        height={height}
        className="object-cover rounded-lg"
        priority={priority}
      />
    </div>
  )
}

