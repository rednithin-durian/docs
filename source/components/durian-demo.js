import React, { useEffect } from 'react';
import axios from 'axios';
import * as config from '../../gatsby-config.js';

const {order_url, environment, access_key, durian_script } = config.plugins[1].options;

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export function DurianDemo() {
  useScript(durian_script);
  return (
    <div>
        <div id="pay-btn-container" className="pay"></div>
    </div>
  );
}

export const Demo = async () => {
  const url = order_url;
  const env = environment;
  const customer_name = "John Doe";
  const customer_email = "john.doe@durianpay.id";
  const currency = "IDR";
  const locale = "en";
  const amount = "80001";
  var body = {
    "amount": amount,
    "currency": "IDR",
    "customer": {
        "customer_ref_id": "cust_001",
        "email": customer_email,
        "given_name": customer_name
    },
    "items": [{
        "name": "LED Television",
        "qty": 1,
        "price": amount,
        "logo": "/static/tv_image.jpg",
        }],
    "order_ref_id": "order-key-000"
  };

  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": `${ access_key }`
  };
  const response = await axios.post(url, body, { headers });
  const data = response.data.data;
  const cinfo = {
    id: data.customer_id,
    name: customer_name,
    email: customer_email,
  };

  let dpay = window.Durianpay.init({
    environment: env,
    access_key: data.access_token,
    currency: currency,
    locale: locale,
    order_info: {
        id: data.id,
        customer_info: cinfo,
    },
    onSuccess: (response) => {
        // to keep it on same page we are providing a blank string
        window.location.href = "";
    }
  });
  dpay.checkout();
}
