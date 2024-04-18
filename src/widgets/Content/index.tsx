type ContentProps = {
  children: React.ReactNode
}
export function Content({ children }: ContentProps) {
  return <div className="py-4 my-8 w-screen">{children}</div>
}
