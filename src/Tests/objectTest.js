import React, {Component} from 'react'
export default class objectTest extends Component
{
    employee={
        empid:123,
        firstname : "Amit",
        salary: 500000
    }
    render()
    {
        return(
            <div>
                <h4>Object testing using Jest unit testing</h4>
            </div>
        )
    }
}