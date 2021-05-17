import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import {jsx, css,Global, ClassNames } from '@emotion/react'
render(
    <div css={{ color: 'hotpink' }}>
      <div
        css={css`
          color: green;
        `}
      />
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0
          }
        }}
      />
      <ClassNames>
        {({ css, cx }) => (
          <div
            className={cx(
              'some-class',
              css`
                color: yellow;
              `
            )}
          />
        )}
      </ClassNames>
    </div>
  )
// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

export default function Loading() {
  return <ClipLoader css={override} size={150} color={"#775d5d"} />;
}