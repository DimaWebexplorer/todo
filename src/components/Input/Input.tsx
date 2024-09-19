import scss from './Input.module.scss';

interface InputProps {
    content: string;
    grow?: boolean;
}

export default function Input({ content, grow }: InputProps): JSX.Element {
    return (
        <input {...grow ? { style: { width: '100%' } } : null} className={scss.input} type="text" placeholder={content} />
    )
}