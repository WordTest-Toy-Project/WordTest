import { PuppleButton } from "./style";

export default function PuppleInputButton({title,width,height,fontsize}){
    return (
        <PuppleButton style={{width:width,height:height, fontSize:fontsize}}>{title}</PuppleButton>

    );
}