import { useState } from "react";

export default function TextExpander({
  collapseNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor,
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded ? children : children.split(' ').slice(0, collapseNumWords).join(' ') + '...';

  function handleExpand(expanded) {
    setIsExpanded(!expanded)
  }
  return (
    <div className={className}>
      <span> {displayText} </span>
      <button style={{backgroundColor: buttonColor}} onClick={() => handleExpand(isExpanded)}>{isExpanded ? collapseButtonText : expandButtonText}</button>
    </div>
  );
}
