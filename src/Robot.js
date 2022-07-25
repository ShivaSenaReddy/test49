export default function Robot(props) {
    let id =  props.id 
    return (
        <div>
            <img src={
                "https://robohash.org/" + props.id} />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
        
        )

}