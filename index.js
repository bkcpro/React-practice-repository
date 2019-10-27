console.log('app is running');

// const React = require('react');
// const ReactDOM = require('react-dom');

var data = [{
  "when": "2 minutes ago",
  "who": "Jill",
  "description": "Created new account"
}, {
  "when": "1 hour ago",
  "who": "Bhargav",
  "description": "Added first chapter"
}, {
  "when": "2 hours ago",
  "who": "Andrew",
  "description": "Edited word document"
}];

var headers = ['Last updated', 'Author', 'Summary'];

var App = React.createClass({
  render: function(){

  var rows = this.props.data.map(function(row){
    return <tr>
      <td> {row.when} </td>
      <td> {row.who} </td>
      <td> {row.description} </td>
    </tr>
  });

  var headings = this.props.headings.map(function(heading){
    return <th> {heading} </th>
  });

  return <h1>
    <table>
      <thead> {headings} </thead>
      {rows}
    </table>
  </h1>
});

ReactDOM.render(<App headings={headers} data={data}/>, document.getElementById('root'));
