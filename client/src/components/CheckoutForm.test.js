import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    // render component
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/checkout form/i); // when component renders, this text should be on screen in header area

});

test("form shows success message on submit with form details", () => {

    // render component
    const { getByLabelText, getByText } = render(<CheckoutForm />);

    // check to see if these texts have rendered
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);

    // check to see if submit button is rendered
    const submitButton = getByText('Checkout');

    // fireEvent for each input
    fireEvent.change(firstNameInput, {

        target: { name: 'firstName', value: 'testFirstName'}

    });
    fireEvent.change(lastNameInput, {

        target: { name: 'lastName', value: 'testLastName'}

    });
    fireEvent.change(addressInput, {

        target: { name: 'address', value: 'testAddress'}

    });
    fireEvent.change(cityInput, {

        target: { name: 'city', value: 'testCity'}

    });
    fireEvent.change(stateInput, {

        target: { name: 'state', value: 'testState'}

    });
    fireEvent.change(zipInput, {

        target: { name: 'zip', value: 'testZIP'}

    });

    // click checkout in order to create the success message
    fireEvent.click(submitButton);

    // check all fields to see if the text has been added in the success message
    const displaysFirstName = getByText(/testFirstName/i);
    const displaysLastName = getByText(/testLastName/i);
    const displaysAddress = getByText(/testAddress/i);
    const displaysCity = getByText(/testCity/i);
    const displaysState = getByText(/testState/i);
    const displaysZip = getByText(/testZIP/i);

});
