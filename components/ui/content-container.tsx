interface ContentContainerProps {
  children: React.ReactNode
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <main className="flex-grow px-4 pt-4 max-w-4xl mx-auto w-full">
      {children}
    </main>
  )
}

