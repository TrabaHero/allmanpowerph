export function WindowPadding({ children }: { children: React.ReactNode }) {
  return <div className="px-32 py-20">{children}</div>;
}

export function WindowPage({ children }: { children?: React.ReactNode }) {
  return <div className="w-[100vw] h-[100vh]">{children}</div>;
}
