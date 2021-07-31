import Link from "next/link";
function Submenu(props) {
    return(<div className="submenu"><button className="closebutton" onClick={()=>props.setSelectedmenu('')}>X</button>
    <h2><Link href={`/${props.title}`}><a style={{ textTransform: "capitalize"}}>{props.title}</a></Link></h2>
    <ul>
        {
            props.listitems.length > 0 && props.listitems.map((listitem) =>
                (<li key={listitem.id}>
                    <Link href={`/${props.title}/${listitem.id}`}>
                        <a onClick={()=>props.setSelectedmenu('')}>{listitem.name}</a>
                    </Link>
                </li>)
            )
        }
    </ul>
</div>)
}
export default Submenu;