interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    provider: string;
    icon: React.ReactNode;
}
  
export function SocialButton({ provider, icon, ...props }: SocialButtonProps) {
  return (
    <button
      {...props}
      className="
        w-full flex items-center justify-center gap-2 px-4 py-2 
        border border-gray-300 rounded-md text-sm font-medium text-gray-700
        hover:bg-gray-50 transition duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
      "
    >
      {icon}
      <span>Continuar con {provider}</span>
    </button>
  )
}