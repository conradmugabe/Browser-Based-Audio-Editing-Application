import { IconType } from "react-icons";

interface Props {
  provider: string;
  name: string;
  Icon: IconType;
}

export function LoginProviderButton({ Icon, provider, name }: Props) {
  return (
    <button
      key={provider}
      className="text-left px-6 border py-2 hover:bg-slate-100 transition flex items-center gap-3 rounded-md w-full"
    >
      <Icon />
      <span>Continue with {name}</span>
    </button>
  );
}
