const InstructionsList = (props) => {
  const { data } = props;
  return (
    <div className='instructions-list'>
      <h3 className='list-title'>Instructions</h3>
      <ol>
        {data.map((item, index) => {
          return (
            <li className='list-item' key={index}>
              {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default InstructionsList;
