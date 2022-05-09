export default function Top () {
    return(
        <div class="elementos-topo">
            <div class="elementos-topo-esquerda">
                <div class="logo-instagram">
                <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class="minibarra-vertical-logo"></div>
                <div class="nome-instagram">
                    <img src="images/logo1.png" />   
                </div>
            </div>
            <input placeholder="Pesquisar" class="elementos-topo-meio"/>
            <div class="elementos-topo-direita">
                <div class="paper-plan">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class="compass-outline">
                    <ion-icon name="compass-outline"></ion-icon>
                </div>
                <div class="heart-outline">
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div class="person-outline">
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>

    )
}