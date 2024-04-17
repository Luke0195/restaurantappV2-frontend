type ContainerProps = {
  children: React.ReactNode
}
export function Container(props: ContainerProps) {
  const { children } = props
  return <div className="py-4 px-12 calc w-[calc(100%-w32)]"> {children}</div>
}
