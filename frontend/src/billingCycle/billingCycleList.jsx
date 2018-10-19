import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showTab } from './billingCycleActions'

import Button from '../common/form/button'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()

    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
           <tr key={bc._id}>
               <td>{ bc.name } </td>
               <td>{ bc.month } </td>
               <td>{ bc.year } </td>
               <td>
                   <Button submitClass='warning' clickButton={() => this.props.showTab(bc, 'tabUpdate')}
                           submitLabel={ <i className='fa fa-pencil' ></i> } />

                   <Button submitClass='danger' clickButton={() => this.props.showTab(bc, 'tabDelete')}
                           submitLabel={ <i className='fa fa-trash-o' ></i> } />
               </td>
           </tr>
        ))
    }

    render() {
        console.log(this.props.list)
        return (
            <div>
                <table className='table' >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions' >Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)