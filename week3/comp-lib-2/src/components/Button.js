import cx from 'classnames';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Button = (props) => {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    pill,
    outline,
    ...otherProps
  } = props;

  const baseClass = 'w-max px-6 py-3 border rounded';
  const classes = twMerge(
    cx(otherProps.className, baseClass, {
      // color variants (pick one)
      'bg-teal-500  border-teal-500 text-white': primary,
      'bg-slate-500 border-slate-500 text-white': secondary,
      'bg-green-500 border-green-500 text-white': success,
      'bg-rose-700 border-rose-700 text-white ': danger,
      'bg-amber-600 border-amber-600 text-white ': warning,
      // outline and rounded additional style props
      'rounded-full': pill,
      'bg-white': outline,
      'text-teal-500': outline && primary,
      'text-slate-500': outline && secondary,
      'text-green-500': outline && success,
      'text-rose-700': outline && danger,
      'text-amber-600': outline && warning,
    })
  );
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!warning) +
    Number(!!danger);

  if (count > 1) {
    console.warn(
      'You silly goose! Only one of primary, secondary, success, warning, danger can be TRUE!'
    );
    // if we throw a return in, we will exit this component function before we render anything, essentially skipping the invalid instance of Button used in another file (App)
  }

  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
};

export default Button;
