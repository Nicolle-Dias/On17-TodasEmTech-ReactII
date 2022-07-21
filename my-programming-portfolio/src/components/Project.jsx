let Project = ({title, img}) => {
    return (
        <section>
            <h1>{title}</h1>
            <img src={img} className="projectImg"/>
        </section>
    )
}

export default Project