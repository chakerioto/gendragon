import React from 'react'
import Copy from './UI/Copy';
interface props {
    onCopy: () => Promise<void>;
}
const CopyButton = ({ onCopy }: props) => {
    return (
        <button onClick={onCopy}>
            <Copy />
        </button>
    )
}

export default CopyButton