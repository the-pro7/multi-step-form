import InputField from "./InputField";

export default function FormPage() {
  let defaultProps = {};

  return (
    <main className="form">
      <h1>Personal info</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
        cumque! Numquam id eum facere labore.
      </h2>
      <h2></h2>
      <InputField {...{ type: "text", text: "Name" }} />
      <InputField {...{ type: "email", text: "Email Address" }} />
      <InputField {...{ type: "number", text: "Phone Number" }} />
    </main>
  );
}
