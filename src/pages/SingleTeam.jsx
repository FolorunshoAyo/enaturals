import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import TeamInfo from '../components/Team/TeamInfo';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';
import { useParams } from 'react-router-dom';
import { splitAndSpace } from '../usefulFunc';

const SingleTeam = () => {
    const { memberName } = useParams();

    return (
        <>
            <Announcement />
            <NavBar />
            <PageTitle title={splitAndSpace(memberName, "-")} pageLocation={"Home | All Team | " + memberName} params={memberName}/>
            <TeamInfo />
            <Footer borderTop={false}/>
        </>
    );
};


export default SingleTeam;