import { useField } from "formik";
import { useState } from "react";

export default function LiveFeedbackDisplayer({ label, helpText, ...props }) {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);

  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length >= 0) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between">
          <label htmlFor={props.id}>{label}</label>{" "}
          {showFeedback ? (
            <div
              id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
        {helpText}
      </div>
    </div>
  );
}
