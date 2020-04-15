import React from "react";

function HeroItem({ heroId, heroName }) {
  return (
    <a href={`/detail/${heroId}`}>
      <span class="badge">{heroId}</span> {heroName}
    </a>
  );
}

export default HeroItem;
