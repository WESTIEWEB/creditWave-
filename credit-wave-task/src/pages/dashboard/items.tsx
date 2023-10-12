import {
    admin,
    crm,  
    debtManagement, 
    collection, 
    genSetup, 
    dashicon, 
    loanUnderwriting,
    mobApp, 
    loanApplication, 
    brideg, 
    report
} from '../../constants/images'
const dashboardItems = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        icon: dashicon
    },
    {
        name: 'Loan Application',
        link: '/loan-application',
        icon: loanApplication,
        dropItem : [

        ]
    },
    {
        name: 'Loan Underwriting',
        link: '/loan-underwriting',
        icon: loanUnderwriting,
        dropItem: [

        ]
    },
    {
        name: 'Collection',
        link: '/collection',
        icon: collection,
        dropItem: [

        ]
    },
    {
        name: 'CRM',
        link: '/crm',
        icon: crm,
        dropItem: [

        ]
    },
    {
        name: 'Administration',
        link: '/administration',
        icon: admin,
        dropItem: [

        ]
    },
    {
        name: 'Debt Management',
        link: '/debt-management',
        icon: debtManagement
    },
    {
        name: 'Bridge Loan',
        link: '/bridge-loan',
        icon: brideg
    },
    {
        name: 'Mobile App',
        link: '/mobile-app',
        icon: mobApp
    },
    {
        name: 'General Setup',
        link: '/general-setup',
        icon: genSetup
    },
    {
        name: 'Report',
        link: '/report',
        icon: report
    }
]

export {
    dashboardItems
}