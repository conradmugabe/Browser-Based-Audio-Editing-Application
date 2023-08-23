import { BsFacebook, BsGoogle, BsMicrosoft } from "react-icons/bs";

import { LoginProviderButton } from "@auth/ui/common/LoginProviderButton";

const providers = [
  { provider: "google", name: "Google", icon: BsGoogle },
  { provider: "apple", name: "Apple", icon: BsMicrosoft },
  { provider: "facebook", name: "Facebook", icon: BsFacebook },
];

export function LoginProviders() {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="border-[0.5px] w-full h-0" />
        <h2 className="uppercase font-light text-sm">or</h2>
        <div className="border-[0.5px] w-full h-0" />
      </div>
      <div className="grid gap-3 min-w-[20rem]">
        {providers.map(({ icon, provider, name }) => (
          <LoginProviderButton
            key={provider}
            provider={provider}
            name={name}
            Icon={icon}
          />
        ))}
      </div>
    </>
  );
}
