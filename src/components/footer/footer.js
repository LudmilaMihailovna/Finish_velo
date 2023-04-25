import css from './footer.module.scss'


export const Footer = () => {
    return (
        // <footer>Footer</footer>

        <footer className={css.footer}>
            <span>Find bicycle</span>
            <a href="mailto: find.bike@gmail.com">Написать письмо</a>
            <a href="tel: +79998887654">+7 (999) 888-76-54</a>
        </footer>
    )
}