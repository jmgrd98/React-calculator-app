interface IButton{
    onClick: (buttonDigit: any) => void
    buttonDigit: string
    className?: string
}

const Button = ({onClick, buttonDigit}:IButton) => {
    let doubleSpace = ''
    if(buttonDigit === '='){
        doubleSpace = 'equals'
    }
    if(buttonDigit === 'C'){
        return(
            <button onClick={() => onClick('')} className="calc-button">
                {buttonDigit}
            </button>
        )
    }
    return(
        <button onClick={() => onClick(buttonDigit)} className={`calc-button ${doubleSpace}`}>
            {buttonDigit}
        </button>
    )
}

export default Button