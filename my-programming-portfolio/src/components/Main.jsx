let Main = ({text, children}) => {
    return (
        <main>
            <p>{text}</p>
            <div className="projectContainer">
                {children}
            </div>
        </main>
    )
}

export default Main