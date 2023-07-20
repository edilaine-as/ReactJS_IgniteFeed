import styles from './Avatar.module.css'

//usando a desestruturação das minha props
export function Avatar({ hasBorder = true, src} ){
    
    return(
        <img 
            className={hasBorder? styles.avatarWithBorder : styles.avatar} 
            src={src} 
        />
    )
}