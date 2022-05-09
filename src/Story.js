function CaixaDeStory (props){
    return (
            <div class="caixa-de-story">
                <div class="imagem-story">
                    <img src={props.image} />
                </div>  
                 <p>{props.title}</p>                                  
            </div>
    )
}

export default function Story () { 
    const stories = [
        {image:"/images/9gag.png", title:"9gag"},
        {image:"/images/meowed.png", title:"meowed"},
        {image:"/images/barked.png", title:"barked"},
        {image:"/images/nathanwpylestrangeplanet.png", title:"nathanwpylestrangeplanet"},
        {image:"/images/wawawiwacomicsa.png", title:"wawawiwacomicsa"},
        {image:"/images/respondeai.png", title:"respondeai"},
        {image:"/images/filomoderna.png", title:"filomoderna"},
        {image:"/images/memeriagourmet.png", title:"memeriagourmet"},
        {image:"/images/9gag.png", title:"9gag"}
    ]
    
    return(
        <div class="barra-de-story">
            <div class="setinha-story">
                <img src="/images/Vector.png" />
            </div>    
               { stories.map( item => <CaixaDeStory image={item.image} title={item.title} />)}
            </div>

    )
}