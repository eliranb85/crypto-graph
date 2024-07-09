// src/StockdioWidget.js
import React, { useEffect } from 'react';

const StockdioWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
if (typeof(stockdio_events) == "undefined") {
      stockdio_events = true;
      var stockdio_eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var stockdio_eventer = window[stockdio_eventMethod];
      var stockdio_messageEvent = stockdio_eventMethod == "attachEvent" ? "onmessage" : "message";
      stockdio_eventer(stockdio_messageEvent, function (e) {
         if (typeof(e.data) != "undefined" && typeof(e.data.method) != "undefined") {
            eval(e.data.method);
         }
      },false);
   }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<iframe id='st_9ce5d89dd7c2433c96520ceecccff8a4' frameBorder='0' scrolling='no' width='100%' height='100%' src='https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=3D87FF7449D843C899E09953497E5F96&stockExchange=USA&symbols=AAPL;MSFT;GOOG;FB;ORCL&palette=Financial-Light&onload=st_9ce5d89dd7c2433c96520ceecccff8a4'></iframe>
  );
};

export default StockdioWidget;
