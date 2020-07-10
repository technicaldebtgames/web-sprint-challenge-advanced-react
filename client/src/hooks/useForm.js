import {useState} from 'react';

// hook that sets values and handles submit/changes in a form
const useForm = (initVals, initMsg) => {

    const [message, setMessage] = useState(initMsg);
    const [values, setValues] = useState(initVals);

    const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setMessage(true);
    }

    return [values, message, handleChanges, handleSubmit];

};

export default useForm;