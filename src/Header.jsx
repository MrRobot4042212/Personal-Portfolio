import { MediaIcon } from './components/MediaIcon.jsx'
const icons = [
    { url: 'https://github.com/MrRobot4042212', socialName: 'GitHub', iconSrc: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-GithubFill"><g clip-path="url(#clip0_100_4)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></g><defs><clipPath id="clip0_100_4"><rect width="24" height="24"/></clipPath></defs></svg>, 
    Download: false 

    },
    { url: 'https://www.linkedin.com/in/diego-alfonso-chicoma-ibañez-5721ba228/', socialName: 'Linkedin', iconSrc: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" class="ai ai-LinkedinBoxFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0z"/></svg>,
     Download: false },
    { url: '../data/utils/CV_ES.pdf', socialName: 'CV', iconSrc: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai ai-Download"><path d="M12 15V3m0 12l-4-4m4 4l4-4"/><path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17"/></svg>, 
    Download: 'DiegoAlfonso-ChicomaIbañez-CV' },
]

export function Header() {

    return(
        <header>            
            <section>
                <img className="hd-avatar" src="../data/img/avatar-bio-2.jpg" alt="" />
            </section>
            <aside>
                <h1 className="hd-name"> 
                    <span className="first-name">Diego Alfonso </span>
                    <span className="last-name">Chicoma Ibañez</span>
                </h1>
                <h2 className="hd-tittle">Amateur Full-stack developer - Técnico en administración de sistemas informaticos en red</h2>

                <nav className="hd-media-icons">
                    {
                        icons.map(icons =>{
                            const { url, socialName , iconSrc , Download } = icons
                            return(
                                <MediaIcon
                                    key={socialName}
                                    url={url}
                                    socialName={socialName}
                                    iconSrc={iconSrc}
                                    Download={Download}
                                    >
                                </MediaIcon>
                            )
                        })
                    }
                </nav>
            </aside>
        </header>
     )
}
