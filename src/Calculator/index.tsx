import { MouseEventHandler, useState } from 'react'
import Display from './Display'
import Heading from './Heading'
import NumberPad from './NumberPad'
import { concatString, detemineType, evaluateString } from './util'
import { ThemeType } from './type'

const Calculator = () => {
    const [evaluateValue, setEvaluateValue] = useState(0)
    const [typeValue, setTypeValue] = useState('')
    const [theme, setTheme] = useState('default')
    const process = (current: ReturnType<typeof detemineType>) => {
        const newStr = concatString(current, typeValue)
        setTypeValue(newStr)
        const value = evaluateString(current, newStr, evaluateValue)
        setEvaluateValue(value)
    }
    const handlePress: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        const value = e.currentTarget.innerText
        const current = detemineType(value.toLowerCase())
        process(current)
    }
    const handleThemChange = (value: ThemeType) => {
        console.log(value)
        setTheme(value)
    }
    return (
        <div
            className="w-screen h-screen bg-[var(--calculator-app-main-bg)] flex flex-col font-['League_Spartan']  text-[32px]"
            data-theme={theme}
        >
            <div className="calculator-app-desktop:w-[500px] calculator-app-mobile:w-max-[500] h-fit flex flex-col mx-auto my-auto">
                {/* heading + theme toggler*/}
                <Heading onThemeChange={handleThemChange} />
                {/* display */}
                <Display value={evaluateValue} />

                {/* number pad */}
                <NumberPad handlePress={handlePress} />
            </div>
        </div>
    )
}
export default Calculator
