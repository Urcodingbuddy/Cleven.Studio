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
            className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-transparent transition-all"
        />
    )
}