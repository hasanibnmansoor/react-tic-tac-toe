import { Fragment } from "react";

function Tile({ tile, index, onTileClick }: { tile: string | null, index: number, onTileClick: (index: number) => void }) {
  return (
    <Fragment>
      <div className="cell" onClick={() => onTileClick(index)}>{tile}</div>
    </Fragment>
  );
}

export default Tile;
