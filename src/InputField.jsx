export default function InputField({
    type,
    text

}) {
    return (
        <div className="form__input-field">
            <p className="error"></p>
            <input type={type} id={type} name={type} placeholder='' required/>
            <label htmlFor={type}>{text}</label>
        </div>
    );
}