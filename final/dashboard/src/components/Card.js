import cx from 'classnames';
const Card = (props) => {
  const { height, width, children } = props;
  const widthClass = 'col-span-' + width;
  const heightClass = 'row-span-' + height;
  const baseClass = 'rounded-lg col-span-3 row-span-2 flex bg-blue-200';
  const classes = cx(baseClass, heightClass, widthClass);

  return <div className={classes}>{children}</div>;
};

export default Card;
