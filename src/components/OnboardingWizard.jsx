import { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import ReviewStep from './ReviewStep';
import SuccessState from './SuccessState';

const STEP_LABELS = ['Personal Information', 'Account Details', 'Review & Submit'];

const initialFormData = {
  fullName: '',
  age: '',
  gender: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  // This is the unified payload the internship brief asks for: each step's
  // React Hook Form instance only manages its own fields, but every time a
  // step is completed its data is merged in here — so the parent is always
  // the single source of truth, and nothing is lost when moving back and forth.
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handlePersonalInfoNext(stepData) {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep(2);
  }

  function handleAccountDetailsNext(stepData) {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep(3);
  }

  function handleBack() {
    setCurrentStep((step) => Math.max(1, step - 1));
  }

  function handleSubmit() {
    // formData is already the complete, merged payload at this point.
    console.log('Onboarding submission:', formData);
    setIsSubmitted(true);
  }

  function handleStartOver() {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return <SuccessState onStartOver={handleStartOver} />;
  }

  return (
    <div className="wizard-card">
      <ProgressIndicator currentStep={currentStep} labels={STEP_LABELS} />

      <div className="wizard-body">
        {currentStep === 1 && <PersonalInfo defaultValues={formData} onNext={handlePersonalInfoNext} />}

        {currentStep === 2 && (
          <AccountDetails defaultValues={formData} onNext={handleAccountDetailsNext} onBack={handleBack} />
        )}

        {currentStep === 3 && (
          <ReviewStep formData={formData} onBack={handleBack} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}

export default OnboardingWizard;
