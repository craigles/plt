// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Qa6aS4CevbvwTZrB2rOtSCrIOdPB6fDLAoJJvrQlC2Oemo1J19aM1QdwzSeUV65uOtJNrZmxDNrHgEz8b1e0p4x00d4q3kR2R');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/store';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1Qa6c44CevbvwTZrmmzF7VjB',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});

app.listen(8080, () => console.log('Running on port 8080'));