import style from './Button.module.css'

const Button = (props: any) => {
    const {
        disabled = false,
        onClick,
        className = style.reuseButton,
        value = ''
    } = props

    return (
        <button onClick={onClick} className={className} disabled={disabled}>{value}</button>
    )
}

export default Button