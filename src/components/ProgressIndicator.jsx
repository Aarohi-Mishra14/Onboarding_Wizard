import { Fragment } from 'react';
import { Check } from 'lucide-react';

function ProgressIndicator({ currentStep, labels }) {
  return (
    <div className="progress">
      <div className="progress-meta">
        <span className="progress-count">
          Step {currentStep} of {labels.length}
        </span>
        <span className="progress-label">{labels[currentStep - 1]}</span>
      </div>

      <div className="progress-track">
        {labels.map((label, index) => {
          const stepNumber = index + 1;
          const status =
            stepNumber < currentStep ? 'complete' : stepNumber === currentStep ? 'current' : 'upcoming';
          const edgeClass =
            index === 0 ? 'progress-node--start' : index === labels.length - 1 ? 'progress-node--end' : '';

          return (
            <Fragment key={label}>
              {index !== 0 && (
                <div className={`progress-connector ${stepNumber <= currentStep ? 'progress-connector--filled' : ''}`} />
              )}
              <div className={`progress-node progress-node--${status} ${edgeClass}`}>
                <span className="progress-node-dot">
                  {status === 'complete' ? <Check size={13} strokeWidth={3} /> : stepNumber}
                </span>
                <span className="progress-node-label">{label}</span>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressIndicator;
