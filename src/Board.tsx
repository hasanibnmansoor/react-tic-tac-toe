import { Fragment } from "react";

import Tile from "./Tile";

function Board({
  tiles,
  strikeClass,
  onTileClick,
}: {
  tiles: (string | null)[];
  strikeClass: string;
  onTileClick: (index: number) => void;
}) {
  return (
    <Fragment>
      <div className="grid">
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            tile={tile}
            index={index}
            onTileClick={onTileClick}
          />
        ))}
      </div>
      {strikeClass && <div className={strikeClass}></div>}
    </Fragment>
  );
}

export default Board;
