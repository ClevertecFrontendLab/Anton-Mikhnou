import './Header.css';
import {SettingOutlined} from '@ant-design/icons'

export default function Header() {
    return (
        <header className='header'>

            <div className='bread-crumb'>
                <span className='last-item'>Главная</span>
            </div>

            <div className='layout-blocks'>

                <div className='heading-left'>
                    <div className='heading-left-inner'>
                        <div className='title'>
                            Привествуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
                        </div>
                    </div>
                </div>

                <div className='heading-extra'>
                    <button>
                        <SettingOutlined />
                        <div className='tite-button'>Настройки</div>
                    </button>
                </div>

            </div>

        </header>
    )
}