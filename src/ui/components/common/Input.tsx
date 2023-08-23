import { Control, FieldValues, Path } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@ui/components/ui/form";
import { Input as UiInput } from "@ui/components/ui/input";

interface Props {
  className?: string;
  label?: string;
  description?: string;
  message?: string;
  placeholder?: string;
}

export function Input<T extends FieldValues>({
  control,
  className,
  description,
  label,
  message,
  name,
  placeholder,
}: Props & { control: Control<T>; name: Path<T> }) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <UiInput placeholder={placeholder} {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {message && <FormMessage>{message}</FormMessage>}
        </FormItem>
      )}
    />
  );
}
