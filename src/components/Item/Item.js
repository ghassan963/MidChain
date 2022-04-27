import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosNewRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import {BrowserRouter  as Router, useHistory} from 'react-router-dom'
function Item() {
  const history = useHistory();
  return (
    <>
      <Button onClick={() => history.goBack()} variant="contained"> 
        <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
      </Button>
    </>
  );
};
export default Item