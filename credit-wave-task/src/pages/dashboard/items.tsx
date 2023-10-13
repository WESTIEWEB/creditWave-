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
        icon: loanApplication,
        dropItem : [
            {
                name: 'Loan Application',
                link: '/loan-application'
            },
            {
                name: 'Loan Application',
                link: '/loan-application'
            },
            {
                name: 'Loan Application',
                link: '/loan-application'
            }
        ]
    },
    {
        name: 'Loan Underwriting',
        icon: loanUnderwriting,
        dropItem: [
            {
                name: 'Loan Underwriting',
                link: '/loan-underwriting'
            },
            {
                name: 'Loan Underwriting',
                link: '/loan-underwriting'
            },
            {
                name: 'Loan Underwriting',
                link: '/loan-underwriting'
            }
        ]
    },
    {
        name: 'Collection',
        icon: collection,
        dropItem: [
            {
                name: 'Collection',
                link: '/collection'
            },
            {
                name: 'Collection',
                link: '/collection'
            },
            {
                name: 'Collection',
                link: '/collection'
            }
        ]
    },
    {
        name: 'CRM',
        icon: crm,
        dropItem: [
            {
                name: 'CRM',
                link: '/crm'
            },
            {
                name: 'CRM',
                link: '/crm'
            },
            {
                name: 'CRM',
                link: '/crm'
            }
        ]
    },
    {
        name: 'Administration',
        icon: admin,
        dropItem: [
            {
                name: 'Administration',
                link: '/administration'
            },
            {
                name: 'Administration',
                link: '/administration'
            },
            {
                name: 'Administration',
                link: '/administration'
            }
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