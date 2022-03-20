import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import TeamInfo from '../components/Team/TeamInfo';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';

const SingleTeam = () => {
    return (
        <>
            <Announcement />
            <NavBar />
            <PageTitle title="Tijani Abimbola" pageLocation="Home | All Team | Tijani Abimbola" />
            <TeamInfo />
            <Footer borderTop={false}/>
        </>
    );
};


export default SingleTeam;