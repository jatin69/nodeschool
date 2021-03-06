import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component{
  render() {
     return (
                <div className="todoBox">
                    <h1>Todos</h1>
                    <TodoList />
                    <TodoForm />
                </div>
            );
  }
}

class TD extends React.Component {
	render () {
		return (
			<td style={style.tableContent}>
			{this.props.children}
			</td>
			);
	}
}

class Todo extends React.Component {
   constructor(props) {
            super(props);

            this.state = {
              checked : false
            };
    }

  handleChange() {
    this.setState( {
        checked: !this.state.checked
    }
    );
  }
  render () {
  	return (
  		<tr>
      <TD> 
       <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
      </TD>
      <TD>{this.props.title}</TD>
  		<TD>{this.props.children}</TD>
  		</tr>
  		);
  }
}
Todo.propTypes = {
  title: PropTypes.string.isRequired
}

 let style = {
        tableContent: {
            border: "1px solid black;"
        }
    };
class TodoList extends React.Component {
  render() {
  	return ( 		
		    <div className="todoList">
		       <table style={{ border: "2px solid black;"}}>
                    <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    <Todo title="Learn React">15:00</Todo>
                    </tbody>
            	</table>
		    </div>
  		);
  }
}


class TodoForm extends React.Component {
  render() {
  	return ( 		
		     <div className="todoForm">
		      I am a TodoForm.
		    </div>
  		);
  }
}
