import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import CreatePageForm from '../../components/CreatePageForm/CreatePageForm';
import commonStyle from '../styleComon'
import bg from '../../assets/images/headerbg.png'

const useStyles=makeStyles(theme=>({
    root:{
        background:`url(${bg})`,
        width:'100%',
    }
}))

function CreatePage(props) {
    const classesCommon=commonStyle()
    const classes=useStyles()
    return (
        <div className={classesCommon.root}>
            <div className={classesCommon.container}>
                <div className={classes.root}>
                    <Box display='flex' justifyContent='center'>
                        Thêm trang thông báo
                    </Box>
                  <CreatePageForm />
                </div>
            </div>
            
        </div>
    );
}

export default CreatePage;