import React from 'react';
export const useForm = (initialState) => {
    const [inputs, setInputs] = React.useState(initialState);

    const handleChange = (e) => {
        const {name, value, cheked, type} = e.target;
        setInputs((old) => ({
           ...old ,
           [name]: type === 'checkbox' ? cheked: value,
        }));
    };

    const reset = () => {
        setInputs(initialState);
    }

    return [inputs, handleChange, reset];
}