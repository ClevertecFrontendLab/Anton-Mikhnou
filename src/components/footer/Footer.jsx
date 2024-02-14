import './Footer.css';
import { AndroidFilled } from '@ant-design/icons';
import { AppleFilled } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className='footer-wrapper'>
            <button>
                <p>Смотреть отзывы</p>
            </button>
            <div className='card-action-wrapper-footer'>
                    <div className='card-action-body-footer'>
                        <div className='text-top-outher-footer'>
                            Скачать на телефон
                        </div>
                        <div className='text-bottom-outher-footer'>
                            Доступно в PRO-тарифе
                        </div>
                    </div>
                    <div className='card-action-action-footer'>
                        <div className='button-group-outher'>
                            <div>
                                <button className='button-left-footer'>
                                    <div className='icon-wrapper-footer'>
                                        <AndroidFilled />
                                    </div>
                                    <div className='button-text-footer'>
                                        Android OS
                                    </div>
                                </button>
                                <button className='button-rigth-footer'>
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