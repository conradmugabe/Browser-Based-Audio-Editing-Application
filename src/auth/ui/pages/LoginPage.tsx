import { LoginProviders } from "@auth/ui/compound/LoginProviders";
import { EmailPasswordForm } from "@auth/ui/forms/EmailPasswordForm";

export function LoginPage() {
  return (
    <main className="container mx-auto">
      <section className="flex items-center justify-center min-h-screen mx-4">
        <div className="grid gap-6">
          <h1 className="text-4xl font-semibold text-center">Welcome back</h1>
          <EmailPasswordForm />
          <LoginProviders />
        </div>
      </section>
    </main>
  );
}
