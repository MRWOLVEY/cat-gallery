import Card from "./Card";

const CardList = ({cats}) => {
    return(
        <div>
            {cats.map(cat => <Card key={cat.id} id={cat.id} name={cat.name}/>) }
        </div>
    )
}

export default CardList