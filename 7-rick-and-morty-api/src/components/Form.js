import React from 'react';
import {useForm} from '../hooks/useForm'

const Form = ({setName}) => {
    const [inputs, handleChange, reset] = useForm({name:''});
    const {name} = inputs;

    const handleSubmit = (e) => {
        e.preventsDefauly();

        if(!name.trim()){
            return Swal.fire({
                tittle: 'Error',
                text: 'Insert a Name',
                icon: 'error'
            });
        }
        setName(name.trim().toLowerCase());

        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange} className="form-control mb-2" name="name"
            placeholder="Enter a character name">

            </input>
            <button className="btn btn-info" type="submit">Search</button>
        </form>
    );
}

export default Form;