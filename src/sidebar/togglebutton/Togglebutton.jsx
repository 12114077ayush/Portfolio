const Togglebutton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !(prev))} >
            <svg xmlns="http://www.w3.org/2000/svg" x="25px" y="25px" width="23" height="23" viewBox="0 0 50 50">
                <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
        </button>
    );
}

export default Togglebutton;

{/* <svg xmlns="http://www.w3.org/2000/svg" x="25px" y="25px" width="23" height="23" viewBox="0 0 50 50">
<path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
</svg> */}