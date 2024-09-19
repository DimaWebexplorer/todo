import scss from './Button.module.scss';

interface ButtonProps {
    content: string;
    grow?: boolean;
    disabled?: boolean;
}

export default function Button({ content, grow, disabled }: ButtonProps): JSX.Element {
    return (
        <button {...grow ? { style: { width: '100%' } } : null} {...disabled ? {style: {backgroundColor: '#F4F6F8', color: '#9C9C9C'}} : null} className={scss.btn}>{content}</button>
    )
}