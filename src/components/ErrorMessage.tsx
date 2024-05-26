export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg sm:max-w-sm">
        <h1 className="text-2xl text-center font-bold">Error</h1>
        <p className="text-center text-gray-500">{message}</p>
      </div>
    </div>
  );
}
