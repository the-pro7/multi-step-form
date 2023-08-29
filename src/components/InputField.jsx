export default function InputField({
    type,
    text,
    placeholder

}) {
    return (
        <div className="form__input-field">
            <p className="error"></p>
            <input type={type} id={type} name={type} placeholder={placeholder} required/>
            <label htmlFor={type}>{text}</label>
        </div>
    );
}