import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { personalInfoSchema } from '../schemas/onboardingSchema';

function PersonalInfo({ defaultValues, onNext }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: defaultValues.fullName,
      age: defaultValues.age,
      gender: defaultValues.gender,
    },
  });

  return (
    <form className="step-form" onSubmit={handleSubmit(onNext)} noValidate>
      <div className="step-heading">
        <h2>Personal information</h2>
        <p>Tell us a little about yourself.</p>
      </div>

      <div className="form-field">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          type="text"
          placeholder="e.g. Aarohi Mishra"
          className={errors.fullName ? 'input-error' : ''}
          {...register('fullName')}
        />
        {errors.fullName && <p className="field-error">{errors.fullName.message}</p>}
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="e.g. 21"
            className={errors.age ? 'input-error' : ''}
            {...register('age')}
          />
          {errors.age && <p className="field-error">{errors.age.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="gender">Gender</label>
          <select id="gender" className={errors.gender ? 'input-error' : ''} {...register('gender')}>
            <option value="">Select an option</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {errors.gender && <p className="field-error">{errors.gender.message}</p>}
        </div>
      </div>

      <div className="step-actions step-actions--single">
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Next
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

export default PersonalInfo;
