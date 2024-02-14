import './Card.css';

function Discription(props) {
    
    return(
        <div className='card-discription'>
            <div className='body-discription'>
                <div className='text-discription'>
                    <div className='part'>{props.text}</div>
                    <ul>
                        {props.item.map(item =>(
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default function Card(props) {
    return (
        <div className='card-wrapper'>
            <Discription text={'С ClevrFit ты сможешь:'} item={props.item}></Discription>
        </div>
    )
}

