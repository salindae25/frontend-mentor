const ThemeSelector = ({ onThemeChange }: { onThemeChange: any }) => {
    const handleThemChange = (e: any) => {
        const value = parseInt(e.target.value)
        let theme = 'default'
        switch (value) {
            case 0:
                theme = 'default'
                break
            case 5:
                theme = 'classic'
                break
            case 10:
                theme = 'neon'
                break
            default:
                break
        }
        onThemeChange(theme)
    }
    return (
        <div className="flex flex-col ">
            <div className="grid grid-cols-3 text-[12px] text-[var(--calculator-app-keypad-key)] pl-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <input
                type="range"
                min="0"
                className="slider"
                max="10"
                step="5"
                defaultValue={0}
                onInput={handleThemChange}
            />
        </div>
    )
}
export default ThemeSelector
