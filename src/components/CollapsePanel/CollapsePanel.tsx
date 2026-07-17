import './CollapsePanel.scss'

type panelProps = {
    children: React.ReactNode
}

const CollapsePanel = ({children}: panelProps) => {
    return(
        <div className="collapse_panel">
            <p>{children}</p>
        </div>
    )
}

export default CollapsePanel