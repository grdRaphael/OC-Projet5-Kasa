import CollapsePanel from '../CollapsePanel/CollapsePanel';
import './Collapse.scss'
import vectorUp from '../../assets/Vector_up.svg'
import vectorDown from "../../assets/Vector_down.svg"
import { useState } from 'react';

type CollapseProps = {
    title: string;
    children: React.ReactNode;
}

const Collapse = ({ title, children,  }: CollapseProps) => {
    const [isOpen, setIsOpen]= useState(false)

    return (
        <div className='collapse_wrapper'>
            <div className="collapse"
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className='collapse_title'>{title}</h3>
                <img src={isOpen ? vectorUp : vectorDown } alt="icon" />
            </div>
            {isOpen && <CollapsePanel>{children}</CollapsePanel>}
        </div>

    )
}

export default Collapse