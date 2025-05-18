// ChapterHeading.js
'use strict';

function ChapterHeading(props) {
  return (
    <h2 className="chapter-title">
      {props.title}
    </h2>
  );
}

export default ChapterHeading;