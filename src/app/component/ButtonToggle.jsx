import Image from 'next/image';

export default function ButtonToggle({ toggleFunction }) {
  return (
    <button
      className='btn btn-secondary mb-5 text-secondary-content lg:hidden flex items-center justify-center'
      onClick={toggleFunction}
    >
      <div className='relative w-6 h-6'>
        {/* Control the size of the image container */}
        <Image src='/menu.png' alt='Menu' width={24} height={24}  objectFit='contain' />
      </div>
    </button>
  );
}
