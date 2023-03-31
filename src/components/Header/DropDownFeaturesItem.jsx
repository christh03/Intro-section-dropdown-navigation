export const DropDownFeaturesItem = ({ href, text, svg }) => {
  return (
    <li className="Header-dropDownFeatures-li">
      <a className="Header-dropDownFeatures-a" href={href}>
        <img className="Header-dropDownFeatures-img" src={svg} alt={text} />
        {text}
      </a>
    </li>
  );
};
