import '../common/common.css';
const Loading = () => {
  return (
    <div className='absolute inset-y-1/3 z-10 bg-base-200 h-60 w-80 flex justify-center rounded loading-position'>
        <span className="loading loading-spinner text-primary w-32"></span>
    </div>
  )
}

export default Loading