import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <label>Name
                <input 
                    name = "name"
                    type = "text"
                    placeholder = "Type Name"
                    value = {values.name}
                    onChange = {onChange}
                />
            </label>

            <label> Email
                <input
                    name = "email"
                    type = "email"
                    placeholder = "Type Email"
                    value = {values.email}
                    onChange = {onChange}
                />
            </label>

            <label> Role
                <select 
                    value = {values.role} 
                    name = "role"
                    onChange = {onChange}>
                    <option value = "">--- Select A Role ---</option>
                    <option value = "Saber">Saber</option>
                    <option value = "Lancer">Lancer</option>
                    <option value = "Archer">Archer</option>
                    <option value = "Rider">Rider</option>
                    <option value = "Caster">Caster</option>
                    <option value = "Assassin">Assassin</option>
                    <option value = "Berserker">Berserker</option>
                </select>
            </label>

            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    )
}
