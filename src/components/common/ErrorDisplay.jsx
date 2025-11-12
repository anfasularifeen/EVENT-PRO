import { AlertTriangle } from 'lucide-react';

function ErrorDisplay({ message }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-red-50 text-red-700 rounded-lg">
      <AlertTriangle className="h-12 w-12 mb-4" />
      <h3 className="text-xl font-bold mb-2">An Error Occurred</h3>
      <p>{message || 'Something went wrong. Please try again.'}</p>
    </div>
  );
}

export default ErrorDisplay;