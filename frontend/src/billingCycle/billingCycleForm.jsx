import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'

import { init } from './billingCycleActions'
class BillingCycleForm extends Component {

    render() {

        const { handleSubmit } = this.props
        return (

           <form role='form' onSubmit={handleSubmit} >

               <div className='box-body' >
                   <Field name='name' component={labelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                   <Field name='month' component={labelAndInput} type='number'
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                   <Field name='year' component={labelAndInput} type='number'
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
               </div>

               <div className='box-footer' >
                   <button type='submit' className='btn btn-primary' >Submit</button>
                   <button type='button' style={ {marginLeft: '5px'} } className='btn btn-danger' onClick={this.props.init} >Cancelar</button>
               </div>

           </form>
        );
    }

}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToPrps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToPrps)(BillingCycleForm)