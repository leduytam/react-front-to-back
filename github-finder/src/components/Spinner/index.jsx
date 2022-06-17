import spinnerGif from '../../assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        width={120}
        className='text-center mx-auto'
        src={spinnerGif}
        alt='Loading...'
      />
    </div>
  );
}

export default Spinner;
