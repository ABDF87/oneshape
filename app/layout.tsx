import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FormContextProvider from '@/components/formContextProvider/FormContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'One Shape',
  description: 'Масаж та манікюр в Аркадії',
  keywords:
    'масаж в Аркадії, лімфодренажний масаж, массаж в Одессе, массаж лица, как избавиться от носогубных складок, масаж від зморшок,масаж обличчя одеса, массаж лица аркадия, массаж для лица, массаж от морщин, миофасциальный массаж лица, авторский массаж лица, масаж обличчя ефект, массаж обличчя аркадия, массаж для лиця, как убрать морщины между бровей, массаж лица классический, массаж лица , скульптурный массаж лица, буккальный массаж лица, массаж лица в одессе, массаж для лица от морщин, масаж для лиця, rf лифтинг массаж, массаж обличчя, масаж для обличчя від зморшок,face массаж, 3d лифтинг массаж лица, акция на массаж лица, масаж обличя аркадія, лимфодренажный массаж лица, масаж обличя аркадія, лимфодренажный массаж лица, массаж лица от морщин, миофасциальный массаж, массаж лица цена, массаж от морщин, масаж обличчя від зморшок, массаж лица одесса, масаж лиця, масаж лиця від зморшок, масаж обличчя аркадія, букальний масаж лиця.',
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
