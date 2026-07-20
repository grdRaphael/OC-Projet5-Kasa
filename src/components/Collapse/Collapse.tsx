import CollapsePanel from '../CollapsePanel/CollapsePanel';
import './Collapse.scss'

type CollapseProps = {
    title: string;
    icon: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const Collapse = ({ title, icon, children, isOpen, onToggle }: CollapseProps) => {

    return (
        <div className='collapse_wrapper'>
            <div className="collapse"
                onClick={onToggle}>
                <h3 className='collapse_title'>{title}</h3>
                <img src={icon} alt="icon" />
            </div>
            {isOpen && <CollapsePanel>{children}</CollapsePanel>}

        </div>

    )
}

export default Collapse