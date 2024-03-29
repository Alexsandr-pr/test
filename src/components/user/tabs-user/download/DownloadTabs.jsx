import "./downloadtabs.scss";
import Title from "../../title/Title"
const DownloadTabs = () => {
    return (
        <>
            <Title title={"Загрузки"}/>
            <div className="user-content__block-info block-info">
                <div className="block-info__body">
                    <div className="block-info__image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.73 17.9983L13.73 3.99827C13.5556 3.69048 13.3026 3.43446 12.9969 3.25634C12.6912 3.07822 12.3438 2.98437 11.99 2.98438C11.6362 2.98437 11.2887 3.07822 10.9831 3.25634C10.6774 3.43446 10.4244 3.69048 10.25 3.99827L2.24999 17.9983C2.07367 18.3036 1.98122 18.6502 1.982 19.0028C1.98278 19.3554 2.07677 19.7015 2.25444 20.0061C2.43211 20.3107 2.68714 20.5629 2.99369 20.7371C3.30023 20.9113 3.6474 21.0014 3.99999 20.9983H20C20.3509 20.9979 20.6955 20.9052 20.9993 20.7296C21.303 20.5539 21.5552 20.3014 21.7305 19.9974C21.9058 19.6934 21.998 19.3487 21.9979 18.9978C21.9978 18.6469 21.9054 18.3022 21.73 17.9983Z" stroke="#BEAE97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 9V13" stroke="#BEAE97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 17H12.01" stroke="#BEAE97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p className="block-info__text">Доступных загрузок нет</p> 
                </div>
            </div>
        </>
    )
}

export default DownloadTabs;