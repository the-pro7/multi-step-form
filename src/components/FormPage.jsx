import InputField from "./InputField";

export default function FormPage() {
  let defaultProps = {

  }

  return (
    <main className="formContainer">
    <h1>Personal info</h1>
    <h2></h2>
      <InputField {...{type: 'text', text: 'Name'}}/>
      <InputField {...{type: 'email', text: 'Email Address'}}/>
      <InputField {...{type: 'number', text: 'Phone Number'}}/>
    </main>
  );
}
