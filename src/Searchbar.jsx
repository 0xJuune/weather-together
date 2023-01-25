import React from 'react';

function Searchbar() {
    return (
        <div>
            <form action="" onSubmit="return false;">
                <input type="text" name="location" id="location" placeholder="City / ZIP Code" />
            </form>
            <button>Search</button>
        </div>
    )
}

export default Searchbar;