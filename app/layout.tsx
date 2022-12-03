export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html>
            <head></head>
            <body>
                {children}
            </body>
        </html>
    )
  }