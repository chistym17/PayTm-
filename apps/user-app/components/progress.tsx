import CircularProgress from '@mui/material/CircularProgress';

export default function Progress() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-20 h-60 mt-48">
        <CircularProgress />
      </div>
    </div>
  );
}
