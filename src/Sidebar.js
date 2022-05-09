function Pages(props){
    return(
        <div class="sidebar">
            <div class="bad-vibe-memes">
                <div class="imagem">
                    <img src={props.image} />
                </div>
                <div class="texto">
                    <div class="pagina">
                        <p>{props.title}</p>
                        <h6>Segue você</h6>
                    </div>
                    <div class="seguir">
                        <p>Seguir</p>
                    </div>
                </div>                                  
            </div>
        </div>
    )
}

export default function Sidebar(){
    const pages = [
        {image:"/images/badvibesmemes.png", title:"bad.vibes.memes"},
        {image:"/images/chibirdart.png", title:"chibirdart"},
        {image:"/images/razoesparaacreditar.png", title:"razoesparaacreditar"},
        {image:"/images/adorableanimals.png", title:"adorable_animals"},
        {image:"/images/smallcutecats.png", title:"smallcutecats"}
    ]

    return(
        <div class="sidebar">            
            <div class="topo-sidebar">
                <img src="/images/catanacomics.png" />
                <div class="catanacomics">
                    <h5>catanacomics</h5>
                    <h6>Catana</h6>
                </div>            
            </div>
            <div class="sugestoes">
                <p>Sugestões pra você</p>
                <h6>Ver Tudo</h6>
            </div>

            {pages.map(item=> <Pages image={item.image} title={item.title} />)}

            <div class="rodape-sidebar">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                <p class="instagramdofacebook">© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>           
        </div>
    )
}