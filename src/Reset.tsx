import { Fragment } from "react";

function Reset({onReset}: {onReset: () => void}) {
    return ( <Fragment>
        <div className="reset" onClick={onReset}>Reset Board</div>
    </Fragment> );
}

export default Reset;