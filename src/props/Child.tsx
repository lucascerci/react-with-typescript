interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
  }
  

export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>;
}

export const ChildAsFC: React.FunctionComponent<ChildProps> = ({color, onClick, children}) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>
}