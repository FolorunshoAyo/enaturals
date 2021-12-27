import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import TeamInfo from '../components/Team/TeamInfo';
import Footer from '../components/Footer/Footer';

const SingleTeam = () => {
    return (
        <>
            <NavBar />
            <PageTitle title="Tijani Abimbola" pageLocation="Home | All Team | Tijani Abimbola" />
            <TeamInfo />
            <Footer borderTop={false}/>
        </>
    );
};


export default SingleTeam;