import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color='Red' onClick={() => console.log('clicked')}>
        ASJDJASDJ
    </ChildAsFC>;
}

export default Parent;