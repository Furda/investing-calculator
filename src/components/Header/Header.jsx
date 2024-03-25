import AppImage from "../../assets/investment-calculator-logo.png";

export default function Header({ title }) {
  return (
    <header id="header">
      <img src={AppImage} alt="logo" />
      <h1>{title}</h1>
    </header>
  );
}
