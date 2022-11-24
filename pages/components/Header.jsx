import Image from 'next/image'

export default function Header(){
    return(
        <header className="header">
            <div className="logo">
                <h2>Miguel Angelo</h2>
            </div>
            <ul>
                <li className="link">
                    <a href="https://github.com/MiguelrSant" target={'_blank'}>
                        <Image 
                            src={"/github-white.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
                <li className="link">
                    <a href="https://www.instagram.com/miguel_angelo1311/" target={'_blank'}>
                        <Image 
                            src={"/instagram-white.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
                <li className="link">
                    <a href="https://twitter.com/miguelrsant01" target={'_blank'}>
                        <Image 
                            src={"/twitter-white.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
                <li className="link">
                    <a href="https://wa.me/5516993423284" target={'_blank'}>
                        <Image 
                            src={"/whatsapp-white.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
            </ul>
        </header>
    )
}