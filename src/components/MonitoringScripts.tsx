import React from 'react';

const MonitoringScripts: React.FC = () => {
  return (
    <>
      {/* // <!-- Hotjar Tracking Code for https://spacex-launches-nathan.vercel.app/ --> */}
      <script dangerouslySetInnerHTML={{
        __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2428418,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}} />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-31716769-23" />
      <script dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-31716769-23');
      `}} />
    </>
  );
}

export default MonitoringScripts;
