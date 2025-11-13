import Link from './Link';

const LINKS = [
  { label: 'home', path: '/cats' },
  { label: 'chickens', path: '/chickens' },
  { label: 'cage', path: '/cage' },
  { label: 'wu tang', path: '/wu' },
];

const Menu = () => {
  const renderedLinks = LINKS.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className='mb-3'
        activeClassName='font-bold border-l-[4px] border-blue-500 pl-2'
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
      {renderedLinks}
    </div>
  );
};

export default Menu;
