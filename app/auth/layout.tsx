import React from 'react';

interface Props {
    title: string;
    readonly children?: React.ReactNode;
}

interface LayoutInterface {
    children?: React.ReactNode
}

const DiscountComponent: React.FC<Props> = ({title, children}) => {
    return <div className='border-b p-1 text-xs text-center'>
        <h1>{title}</h1>
        {children}
    </div>
}

const Layout = ({children}: LayoutInterface): React.ReactElement => {
    return <div>
        <DiscountComponent title='20% off for the next 3 days!'/>
        <main>{children}</main>
    </div>
}


export default Layout;