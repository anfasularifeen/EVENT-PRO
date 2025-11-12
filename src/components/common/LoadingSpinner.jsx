import { Loader2 } from 'lucide-react';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-10">
      <Loader2 className="h-10 w-10 text-emerald-500 animate-spin" />
    </div>
  );
}

export default LoadingSpinner;  