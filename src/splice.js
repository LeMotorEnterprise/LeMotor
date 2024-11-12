// src/spline.js
import React from 'react';

const SplineAsset = () => {
  return (
    <div className="flexWrapper">
      <spline-viewer
        url="https://prod.spline.design/zRJmDU7f1JhL-bg8/scene.splinecode"
        hint
        loading-anim-type="spinner-big-dark"
      ></spline-viewer>
    </div>
  );
};

export default SplineAsset;

// url="https://prod.spline.design/zRJmDU7f1JhL-bg8/scene.splinecode"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAJ+ElEQVR4AQCBAH7/ADk1Oxk5NTsWOTU7ETk1Owk5NTsCOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsDOTU7CDk1Ows5NTsMOTU7Czk1Owc5NTsCOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ATk1OwU5NTsHAIEAfv8AOTU7FTk1OxI5NTsNOTU7Bjk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwQ5NTsKOTU7DTk1Ow45NTsMOTU7CTk1OwM5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7Azk1OwUAgQB+/wA5NTsOOTU7DDk1Owc5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7Bjk1Oww5NTsPOTU7EDk1Ow85NTsLOTU7BTk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7AQCBAH7/ADk1OwQ5NTsCOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwE5NTsIOTU7Djk1OxI5NTsTOTU7Ejk1Ow05NTsHOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAAIEAfv8AOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7Ajk1Ows5NTsROTU7FTk1Oxc5NTsVOTU7EDk1Owo5NTsCOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwAAgQB+/wA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsFOTU7Dzk1OxY5NTsaOTU7Gzk1Oxk5NTsUOTU7DTk1OwQ5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7AACBAH7/ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ATk1Oww5NTsWOTU7HTk1OyI5NTsjOTU7ITk1Oxs5NTsTOTU7CTk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAAIEAfv8AOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsLOTU7Fzk1OyE5NTsqOTU7Ljk1Oy85NTstOTU7Jzk1Ox45NTsTOTU7Bzk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwAAgQB+/wA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsDOTU7Dzk1Oxw5NTsoOTU7Mzk1Ozs5NTtAOTU7QTk1Oz45NTs3OTU7LTk1OyI5NTsWOTU7Cjk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7AACBAH7/ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsEOTU7DTk1Oxc5NTskOTU7MTk1Oz45NTtJOTU7UTk1O1Y5NTtXOTU7Uzk1O0w5NTtCOTU7NTk1Oyg5NTscOTU7EDk1Owc5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAAIEAfv8AOTU7Ezk1OxI5NTsROTU7EDk1Ow85NTsROTU7FDk1Oxo5NTsjOTU7Ljk1Ozs5NTtIOTU7VTk1O2A5NTtoOTU7bTk1O205NTtpOTU7Yjk1O1c5NTtKOTU7PTk1OzA5NTskOTU7Gjk1OxM5NTsOOTU7DDk1Ows5NTsLOTU7Czk1OwwAgQB+/wA5NTsmOTU7JTk1OyQ5NTsjOTU7Izk1OyQ5NTsoOTU7Ljk1Ozc5NTtCOTU7Tjk1O1w5NTtoOTU7czk1O3s5NTt/OTU7fzk1O3s5NTt0OTU7aTk1O1w5NTtOOTU7QTk1OzU5NTsrOTU7JDk1Ox85NTsdOTU7HDk1Oxw5NTsdOTU7HQCBAH7/ADk1OzM5NTszOTU7MTk1OzA5NTswOTU7MTk1OzQ5NTs6OTU7Qzk1O005NTtaOTU7Zjk1O3M5NTt9OTU7hTk1O4k5NTuJOTU7hTk1O305NTtyOTU7ZTk1O1c5NTtKOTU7Pzk1OzU5NTsuOTU7Kjk1Oyc5NTsnOTU7Jzk1Oyg5NTsoAIEAfv8AOTU7Njk1OzU5NTs0OTU7Mjk1OzI5NTsyOTU7NTk1Ozs5NTtDOTU7TTk1O1g5NTtlOTU7cTk1O3s5NTuCOTU7hjk1O4U5NTuBOTU7eTk1O285NTtiOTU7VTk1O0g5NTs9OTU7NDk1Oy45NTsqOTU7KDk1Oyg5NTsoOTU7KTk1OyoAgQB+/wA5NTssOTU7Kzk1Oyk5NTsoOTU7Jzk1Oyc5NTspOTU7Ljk1OzU5NTs/OTU7Sjk1O1Y5NTthOTU7azk1O3I5NTt1OTU7dTk1O3E5NTtpOTU7Xjk1O1I5NTtGOTU7Ojk1Oy85NTsnOTU7ITk1Ox45NTscOTU7HTk1Ox45NTsfOTU7IACBAH7/ADk1Oxg5NTsXOTU7FTk1OxM5NTsROTU7ETk1OxM5NTsXOTU7Hjk1Oyc5NTsxOTU7PTk1O0c5NTtROTU7Vzk1O1s5NTtaOTU7Vjk1O045NTtEOTU7OTk1Oy05NTshOTU7Fzk1OxA5NTsLOTU7CDk1Owc5NTsIOTU7Cjk1Ows5NTsMAIEAfv8AOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsCOTU7Czk1OxU5NTsfOTU7Kjk1OzM5NTs5OTU7PDk1Ozw5NTs4OTU7MDk1OyY5NTsbOTU7EDk1OwU5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwAAgQB+/wA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwY5NTsQOTU7GDk1Ox85NTsiOTU7ITk1Ox05NTsWOTU7DTk1OwI5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7AAGBAH7/ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwE5NTsJOTU7Dzk1OxI5NTsSOTU7Djk1Owc5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAOTU7ADk1OwA5NTsAGl3MziQ3w2sAAAAASUVORK5CYII="