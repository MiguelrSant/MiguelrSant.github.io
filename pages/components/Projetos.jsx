import Image from 'next/image'

export default function Projetos(){
    return(
        <div className='project'>
            <div className="text">
                <h1>Project</h1>
                <p className="btn"><a href="https://wa.me/16993423284" target={'_blank'} style={{textDecoration: 'none', color: 'rgb(161, 159, 159)'}}>CONTACT ME</a></p>
            </div>
            <ul className="projects">
                <li id="project1">
                    <div>
                        <a href="https://next-app-theta-lyart.vercel.app"  target={'_blank'}>
                            <Image className='image-project' src={'/netflix.png'} width={600} height={400} />
                        </a>
                        <h2 className='name=project'>Netfilx</h2>
                        <p className="tec">HTML CSS JAVASCRIPT REACT NEXT.JS</p>
                    </div>
                </li>
                <li id="project2">
                    <div>
                        <a href="https://miguelrsant.github.io/Projetos/LandingPage/"  target={'_blank'}>
                            <Image className='image-project' src={'/LandingPage.png'} width={600} height={400} style={{
                                backgroundSize: 'cover'
                            }}/>
                        </a>
                        <h2 className='name=project'>LandingPage</h2>
                        <p className="tec">HTML CSS  </p>
                    </div>
                </li>
                <li id="project3">
                    <div>
                        <a href="https://miguelrsant.github.io/Projetos/Hotellivior/"  target={'_blank'}>
                            <Image className='image-project' src={'/Hotellivior.png'} width={600} height={400} style={{
                                backgroundSize: 'cover'
                            }}/>
                        </a>
                        <h2 className='name=project'>Hotellivior</h2>
                        <p className="tec">HTML CSS JAVASCRIPT</p>
                    </div>
                </li>
                <li id="project4">
                    <div>
                        <a href="https://miguelrsant.github.io/Projetos/Android/"  target={'_blank'}>
                            <Image className='image-project' src={'/Android.png'} width={600} height={400} style={{
                                backgroundSize: 'cover'
                            }}/>
                        </a>
                        <h2 className='name=project'>Android</h2>
                        <p className="tec">HTML CSS </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}