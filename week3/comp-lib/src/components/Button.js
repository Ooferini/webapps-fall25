import cx from 'classnames';
import PropTypes from 'prop-types';

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
  } = props;
  const baseClass = 'w-max px-6 py-3 border rounded';
  return (
    <button
      className={cx(baseClass, {
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
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  // validating props by type, this is the most common reason for using this library
  // people are using typeScript instead more recently tho
  // primary: PropTypes.bool,
  customPropValidation: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'You silly goose! Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
