import { twMerge } from 'tailwind-merge';
import cx from 'classnames';

export default function EventTag(props) {
  const { onClick, tag, inactive, active, ...otherProps } = props;
  const baseClass =
    'rounded-2xl text-white py-1 px-2 text-nowrap drop-shadow-xl';
  const classes = twMerge(
    cx(otherProps.className, baseClass, {
      // color of the tag based on the content of the tag
      'bg-red-500': tag.value === 'Arts',
      'bg-green-500': tag.value === 'Community',
      'bg-blue-500': tag.value === 'Concerts' || tag.value === 'New Music',
      'bg-purple-500': tag.value === 'Film' || tag.value === 'Pre-Release',
      'bg-gray-500': tag.value === 'Marketing' || tag.value === 'Media',
      'bg-orange-500': tag.value === 'Lectures',
      'bg-pink-500': tag.value === 'Strawberry Festival',
      'border-2 border-white': active,
      'border-2 border-gray-700 text-gray-700': inactive,
    })
  );
  return (
    <div onClick={() => onClick()} className={classes}>
      {tag.value}
    </div>
  );
}
