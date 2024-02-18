'use client'
import Navbar from "../../navbar";
import { Card, CardActionArea, CardContent, Grid, Typography, Button,} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


const Todo = ({params}) => {
    const [todo, setTodo] = useState([]);
    const [user, setUser] = useState(null);
    const userId = params.id;
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
          try {
            const responseTodo = await fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}/todos`
            );
            const jsonTodo = await responseTodo.json();
            setTodo(jsonTodo);
    
            const responseUser = await fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}`
            );
            const jsonUser = await responseUser.json();
            setUser(jsonUser);
        
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
        };
    
        fetchData();
    }, [userId]);



    // useEffect(() => {
    //     const fetchUserTodo = () => {
    //         fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    //             .then(response => response.json())
    //             .then(json => {
    //                 setTodo(json);
    //             });
    //     }
    //     fetchUserTodo()

    //     const fetchUsers = () => {
           
    //         fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //             .then(response => response.json())
    //             .then(json => {
    //                 setUser(json);
    //             });
            
    //     }
    //     fetchUsers();
    // }, [])



    return ( <>
        <Navbar/>
        <Button variant="contained" color="success" onClick={() => router.back()} sx={{marginTop:'100px', marginLeft: '40px'}}>Go Back</Button>
        <Typography variant="h4" sx={{fontWeight:'bold', marginTop:'30px', marginLeft:'40px'}}>Todo Section</Typography>
        <Grid container spacing={4} marginTop={"8px"}>
                {todo.map((todos, index) => {
                   
                    return(
                        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                            <Card sx={{ maxWidth: 380, justifyContent: "center", alignItems: "center", borderRadius:4, marginLeft: '40px', marignButton: '10px'}} elevation={4} > 
                                <CardActionArea >                            
                                    <CardContent>
                                            <Typography variant="body1" color="primary" fontSize={"15px"}>{`Todo ID: ${todos.id}`} </Typography>
                                            {user && (
                                                <Typography variant="h5" fontWeight={"bold"}>
                                                    {user.name}
                                                </Typography>
                                            )}
                                            <Typography variant="body1" fontSize={"20px"} color="text.dark" sx={{ fontSize: 16, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>{`Title: ${todos.title}`} </Typography>

                                            
                                      
                                    </CardContent>
                                    <CardContent>
                                        {todos.completed === true ? (
                                             <CheckBoxIcon sx={{ float: "right" }} />
                                        ):(
                                            <CheckBoxOutlineBlankIcon sx={{ float: "right" }} />
                                        )}
                                    <Typography variant="body1" color="text.dark" sx={{ fontSize: 16, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>{`Task Status: ${todos.completed}`} </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            
                        </Grid>
                    );
                })}
            </Grid>
    </> );
}
 
export default Todo;