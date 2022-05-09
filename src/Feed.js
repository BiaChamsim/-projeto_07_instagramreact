function CaixaDeFoto(props){
    return(
        <div class="caixa-de-foto">
            <div class="top-foto">
                <div class="top-post-esquerda">
                    <img src={props.srctopo} />     
                    <p class="nome-perfil">{props.title}</p>    
                </div>
                <div class="top-post-direita">
                    <p class="reticencias">...</p>
                </div>
            </div>
            <div class="foto">
                <img src={props.mainimg}/>   
            </div>
            <div class="bottom-foto">
                <div class="bottom-esquerdo">
                    <div class="heart">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="chatbubble">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </div>
                    <div class="paper-plane">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
                <div class="bottom-direita">
                    <div class="bookmark">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="curtidas">
                <div class="icone-respondeai">               
                    <img src={props.srcbottom} />    
                </div>
                <p class="quem-curtiu">{props.like}</p>  
            </div>
        </div>
    )
}


export default function Feed(){
    const posts = [
        {srctopo:"/images/meowed.png", title:"meowed", mainimg:"/images/gato-telefone.png", srcbottom:"/images/respondeai2.png", like:"Curtido por <span>respondeai</span> e <span>outras 101.523 pessoas</span>"},
        {srctopo:"/images/barked.png", title:"barked", mainimg:"/images/dog 1.png", srcbottom:"/images/adorableanimals.png", like:"Curtido por <span>adorable_animals</span> e <span>outras 99.159 pessoas"},
        {srctopo:"/images/meowed.png", title:"meowed", mainimg:"/images/gato-telefone.png", srcbottom:"/images/respondeai2.png", like:"Curtido por <span>respondeai</span> e <span>outras 101.523 pessoas</span>"}
    ]

    return (
        <div class="feed">            
            {posts.map(item => <CaixaDeFoto srctopo={item.srctopo} title={item.title} mainimg={item.mainimg} srcbottom={item.srcbottom} like={item.like} />)}
        </div>
    )
}