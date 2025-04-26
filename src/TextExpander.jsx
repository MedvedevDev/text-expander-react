import { useState } from "react";

export default function TextExpander({
  collapseNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded ? children : children.split(' ').slice(0, collapseNumWords).join(' ') + '...';

  function handleExpand(expanded) {
    setIsExpanded(!expanded)
  }

  const buttonStyle = {
    background: "none",
    color: buttonColor,
    marginLeft: "6px",
    border: "none",
    cursor: "pointer",
    font: "inherit"
  }

  return (
    <div className={className}>
      <span> {displayText} </span>
      <button style={buttonStyle} onClick={() => handleExpand(isExpanded)}>{isExpanded ? collapseButtonText : expandButtonText}</button>
    </div>
  );
}
