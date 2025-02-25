import clsx from 'clsx';

import { roboto } from '@shared/ui';

import '../styles/globals.css';

export function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full min-h-full">
      <body
        className={clsx(
          roboto.className,
          'min-h-full w-full min-w-[360px]',
          'break-words bg-[#8b4c8b] text-white'
        )}
      >
        {children}
      </body>
    </html>
  );
}
