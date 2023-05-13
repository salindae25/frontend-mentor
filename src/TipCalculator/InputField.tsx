type PropsType = {
    label: string
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    isError: boolean
    errorMessage: string
    name: string
    className: string
}
const InputField = ({
    label,
    handleChange,
    isError,
    errorMessage,
    name,
    className,
}: PropsType) => {
    return (
        <div className={`flex w-full flex-col gap-1 ${className}`}>
            <span className="flex justify-between text-sm ">
                <label
                    htmlFor={name}
                    className="text-[var(--tca-very-dark-cyan)]"
                >
                    {label}
                </label>{' '}
                <span className={`text-red-500 ${isError ? 'flex' : 'hidden'}`}>
                    {errorMessage}
                </span>
            </span>
            <input
                type="number"
                id={name}
                name={name}
                onChange={handleChange}
                className={`rounded-md border-2  border-[var(--tca-primary)] px-2 py-2 text-right text-lg outline-[var(--tca-primary)]  ${
                    isError ? 'error' : ''
                } w-full `}
            />
        </div>
    )
}
export default InputField
