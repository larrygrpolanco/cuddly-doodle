export default function GenericSelector({
  title,
  options,
  selected,
  setSelected,
  isOpen,
  setIsOpen,
  closeAll,
}) {
  const summaryClass =
    'mb-1 btn btn-primary text-primary-content rounded-lg w-52';
  const listClass =
    'p-2 ml-2 shadow menu dropdown-content bg-base-100/90 text-base-content z-[1] rounded-box w-52';
  const boxClass =
    'flex flex-col items-center mb-5 bg-secondary rounded-lg shadow-md';
  const choiceClass = 'font-bold text-sm p-1 text-secondary-content';

  const handleToggle = (event) => {
    if (event.target.open) {
      closeAll();
    }
    setIsOpen(event.target.open);
  };

  const handleClick = (value) => (event) => {
    event.stopPropagation();
    setSelected(value);
    setTimeout(() => {
      setIsOpen(false);
    }, 160);
  };

  return (
    <div className={boxClass}>
      <details
        className='dropdown dropdown-right'
        open={isOpen}
        onToggle={handleToggle}
      >
        <summary className={summaryClass}>{title}</summary>
        <ul className={listClass}>
          {options.map((option) => (
            <li key={option} onClick={handleClick(option)}>
              <a>{option}</a>
            </li>
          ))}
        </ul>
      </details>
      <p className={choiceClass}>{selected}</p>
    </div>
  );
}
