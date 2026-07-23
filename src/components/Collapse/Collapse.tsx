import CollapsePanel from '../CollapsePanel/CollapsePanel';
import './Collapse.scss'
import vectorUp from '../../assets/Vector_up.svg'
import vectorDown from "../../assets/Vector_down.svg"
import { useState } from 'react';

type CollapseProps = {
    title: string;
    children: React.ReactNode;
}

const Collapse = ({ title, children}: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='collapse_wrapper'>
            <h3 className='collapse_heading'>
                <button
                    type="button"
                    className="collapse_button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    <span className='collapse_title'>{title}</span>
                    <img src={isOpen ? vectorDown : vectorUp} alt=""/>
                </button>
            </h3>
            <CollapsePanel isOpen={isOpen}>{children}</CollapsePanel>
        </div>

    )
}

export default Collapse