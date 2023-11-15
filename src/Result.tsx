import { Fragment } from "react";

function Result({winner}: {winner: string}) {
    return ( <Fragment>
        <div className="result">
            {winner === 'draw' ? 'Game Tied' : `${winner} Wins !!!`}
        </div>
    </Fragment> );
}

export default Result;