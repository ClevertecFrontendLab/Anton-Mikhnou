import './Content.css';
import CardAction from '../cardAcction/CardAction';
import {CalendarTwoTone} from '@ant-design/icons';
import {HeartFilled} from '@ant-design/icons';
import {IdcardOutlined} from '@ant-design/icons';
import { Card } from 'antd';

export default function Content() {
    const cards = [
        {
            id: 'card1',
            titleTop: 'Расписание тренировки',
            titleBottom: '',
            icon: <HeartFilled style={{color:"var(--primary-light-6)"}}/>,
            textButton: 'Тренировки',  
        },
        {
            id: 'card2',
            titleTop: 'Назначить календарь',
            titleBottom: '',
            icon: <CalendarTwoTone twoToneColor="var(--primary-light-6)"/>,
            textButton: 'Календарь', 
        },
        {
            id: 'card3',
            titleTop: 'Заполнить профиль',
            titleBottom: '',
            icon: <IdcardOutlined style={{color:"var(--primary-light-6)"}}/>,
            textButton: 'Профиль',
        },
    ]
    
    return (
        <div className='content-wrapp'>
            <div className='content-body'>
                <div className='content-text'>
                    <p>
                        {'ClevrFit — это не просто приложение, а твой личный помощник'} <br/> {'в мире фитнеса. Не откладывай на завтра — начни тренироваться'} <br/> {'уже сегодня!'}
                    </p> 
                </div>
            </div>
            <CardAction cards={cards}/>
        </div>
    )
}