import { CheckCircle2 } from 'lucide-react';

function SuccessState({ onStartOver }) {
  return (
    <div className="wizard-card success-card">
      <div className="success-icon">
        <CheckCircle2 size={40} strokeWidth={1.75} />
      </div>
      <h2>Account created successfully</h2>
      <p>Your onboarding details have been submitted successfully.</p>
      <button type="button" className="btn btn-primary" onClick={onStartOver}>
        Start over
      </button>
    </div>
  );
}

export default SuccessState;
