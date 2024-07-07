import React, { Component } from 'react'

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {
          this.props.names.map((e)=>(
            <li>{e.name}</li>
          ))
        }
        </div>
    )
  }
}

export default UserList