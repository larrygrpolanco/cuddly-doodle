// Positioned clearly for easy access, possibly beside the selectors to encourage use after selection.
// Smaller and perhaps styled differently to distinguish it from more frequently used controls.

export default function Buttons() {
  return (
    <div className='join join-vertical lg:join-horizontal flex justify-center my-10'>
      <button className='btn join-item btn-accent '>Restart</button>
      <button className='btn join-item btn-accent btn-outline'> Review</button>
    </div>
  );
}
