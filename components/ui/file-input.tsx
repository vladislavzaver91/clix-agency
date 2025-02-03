import { ChangeEvent, forwardRef } from "react";

type FileInputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  multiple?: boolean;
};

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({ onChange, onBlur, name, multiple = false }, ref) => {
    return (
      <input
        type="file"
        multiple={multiple}
        name={name}
        ref={ref}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
        onChange={onChange}
        onBlur={onBlur} // Теперь принимает event
      />
    );
  }
);

FileInput.displayName = "FileInput";

export default FileInput;
