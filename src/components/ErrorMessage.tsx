interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
  open: boolean;
}

export default function ErrorMessage({
  message,
  onDismiss,
  open,
}: ErrorMessageProps) {
  return (
    <div
      className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
        <h1 className="text-2xl text-center font-bold">Error</h1>
        <p className="text-center text-gray-500">{message}</p>
        <button
          onClick={onDismiss}
          className="bg-fuchsia-700 text-white px-4 py-2 rounded-lg mt-4 w-full"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
