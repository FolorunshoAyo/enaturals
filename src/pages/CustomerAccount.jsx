import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';
import CustomerInfo from '../components/CustomerInfo/CustomerInfo';
import { useLocation } from 'react-router-dom';


const CustomerAccount = () => {
    const {pathname} = useLocation();
    
    const extractAddressPath = (pathname) => {
        return (pathname.slice(0, 23));
    }

    const extractedPathname = extractAddressPath(pathname);
    const remainingPathname = pathname.substring(23);

    return(
        <>
        {
            (extractedPathname === "/customer/address/edit/") ?
            <>
                <Announcement />
                <Navbar />
                <PageTitle title={"Customer Account"} pageLocation={"Home | Customer Account"} params={remainingPathname}/>
                <CustomerInfo pathname={pathname} params={remainingPathname}/>
                <Footer borderTop/>
            </>
            :
            <>
                <Announcement />
                <Navbar />
                <PageTitle title={"Customer Account"} pageLocation={"Home | Customer Account"} />
                <CustomerInfo pathname={pathname}/>
                <Footer borderTop/>
            </>
        }
        </>
    );
};

export default CustomerAccount;