import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faPhone, faCircleQuestion, faBoxOpen, faPeopleCarryBox} from "@fortawesome/free-solid-svg-icons";


export const SidebarData = [
    {
        title: 'Start',
        id: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
        cName: 'nav-text'
    },
    {
        title: 'O co chodzi?',
        id: '/#o-co-chodzi',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        cName: 'nav-text'
    },
    {
        title: 'O nas',
        id: '/#o-nas',
        icon: <FontAwesomeIcon icon={faPeopleCarryBox} />,
        cName: 'nav-text'
    },
    {
        title: 'Fundacja i organizacje',
        id: '/#fundacja',
        icon: <FontAwesomeIcon icon={faBoxOpen} />,
        cName: 'nav-text'
    },
    {
        title: 'Kontakt',
        id: '/#kontakt',
        icon: <FontAwesomeIcon icon={faPhone} />,
        cName: 'nav-text'
    },
]
