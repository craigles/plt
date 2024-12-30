import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="./images/store/shirt.jpg"
        width={800}
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Shirt</h3>
        <h5>$30.00</h5>
      </div>
    </div>
    <form action={`https://plt-cnh3fzhghnesfsby.australiaeast-01.azurewebsites.net:4242/create-checkout-session`} method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = (message: any) => (
  <section>
    <p>{message}</p>
  </section>
);

export const Store: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <>
      <h1><a id="store" href="/#"></a>Store</h1>
      <ProductDisplay />
    </>
  );
}