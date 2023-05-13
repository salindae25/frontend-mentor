import { useRef, useState } from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import './style.css'
const initialErrorState = {
    bill: { isError: false },
    people: { isError: false },
}
const TipCalculator = () => {
    const [errors, setErrors] = useState(initialErrorState)
    const [people, setPeople] = useState(0)
    const [tipAmount, setTipAmount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [bill, setBill] = useState(0)
    const ref = useRef(null)
    const calculateBill = (tip: number) => {
        if (people == 0 || bill == 0) {
            setErrors({
                bill: { isError: bill == 0 },
                people: { isError: people == 0 },
            })
            return
        }
        const totalTip = (bill * tip) / 100

        setTipAmount(totalTip)
        setTotalAmount(bill + totalTip)
    }

    const handleReset = () => {
        if (ref.current) {
            const inputs = (ref.current as HTMLDivElement).querySelectorAll(
                'input'
            )
            inputs.forEach((element) => {
                element.value = ''
            })
        }
        setPeople(0)
        setTotalAmount(0)
        setTipAmount(0)
        setBill(0)
        setErrors(initialErrorState)
    }
    const handleValueChange = (inputObj: { value: number; name: string }) => {
        switch (inputObj.name) {
            case 'bill':
                setBill(inputObj.value)
                if (errors.bill.isError)
                    setErrors({ ...errors, bill: { isError: false } })
                break
            case 'people':
                setPeople(inputObj.value)

                if (errors.people.isError)
                    setErrors({ ...errors, people: { isError: false } })
                break
            default:
        }
    }
    return (
        <div
            ref={ref}
            className="flex min-h-screen w-screen flex-col items-center gap-6  bg-[var(--tca-light-grayish-cyan)] font-['Space_Mono'] text-[24px]"
        >
            <div className="mt-[120px] text-lg font-extrabold uppercase tracking-tca-widest text-[var(--tca-dark-grayish-cyan)] calculator-app-mobile:mt-[50px]">
                Spli
                <br />
                tter
            </div>
            <div className="mb-10 flex max-w-[900px] items-stretch gap-6 rounded-xl bg-white p-6 shadow-2xl shadow-[var(--tca-light-grayish-cyan)] calculator-app-mobile:flex-col calculator-app-desktop:flex-row">
                <LeftSection
                    setValues={handleValueChange}
                    calculateBill={calculateBill}
                    errorObj={errors}
                />
                <RightSection
                    tipAmount={tipAmount}
                    people={people}
                    totalAmount={totalAmount}
                    onReset={handleReset}
                />
            </div>
        </div>
    )
}

export default TipCalculator
