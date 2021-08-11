import StripeCheckout from "react-stripe-checkout";

const CheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JNCFqGdFrw0Jyi0v5uUkMUnwmLbGQJ2f80mUJBHozwd4lpcyCjkG4Zh84X4kFJ5dRVolV4vW2mJ5omxW7HSJeZB0014JhPK5C';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay now'
            name='Moria Bookstore'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default CheckoutButton
