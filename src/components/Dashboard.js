import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { CircularProgress, Card, CardContent, Typography } from '@mui/material';
import { setLoading } from '../redux/actions/action';
import "./styles.css"

const DashBoardData = () => {
  const { data, isLoading, error } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
  }, [dispatch])

  let content;
  if (isLoading) {
    content = <CircularProgress color="inherit" />;
  } else if (!isLoading && error) {
    content = (
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        {error}
      </Typography>
    );
  } else {
    content = (
      <div sx={{ display: 'flex', flexWrap: 'wrap', justify: 'center', align: "center" }} className="card">
        {data.map((postData) => (
          <Card key={postData?.id} sx={{ m: 2, minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6" component="h2">
                UserId: {postData?.id}
              </Typography>
              <Typography variant="h5" component="h2">
                Name: {postData?.name}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                UserName: {postData?.username}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                PhoneNumber: {postData?.phone}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                User-Website: {postData?.website}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <>
      <Typography variant="h4" align="center" sx={{ mt: 2 }}>
        DASHBOARD
      </Typography>
      {content}
    </>
  );
}


export default DashBoardData;
