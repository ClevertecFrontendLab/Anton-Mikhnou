import './CardAction.css';
import '../../pages/main-page/main-page.css'
// import { Card } from 'antd';
import { Card, Col, Row } from 'antd';

export default function CardAction(props) {
    return (
        <div className='card-action'>
            {props.cards.map(card => (
                <div id={card.id} key={card.id} className='card-action-wrapper'>
                    <div className='card-action-body'>
                        <div className='text-top'>
                            {card.titleTop}
                        </div>
                        {card.titleBottom && (
                            <div className='text-bottom'>
                                {card.titleBottom}
                            </div>
                        )}
                    </div>
                    <div className='card-action-action'>
                        <div className='button-group'>
                            <button>
                                <div className='icon-wrapper'>
                                    {card.icon}
                                </div>
                                <div className='button-text'>
                                    {card.textButton}
                                </div>
                            </button>
                        </div>
                     </div>
                </div>    
            ))}
        </div>   
    )

    // return (
    //     <div className='card-action-wrapper'>
    //         {props.cards.map(card => (
    //             <div className='site-card-wrapper' key={card.id}>
    //                 <Card actions={[card.icon]}>
    //                     <p>{card.titleTop}</p>
    //                     <p>{card.titleBottom}</p>
    //                     <p>{card.textButton}</p>
    //                 </Card>
    //             </div>
    //         ))}
    //     </div>
    // )
}