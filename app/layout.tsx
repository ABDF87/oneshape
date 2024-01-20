import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FormContextProvider from '@/components/formContextProvider/FormContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'One Shape',
  description: 'Масаж та манікюр',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Caveat&family=Cormorant+Garamond:wght@300&family=Nunito+Sans:opsz@6..12&display=swap'
          rel='stylesheet'
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-11398807049'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11398807049'); `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-11398807049/I7jKCN7K8IkZEIn8r7sq',
      'value': 1.0,
      'currency': 'UAH',
      'event_callback': callback

  });
  return false;
}

`,
          }}
        />
      </head>

      <body className={inter.className}>
        <FormContextProvider>{children}</FormContextProvider>
      </body>
    </html>
  );
}
