import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({

    dashboard: DashboardReducer, /* dashboard: () => ({summary: {credit: 100, debt: 50}}) */
    tab: TabReducer,
    billingCycle: BillingCycleReducer

})

export default rootReducer