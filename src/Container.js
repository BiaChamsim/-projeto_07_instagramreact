import Story from "./Story"
import Feed from "./Feed"
import Sidebar from './Sidebar';

export default function Container (){
    return(
        <div class="container">
            <div class="story-e-feed">
                <Story />
                <Feed /> 
            </div>
            <Sidebar />             
        </div>
    )
}