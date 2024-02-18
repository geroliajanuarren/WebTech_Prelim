"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "../navbar";
import { Card, CardActionArea, CardContent, Grid, Skeleton, Typography,  Button, IconButton, ListItemIcon } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Post = () => {
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([{
        id: null,
        name: null,
        email: null,
        body: null
    }]);
    const [Loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchPosts = () => {
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    setPosts(json);
                    setLoading(false)
                });
        };
        fetchPosts();

        const fetchUsers = () => {
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setUsers(json);
                    setLoading(false)
                });
        }
        fetchUsers();
    }, []);

 


    return (
        <>
            <Navbar />
            <Grid container spacing={4}>
                {posts.map((item, index) => {
                    const user = users.find((u) => u.id === item.userId);
                    return(
                        <Grid item lg={3} md={4} sm={6} xs={12} key={index.id}>
                        <Card sx={{ maxWidth: 340, justifyContent: "center", alignItems: "center", borderRadius:4}} elevation={4} > 
                            <CardActionArea >                            
                                <CardContent>
                                    {Loading ? (
                                        <Skeleton animation="wave" height={30} width="80%" />
                                    ):(
                                        <>
                                            <ListItemIcon
                                                sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-start', // Align to the left
                                                marginTop: '-6px',
                                                }}
                                            >
                                                <AccountCircleOutlinedIcon fontSize="large" color="error" />
                                                {user && (
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: "black", marginLeft: 2, margin: "10px" }}
                                                >
                                                    {user.name}
                                                </Typography>
                                                )}
                                                <div style={{marginLeft: '30px'}}></div>
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                                
                                            </ListItemIcon>
                                            {user && (
                                                <Typography variant="body2" color="text.dark" sx={{fontWeight: 'light', fontSize: 15, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>
                                                {user.email}
                                                </Typography>
                                            )}
                                            
                                        </>
                                    )
                                    }
                                </CardContent>
                                
                            </CardActionArea>
                            <CardActionArea>
                                <CardContent>
                                    {Loading ? (
                                        <Skeleton animation="wave" height={30} width="80%" />
                                    ):(
                                    <>  
                                        <Typography variant="body2" color="text.dark" sx={{fontWeight: 'bold', fontSize: 19, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>
                                        {`Title: ${item.title}`}
                                        </Typography>
                                        <br/>
                                        <Typography variant="body1" color="text.dark" sx={{ fontSize: 16, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>
                                            {item.body}
                                        </Typography>
                                        <Button variant="outlined" onClick={() => router.push(`Dashboard/Post/${item.id}`)} sx={{ marginTop: '20px' }}>View Comment</Button>

                                    </>
                                    )
                                    }
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

export default Post;
