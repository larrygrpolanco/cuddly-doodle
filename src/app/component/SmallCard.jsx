export default function SmallCard({ direction, week, vocab }) {
  return (
    <div className='fixed bottom-0 right-0 m-4 p-4 bg-primary shadow-lg rounded'>
      <p>Direction: {direction}</p>
      <p>Week: {week}</p>
      <p>Vocabulary: {vocab}</p>
    </div>
  );
}
