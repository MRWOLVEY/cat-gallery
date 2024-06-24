const Card = ({name,id}) =>{
    return (
        <div className="tc bg-pink ba dib br3 pa3 ma2 grow bw1 shadow-4">
            <img src={`https://robohash.org/${id}?set=set4&size=200x200`}></img>
            <h3>{name}</h3>
        </div>
    )
}

export default Card