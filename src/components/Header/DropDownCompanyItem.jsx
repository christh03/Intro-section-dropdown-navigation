export const DropDownCompanyItem = ({ href, text }) => {
  return (
    <li className="Header-dropDownCompany-li">
      <a href={href} className="Header-dropDownCompany-a">
        {text}
      </a>
    </li>
  );
};
