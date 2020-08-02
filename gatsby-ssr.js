/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setPostBodyComponents([
    <script src="./static/js/jquery.magnific-popup.min.js" defer />,
    <script src="./static/js/vr360.js" />,
    <script
     /*  src="./static/js/components/instagram-widget.min.js"
      type="text/javascript" */
    />,
  ])
}