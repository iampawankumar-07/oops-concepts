

// Button.tsx
export const Button = ({ children, className = '', ...props }) => {
  return <button className={`btn ${className}`} {...props}>{children}</button>;
};

// PrimaryButton.tsx
export const PrimaryButton = (props) => <Button className="btn-primary" {...props} />;

// SecondaryButton.tsx
export const SecondaryButton = (props) => <Button className="btn-secondary" {...props} />;
