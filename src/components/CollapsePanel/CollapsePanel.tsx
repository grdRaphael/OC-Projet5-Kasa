import './CollapsePanel.scss'

type panelProps = {
    children: React.ReactNode,
    isOpen: boolean
}

const CollapsePanel = ({ children, isOpen }: panelProps) => {
    return (
        <div className={`collapse_panel ${isOpen ? "collapse_panel--open" : ""}`} >
            <div className='collapse_panel_content'>
                <div className='collapse_panel_inner'>{children}</div>
            </div>
        </div>

    )
}

export default CollapsePanel