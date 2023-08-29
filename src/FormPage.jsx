import InputField from "./InputField";

export default function FormPage() {
  let defaultProps = {};

  return (
    <main className="form">
      <h1>Personal info</h1>
      <InputField {...{ type: "text", text: "Name" }} />
      <InputField {...{ type: "email", text: "Email Address" }} />
      <InputField {...{ type: "number", text: "Phone Number" }} />
    </main>
  );
}
