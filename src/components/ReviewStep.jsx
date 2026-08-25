import { ArrowLeft, Check, UserRound, ShieldCheck } from 'lucide-react';
import { onboardingSchema } from '../schemas/onboardingSchema';

const GENDER_LABELS = {
  female: 'Female',
  male: 'Male',
  'prefer-not-to-say': 'Prefer not to say',
};

function ReviewStep({ formData, onBack, onSubmit }) {
  const isComplete = onboardingSchema.safeParse(formData).success;

  return (
    <div className="step-form">
      <div className="step-heading">
        <h2>Review &amp; submit</h2>
        <p>Make sure everything looks right before you continue.</p>
      </div>

      <div className="review-section">
        <h3>
          <UserRound size={14} />
          Personal information
        </h3>
        <dl className="review-grid">
          <div className="review-item">
            <dt>Full name</dt>
            <dd>{formData.fullName}</dd>
          </div>
          <div className="review-item">
            <dt>Age</dt>
            <dd>{formData.age}</dd>
          </div>
          <div className="review-item">
            <dt>Gender</dt>
            <dd>{GENDER_LABELS[formData.gender] ?? formData.gender}</dd>
          </div>
        </dl>
      </div>

      <div className="review-section">
        <h3>
          <ShieldCheck size={14} />
          Account details
        </h3>
        <dl className="review-grid">
          <div className="review-item">
            <dt>Email</dt>
            <dd>{formData.email}</dd>
          </div>
          <div className="review-item">
            <dt>Username</dt>
            <dd>{formData.username}</dd>
          </div>
          <div className="review-item">
            <dt>Password</dt>
            <dd>••••••••</dd>
          </div>
        </dl>
      </div>

      <div className="step-actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} />
          Back
        </button>
        <button type="button" className="btn btn-primary" disabled={!isComplete} onClick={onSubmit}>
          Submit
          <Check size={16} />
        </button>
      </div>
    </div>
  );
}

export default ReviewStep;
