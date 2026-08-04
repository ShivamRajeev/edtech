import { useState } from "react";

export default function InteractiveCard({
  as: Component = "article",
  className,
  children,
  onActive,
  isActive = false
}) {
  const [isPressed, setIsPressed] = useState(false);

  const classes = `${className} interactive-card ${isActive ? "is-active" : ""}`.trim();

  return (
    <Component
      className={classes}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      data-pressed={isPressed ? "true" : "false"}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onActive}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onActive?.();
        }
      }}
    >
      {children}
    </Component>
  );
}
