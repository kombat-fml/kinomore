import {useRouter} from 'next/router'
import {ButtonHTMLAttributes, memo} from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import {ButtonBase} from '../ButtonBase/ButtonBase'
import styles from './BackBtn.module.scss'
import classNames from 'classnames'

interface BackBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    ripple?: boolean;
    variant?: 'icon'
}

export const BackBtn = memo<BackBtnProps>(({className, ripple, variant, ...props}) => {

    const router = useRouter()
    const handleBack = () => router.back()

    return (
        <ButtonBase
            className={classNames(
                styles.back,
                variant === 'icon' && styles.icon,
                className
            )}
            ripple={ripple}
            onClick={handleBack}
            {...props}
        >
            <FiChevronLeft />
            Назад
        </ButtonBase>
    )
})

BackBtn.displayName = 'BackBtn'