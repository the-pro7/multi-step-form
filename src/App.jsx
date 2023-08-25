import "./styleshseet/App.scss";
import InputField from "./InputField";

export default function App() {
  let defaultProps = {

  }

  return (
    <>
      <InputField {...{type: 'text', text: 'Name'}}/>
      <InputField {...{type: 'email', text: 'Email Address'}}/>
      <InputField {...{type: 'number', text: 'Phone Number'}}/>
    </>
  );
}
