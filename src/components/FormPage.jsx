import InputField from "./InputField";

export default function FormPage() {
  let defaultProps = {};

  return (
    <main className="formContainer">
      <h1>Personal info</h1>
      <h2>Please provide your name, email address and, and phone number</h2>
      <InputField type="text" text="Name" placeholder={"e.g. Stephen King"} />
      <InputField
        type="email"
        text="Email Address"
        placeholder={"e.g. stephenking@lorem.com"}
      />
      <InputField
        type="number"
        text="Phone Number"
        placeholder={"e.g. +1 234 567 890"}
      />
    </main>
  );
}
