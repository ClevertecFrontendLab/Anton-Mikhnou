import './Container.css';
import Header from '../header/Header';
import Card from '../card/Card';
import Content from '../content/Content';
import CardAction from '../cardAcction/CardAction';
import Footer from '../footer/Footer';
import { useState } from 'react';

const items = [
    {
        id: '1',
        title: 'планировать свои тренировки на календаре, выбира тип и уровень нагрузк;',
    }, 
    {
        id: '2',
        title: 'отслеживать своидостижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
    },
    {
      id: '3',
      title: 'создавать свой профиль где ты можешь загружать свои фото, видео и отзывы о тренировках;',   
    },
    {
      id: '4',
      title: 'выполнять расписанные тренировки для разных частей тела, следуя подробным интсрукциями советам профессиональных тренеров.',   
    }
]

export default function Conainer() {
    // const [contActive, setContActive] = useState(true)
    return (
        <div className='container' >
            <Header />
            <Card item={items} />
            <Content />
            <Footer />
        </div>
    )
}