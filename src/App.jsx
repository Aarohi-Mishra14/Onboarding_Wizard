import { Check } from 'lucide-react';
import OnboardingWizard from './components/OnboardingWizard';

function App() {
  return (
    <div className="page">
      <div className="page-inner">
        <div className="brand">
          <span className="brand-mark">
            <Check size={16} strokeWidth={3} />
          </span>
          <span className="brand-name">Onboard</span>
        </div>

        <div className="page-heading">
          <h1>Complete your profile</h1>
          <p>Just a few quick details to get your account ready.</p>
        </div>

        <OnboardingWizard />

        <p className="page-footnote">Secure &amp; private — your information is never shared.</p>
      </div>
    </div>
  );
}

export default App;
