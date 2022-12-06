import React, {memo} from 'react';

function Header({increment}) {
    console.log("Header component re-render")
    return (
        <div>
            <h2>Header</h2>
            <button onClick={increment}>Arttır</button>
        </div>
    );
}

export default memo(Header);