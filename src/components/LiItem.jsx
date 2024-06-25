export function LiItem ({liItemName})  {
    return(
        liItemName && 
        <li className="li-item">
            <p className="li-item-name">{liItemName} <br /></p>
        </li>
        
    )
}