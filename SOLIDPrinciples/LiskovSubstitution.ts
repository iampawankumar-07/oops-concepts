type AuthProps = {
  onSubmit: (data: { email: string; password: string }) => void;
};

const EmailAuthForm = ({ onSubmit }: AuthProps) => { /* ... */ };
const GoogleAuthForm = ({ onSubmit }: AuthProps) => { /* ... */ };

// Can safely substitute either one
// <AuthProviderForm formComponent={EmailAuthForm} />
// <AuthProviderForm formComponent={GoogleAuthForm} />
