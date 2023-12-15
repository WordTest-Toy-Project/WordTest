import { PuppleButton } from "./style";

export default function PuppleInputButton({type,title,width,height,fontsize}){
    
    return (
        <PuppleButton type={type}   style={{width:width,height:height, fontSize:fontsize}}>{title}</PuppleButton>

    );
}