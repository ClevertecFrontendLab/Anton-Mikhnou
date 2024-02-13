import './Footer.css';
import { AndroidFilled } from '@ant-design/icons';
import { AppleFilled } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <button>
                <p>Смотреть отзывы</p>
            </button>
            <div className='card-action-wrapper'>
                    <div className='card-action-body'>
                        <div className='text-top-outher'>
                            Скачать на телефон
                        </div>
                        <div className='text-bottom-outher'>
                            Доступно в PRO-тарифе
                        </div>
                    </div>
                    <div className='card-action-action'>
                        <div className='button-group-outher'>
                            <div>
                                <button className='button-left'>
                                    <div className='icon-wrapper-footer'>
                                        <AndroidFilled />
                                    </div>
                                    <div className='button-text-footer'>
                                        Android OS
                                    </div>
                                </button>
                                <button className='button-rigth'>
                                    <div className='icon-wrapper-footer'>
                                        <AppleFilled />
                                    </div>
                                    <div className='button-text-footer'>
                                        Apple iOS
                                    </div>
                                </button>
                            </div>
                        </div>
                     </div>
            </div>    
        </div>
    )
}