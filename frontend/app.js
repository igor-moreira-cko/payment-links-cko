const data = {
    "amount": 1000,
    "currency": "EUR",
    "reference": "ORD-123A",
    "billing": {
        "address": {
            "address_line1": "Checkout.com",
            "address_line2": "90 Tottenham Court Road",
            "city": "London",
            "state": "London",
            "zip": "W1T 4TJ",
            "country": "GB"
        },
    },
    "customer": {
        "name": "Bruce Wayne",
        "email": "brucewayne@gmail.com"
    },
    "success_url": "/success",
    "failure_url": "/failure",
    "cancel_url": "/checkout"
}

const requestPaymentLinks = async () => {
    await fetch("/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            window.location.href = data._links.redirect.href
        })
}