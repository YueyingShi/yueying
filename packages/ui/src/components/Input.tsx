
type InputProps = {
  label?: string;
  placeholder?: string;
};

export function Input({ label, placeholder }: InputProps) {
  return (
    <>
      {label && <p>{label}</p>}
      <input
        type="text"
        placeholder={placeholder}
        className="w-64 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
      />
    </>

  );
}
