import InputField from './InputField'
type PropsType = {
    setValues: (value: { name: string; value: number }) => void
    errorObj: Record<string, { isError: boolean }>
    calculateBill: (tip: number) => void
}
const LeftSection = ({ setValues, errorObj, calculateBill }: PropsType) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault()
        const value = parseFloat(e.target.value)
        const name = e.target.name
        setValues({
            name,
            value: value == Number.NaN ? 0 : value,
        })
    }
    const onTipClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        const tipAmount = e.currentTarget.attributes.getNamedItem('data-tip')
        if (tipAmount?.value) {
            calculateBill(parseInt(tipAmount.value))
        }
    }
    const onCustomTipChanged: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        e.preventDefault()
        const value = parseFloat(e.target.value)
        calculateBill(value)
    }
    return (
        <div className="flex w-full flex-col justify-between gap-4 p-2">
            {/*input field Bill*/}
            <InputField
                label="Bill"
                isError={errorObj['bill'].isError}
                className=""
                errorMessage="Can't be Zero"
                handleChange={handleChange}
                name="bill"
            />
            {/*Select tips*/}
            <div className="my-auto flex flex-col gap-4">
                <label className=" text-sm text-[var(--tca-very-dark-cyan)]">
                    Tip percentage %
                </label>
                <div className="grid gap-8 calculator-app-mobile:grid-cols-2 calculator-app-desktop:grid-cols-3">
                    {[5, 10, 15, 25, 50].map((x) => (
                        <button
                            key={x}
                            data-tip={x}
                            onClick={onTipClick}
                            className={`
                            rounded-md bg-[var(--tca-dark-grayish-cyan)] 
                            py-1 text-center
                            text-white
                            hover:bg-[var(--tca-primary)]
                            hover:text-[var(--tca-very-dark-cyan)] 
                            focus:bg-[var(--tca-primary)] 
                            focus:text-[var(--tca-very-dark-cyan)] 
                            focus:outline-[var(--tca-primary)]`}
                        >
                            {x}%
                        </button>
                    ))}

                    <input
                        type="number"
                        className="traking-smallest rounded-md bg-[var(--tca-light-grayish-cyan)] px-4 py-1 text-right text-[var(--tca-grayish-cyan)]  placeholder:text-[20px] hover:bg-[var(--tca-primary)] hover:text-[var(--tca-very-dark-cyan)] focus:bg-white focus:text-[var(--tca-very-dark-cyan)] focus:outline-[var(--tca-primary)]"
                        onChange={onCustomTipChanged}
                        placeholder="Custom"
                    />
                </div>
            </div>
            {/*input fiel no.of peopel*/}

            <InputField
                label="Number of Peopele"
                isError={errorObj['people'].isError}
                className="mt-auto"
                errorMessage="Can't be Zero"
                handleChange={handleChange}
                name="people"
            />
        </div>
    )
}

export default LeftSection
