const Display = ({ value }: { value: number }) => {
    return (
        <div className="w-full calculator-app-desktop:max-w-[500px] calculator-app-mobile:max-w-[338px] h-[100px] bg-[var(--calculator-app-screen-bg)] rounded-md flex items-center justify-end px-6 mt-4">
            <span className="text-[var(--calculator-app-keypad-key)] text-ellipsis  overflow-hidden">
                {new Intl.NumberFormat('en-IN', {
                    maximumSignificantDigits: 3,
                }).format(value)}
            </span>
        </div>
    )
}
export default Display
