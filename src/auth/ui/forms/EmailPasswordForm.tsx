import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form } from "@ui/components/common/form";
import { Input } from "@ui/components/compound/Input";
import { toast } from "@ui/components/common/use-toast";
import { Button } from "@ui/components/common/button";

const FormSchema = z.object({
  email: z.string().email({
    message: "Email must be valid.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function EmailPasswordForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
        <Input placeholder="Email" control={form.control} name="email" />
        <Input placeholder="Password" control={form.control} name="password" />
        <Button className="w-full" type="submit">
          Continue
        </Button>
      </form>
    </Form>
  );
}
