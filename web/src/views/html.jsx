import React from "react";

class Html extends React.Component {
  render () {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </head>
        <body>
          <div id="react-root" dangerouslySetInnerHTML={{ __html: this.props.markup }} ></div>
        </body>
      </html>
    );
  }

};

export default (Html)