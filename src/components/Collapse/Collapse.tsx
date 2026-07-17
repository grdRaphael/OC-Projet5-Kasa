import './Collapse.scss'

type CollapseProps = {
    title: string; 
    icon: string;
}

const Collapse = ({title, icon}: CollapseProps) => {
    return(
        <div className="collapse">
            <h3 className='collapse_title'>{title}</h3>
            <img src={icon} alt="icon" />
        </div>
    )
}

export default Collapse