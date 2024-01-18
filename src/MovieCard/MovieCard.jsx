export const MovieCard = ({ img, title, desc }) => {
    return (
        <div className="movie-card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}