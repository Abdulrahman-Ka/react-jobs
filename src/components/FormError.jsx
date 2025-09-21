const FormError = ({ errorMessage }) => {
  return (
    <p className="mt-1 flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-300 rounded p-2 my-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {errorMessage}
    </p>
  );
};
export default FormError;
