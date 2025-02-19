interface InputsBoxProps {
    placeholder: string;
    onChange: (value: string) => void;
    type: string;
    onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function InputBox({
    placeholder,
    onChange,
    type,
    onInput,
}: InputsBoxProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} // Pass the event directly
            onInput={onInput}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400  focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
        />
    )
}