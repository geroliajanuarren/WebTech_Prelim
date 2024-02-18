"use client"
import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Card, CardActionArea, CardContent, Grid, Typography, ListItemIcon, CardHeader, Skeleton } from "@mui/material";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import {Chart as ChartJS,CategoryScale, LinearScale, Tooltip, PointElement, LineElement,} from "chart.js";
import { Line } from "react-chartjs-2";
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);
  



const Home = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const [comment, setComment] = useState ([]);
    const [todo, setTodo] = useState([]);
    
    useEffect(() => {
        const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        console.log(windowHeight);
        const fetchData = async () => {
          try {
            const responseTodo = await fetch(
              "https://jsonplaceholder.typicode.com/todos"
            );
            const jsonTodo = await responseTodo.json();
            setTodo(jsonTodo);
    
            const responsePosts = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            const jsonPosts = await responsePosts.json();
            setPosts(jsonPosts);
    
            const responseUsers = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            );
            const jsonUsers = await responseUsers.json();
            setUser(jsonUsers);
    
            const responseComments = await fetch(
              "https://jsonplaceholder.typicode.com/comments"
            );
            const jsonComments = await responseComments.json();
            setComment(jsonComments);
    
            setLoading(false);
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);

  
    
    const TodoPerUser = {};
    todo.map(todo => {
      if (TodoPerUser[todo.userId]){
        TodoPerUser[todo.userId]++;
      }else {
        TodoPerUser[todo.userId] = 1;
      }
    })


    return ( <>
        <Navbar/>
        <Grid container spacing={2}>
           <Grid xs={12} sm={6} md={4} lg={3}>
                <Card Card sx={{ maxWidth: 340, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5 }} elevation={3}>
                    <CardActionArea  >
                         <ListItemIcon
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start', // Align to the left
                            marginTop: '-6px',
                            }}
                        >
                                <CardHeader
                                title="Users"
                                component="div"
                                sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                                />
                                <GroupOutlinedIcon color="primary" sx={{ fontSize: 30, marginRight: '8px', marginTop:2, marginLeft: 22}} />
                        </ListItemIcon>
                        <CardContent>
                          
                            { loading ? (
                                <Skeleton animation="wave" height={30} width="80%" />
                            ):(
                                <CardContent>
                                    <Typography variant="h5" color="text.dark" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'start', justifyContent: 'start' }}>
                                        Total User: {user?.length}
                                    </Typography>
                                </CardContent>
                            )

                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
           </Grid>
           <Grid xs={12} sm={6} md={4} lg={3}>
                <Card Card sx={{ maxWidth: 340, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5}} elevation={3}>
                    <CardActionArea  >
                         <ListItemIcon
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start', // Align to the left
                            marginTop: '-6px',
                            }}
                        >
                                <CardHeader
                                title="Post"
                                component="div"
                                sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                                />
                                <PhotoCameraFrontOutlinedIcon color="primary" sx={{color:'#E23C29', fontSize: 30, marginRight: '8px', marginTop:2, marginLeft: 24}} />
                        </ListItemIcon>
                        <CardContent>
                            {loading ? (
                                <Skeleton animation="wave" height={30} width="80%" />
                                ):(
                                    <CardContent>
                                        <Typography variant="h5" color="text.dark" sx={{fontWeight: 'bold', display: 'flex', alignItems: 'start', justifyContent: 'start',}}>
                                            Total Post: {posts?.length}
                                        </Typography>
                                    </CardContent>
                                )
                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
           </Grid>
           <Grid xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 340, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5}} elevation={3}>
                    <CardActionArea  >
                         <ListItemIcon
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start', // Align to the left
                            marginTop: '-6px',
                            }}
                        >
                                <CardHeader
                                title="Comments"
                                component="div"
                                sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                                />
                                <QuestionAnswerOutlinedIcon color="primary" sx={{ color: '#DAE244', fontSize: 30, marginRight: '8px', marginTop:2, marginLeft: 15}} />
                        </ListItemIcon>
                        <CardContent>
                            {loading ? (
                                    <Skeleton animation="wave" height={30} width="80%" />
                                ):(
                                    <CardContent>
                                        <Typography variant="h5" color="text.dark" sx={{fontWeight: 'bold', display: 'flex', alignItems: 'start', justifyContent: 'start',}}>
                                            Total Comment: {comment?.length}
                                        </Typography>
                                    </CardContent>
                                )   
                            } 
                        </CardContent>
                    </CardActionArea>
                </Card>
           </Grid>
           <Grid xs={12} sm={6} md={4} lg={3}>
                 <Card sx={{ maxWidth: 340, marginTop: '20px', justifyContent: "center", alignItems: "center", borderRadius: 5 }} elevation={3}>
                    <CardActionArea>
                            <ListItemIcon
                                sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start', // Align to the left
                                marginTop: '-6px',
                                }}
                            >
                                <CardHeader
                                title="Todo"
                                component="div"
                                sx={{ color: 'Gray', fontSize: '10px', height: '5px', marginTop: '20px', marginLeft: 2 }}
                                />
                                <AddTaskOutlinedIcon color="primary" sx={{ color: '#1FE2AF', fontSize: 30, marginRight: '8px', marginTop:2, marginLeft: 23}} />
                            </ListItemIcon>
                        <CardContent>
                            {loading ? (
                                <Skeleton animation="wave" height={30} width="80%" />
                                ):(
                                    <CardContent>
                                <Typography variant="h5" color="text.dark" sx={{fontWeight: 'bold', display: 'flex', alignItems: 'start', justifyContent: 'start',}}>
                                        Total Comment: {todo?.length}
                                    </Typography>
                                    </CardContent>
                                )   
                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item sm={11}>
                <Card height={450} MaxWidth={900}  overflow="auto"   sx={{  marginTop: '20px',  justifyContent: "center", alignItems: "center", }} elevation={3}>
                <Line
                    data={{
                    labels: user.map(users => users.name),
                    datasets: [
                        {
                        data: user.map(users => TodoPerUser[users.id] || 0),
                        backgroundColor: "purple",
                        },
                    ],
                    }}
                    height={100}
                />
                </Card>
            </Grid>
          
        </Grid>
    </>);
}
 
export default Home;