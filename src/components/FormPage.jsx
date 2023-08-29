import InputField from "./InputField";

export default function FormPage() {
  let defaultProps = {

  }

  return (
    <main className="formContainer">
    <h1>Personal info</h1>
    <h2>Please provide your name, email address and, and phone number</h2>
      <InputField {...{type: 'text', text: 'Name'}}/>
      <InputField {...{type: 'email', text: 'Email Address'}}/>
      <InputField {...{type: 'number', text: 'Phone Number'}}/>
      {/* <button className="nextStepBtn">Next step</button> */}
    </main>
  );
}
