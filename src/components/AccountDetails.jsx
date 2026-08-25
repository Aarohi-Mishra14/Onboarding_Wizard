import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react';
import { accountDetailsSchema } from '../schemas/onboardingSchema';

function AccountDetails({ defaultValues, onNext, onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(accountDetailsSchema),
    mode: 'onChange',
    defaultValues: {
      email: defaultValues.email,
      username: defaultValues.username,
      password: defaultValues.password,
      confirmPassword: defaultValues.confirmPassword,
    },
  });

  return (
    <form className="step-form" onSubmit={handleSubmit(onNext)} noValidate>
      <div className="step-heading">
        <h2>Account details</h2>
        <p>Set up how you'll sign in.</p>
      </div>

      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={errors.email ? 'input-error' : ''}
          {...register('email')}
        />
        {errors.email && <p className="field-error">{errors.email.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="e.g. aarohi20"
          className={errors.username ? 'input-error' : ''}
          {...register('username')}
        />
        {errors.username && <p className="field-error">{errors.username.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="At least 8 characters"
            className={errors.password ? 'input-error' : ''}
            {...register('password')}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="field-error">{errors.password.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="confirmPassword">Confirm password</label>
        <div className="password-input">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Re-enter your password"
            className={errors.confirmPassword ? 'input-error' : ''}
            {...register('confirmPassword')}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.confirmPassword && <p className="field-error">{errors.confirmPassword.message}</p>}
      </div>

      <div className="step-actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} />
          Back
        </button>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Next
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}

export default AccountDetails;
