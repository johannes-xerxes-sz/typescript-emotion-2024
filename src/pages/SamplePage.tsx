import { css } from '@emotion/react';

function Sample() {
  return (
    <div>
      <div css={css({
        margin: 10,
        padding: 10,
        backgroundColor: 'red',
      })}>
        This is an example of <code>`css`</code> using an object.
      </div>
      <div css={css`
        margin: 10px;
        padding: 10px;
        background-color: #eee;
      `}>
        This is an example of <code>`css`</code> using a tagged template literal.
      </div>
    </div>
  );
}

export default Sample;