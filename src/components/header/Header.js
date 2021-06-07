import React from "react";
import "./Header.css";
function Header () {
    return (
        <div className = "header py-5">
            <h1>Employee Directory</h1>
            <p>Click on the <span><i class="bi bi-sort-alpha-down"></i></span> or the <span><i class="bi bi-sort-alpha-up-alt"></i></span> to sort the employees names</p>
        </div>

    );

}

export default Header;