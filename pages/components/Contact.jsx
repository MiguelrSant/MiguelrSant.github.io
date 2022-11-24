import Image from "next/image"

export default function Contact(){

    function Submit(){
        
    }
    return(
        
        <div style={{
            backgroundColor: 'rgb(30, 30, 30)'
        }}>
            <div className="contact-global" id="Contact">
                <div className="contact">
                    <h1>Contact</h1>
                    <p>If you like my work and you have a project in mind, and you need a programmer to finish it, why not work together? With my knowledge we can make the best website, with the most modern technologies on the market, let's bring your project to life!</p>
                </div>
                <form className="sendmail" action="https://api.staticforms.xyz/submit" method="post" onSubmit={Submit} autoComplete={'off'}>
                    <input type="hidden" name="accessKey" value="792ea93c-9fea-4d3e-8147-fb95603c8c6d" />
                    <input type="text" name="name" id="Name"  placeholder="NAME" autoComplete="off" required/>
                    <input type="email" name="email" id="Email"  placeholder="EMAIL" required/>
                    <input type="text" className="mensage" name="message" id="Message" placeholder="MESSAGE" required/>
                    <input type="hidden" name="redirectTo" value="https://miguelrsant.github.io" />
                    <input type="submit" value="SEND MESSAGE" />
                </form>
            </div>
            
            <header className="header">
            <div className="logo">
                <h2>Miguel Angelo</h2>
            </div>
            <ul>
                <li className="link">
                    <a href="https://github.com/MiguelrSant" target={'_blank'}>
                        <Image 
                            src={"/github.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
                <li className="link">
                    <a href="https://www.instagram.com/miguel_angelo1311/" target={'_blank'}>
                        <Image 
                            src={"/instagram.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
                <li className="link">
                    <a href="https://twitter.com/miguelrsant01" target={'_blank'}>
                        <Image 
                            src={"/twitter.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
                <li className="link">
                    <a href="https://wa.me/16993423284" target={'_blank'}>
                        <Image 
                            src={"/whatsapp.png"}
                            width={25}
                            height={25}
                        />
                    </a>
                </li>
            </ul>
        </header>
            
        </div>

    )
}