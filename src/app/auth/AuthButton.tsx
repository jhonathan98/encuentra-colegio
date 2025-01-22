interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}
  
export function AuthButton({ children, isLoading, ...props }: AuthButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`
        w-full py-2 px-4 rounded-md text-sm font-medium text-white
        transition duration-200 ease-in-out
        ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span className="ml-2">Cargando...</span>
        </div>
      ) : children}
    </button>
  )
}