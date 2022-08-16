import { ReactFCWithChildren } from '../react';
import './Panel.css';

const PanelComponent: ReactFCWithChildren = ({children}) => {
  return (
    <div className="panel-container">
      {children}
    </div>
  )
}

export default PanelComponent;