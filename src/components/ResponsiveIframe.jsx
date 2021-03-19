import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header';
import { useParams } from 'react-router';
import { dashboardList } from '../constants/dashboardList';

const useStyles = makeStyles({
    container: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%',
    },
    responsiveiFrame: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
})


const ResponsiveIframe = (props) => {
    
    const classes = useStyles();
    let { DashName } = useParams();

    let filterDashboard = dashboardList.filter(function (e) {
        return e.urlCode === DashName;
    })

    let getEmbedUrl = filterDashboard[0].links.filter(function(e) {
        return e.title === "embed";
    })

    console.log(filterDashboard[0]);
    console.log(getEmbedUrl[0].to);

    return (
        <div>
            <Header />
            <div className={classes.container}>
                <iframe title='rexpeita' className={classes.responsiveiFrame} src={getEmbedUrl[0].url}></iframe>
            </div>
        </div>
    );
}

export default ResponsiveIframe;