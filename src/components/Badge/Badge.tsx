import scss from './Badge.module.scss';


interface BadgeProps {
    size: string;
    color: {id: number, hex: string, name: string,};
    margin?: string;
    active?: boolean;
    click?: () => void;
}

export default function Badge({ size, color, margin, active, click }: BadgeProps): JSX.Element {
    return (
        <i onClick={click} className={active ? `${scss.badge} ${scss['badge_active']}` : scss.badge } style={{ width: size, height: size, backgroundColor: color.hex, margin: margin}} ></i>
    )
}