export default function Header(props) {
    return (
        <div>
            <h1>RoboFriends App</h1>
            <input type='text' onChange={props.searchChange } />
            </div>
    )
}