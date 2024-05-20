import { Checkbox } from "../ui/checkbox";

function MyCheckbox({
  id,
  label,
  onValueChange,
  defaultValue,
}: {
  id: string;
  label: string;
  onValueChange: (id: string) => void;
  defaultValue?: boolean;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        onCheckedChange={() => onValueChange(id)}
        checked={defaultValue}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}

export default MyCheckbox;
