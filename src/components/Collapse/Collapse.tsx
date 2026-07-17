import CollapsePanel from '../CollapsePanel/CollapsePanel';
import './Collapse.scss'

type CollapseProps = {
    title: string;
    icon: string;
    children: React.ReactNode
}

const Collapse = ({ title, icon, children }: CollapseProps) => {

    return (
        <div className='collapse_wrapper'>
            <div className="collapse">
                <h3 className='collapse_title'>{title}</h3>
                <img src={icon} alt="icon" />
            </div>
            <CollapsePanel>{children}</CollapsePanel>
        </div>

    )
}

export default Collapse