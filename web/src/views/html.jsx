import React from "react";

class Html extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/assets/css/main.css" />
        </head>
        <body>
          <div id="react-root" dangerouslySetInnerHTML={{ __html: this.props.markup }} ></div>
          <script type="text/javascript" src="/assets/js/main.js"></script>
        </body>
      </html>
    );
  }

};

export default (Html)