const formatter = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
})
const RightSection = ({
    onReset,
    tipAmount,
    totalAmount = 0,
    people,
}: {
    onReset: () => void
    tipAmount: number
    totalAmount: number
    people: number
}) => {
    return (
        <div className="flex  w-full flex-col justify-between gap-10 rounded-lg bg-[var(--tca-very-dark-cyan)] px-4 py-4">
            <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h4 className="text-sm text-white">Tip Amount</h4>
                        <span className="text-xs text-[var(--tca-light-grayish-cyan)]">
                            / person
                        </span>
                    </div>
                    <h3 className="text-[32px] text-[var(--tca-primary)]">
                        {formatter.format(tipAmount / (people || 1))}
                    </h3>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h4 className="text-sm text-white">Total Amount</h4>
                        <span className="text-xs text-[var(--tca-light-grayish-cyan)]">
                            / person
                        </span>
                    </div>
                    <h3 className="text-[32px] text-[var(--tca-primary)]">
                        {formatter.format(totalAmount / (people || 1))}
                    </h3>
                </div>
            </div>
            <button
                className="rounded-md bg-[var(--tca-primary)] py-2 text-lg uppercase hover:bg-[var(--tca-light-grayish-cyan)]"
                onClick={onReset}
            >
                Reset
            </button>
        </div>
    )
}
export default RightSection
