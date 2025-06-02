
// Label.tsx
export const Label = ({ text }) => <label>{text}</label>;

// ErrorMessage.tsx
export const ErrorMessage = ({ text }) => <span>{text}</span>;

// InputField.tsx
export const InputField = ({ label, error, ...props }) => (
  <>
    <Label text={label} />
    <input {...props} />
    {error && <ErrorMessage text={error} />}
  </>
);
