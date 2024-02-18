'use client'
import Navbar from "../../navbar";
import { Card, CardActionArea, CardContent, Grid, CardHeader, Typography, Button, ListItemIcon} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";



const Comments = ({params}) => {
    const router = useRouter();
    const postId = params.id;
    const [comment, setComment] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const responseComments = await fetch(
              `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
            );
            const jsonComments = await responseComments.json();
            setComment(jsonComments);
        
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [postId]);

    // useEffect(() => {
    //         const fetchCommnet = () => {
    //           fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    //             .then((response) => response.json())
    //             .then((json) => {
    //               setComment(json);
    //             });
    //         };
      
    //         fetchCommnet();
    // }, []);
    return ( <>
        <Navbar/>
        <Button variant="contained" color="success" onClick={() => router.back()} sx={{marginTop:'100px', marginLeft: '40px'}}>Go Back</Button>
        <Typography variant="h4" sx={{fontWeight:'bold', marginTop:'30px', marginLeft:'40px'}}>Comment Section</Typography>
        <Grid container spacing={4} marginTop={"8px"}>
                {comment.map((item, index) => {
                   
                    return(
                        <Grid item lg={3} md={4} sm={6} xs={12} key={index.id}>
                            
                            <Card sx={{ maxWidth: 380, justifyContent: "center", alignItems: "center", borderRadius:4, marginLeft: '40px'}} elevation={4} > 
                                <CardActionArea >                            
                                    <CardContent>
                                        
                                        <ListItemIcon
                                            sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start', // Align to the left
                                            marginTop: '-6px',
                                            }}
                                        >
                                           
                                            <CardHeader  title={`Name: ${item.name}`} subheader={`Email: ${item.email}`}  style={{ color: 'black' }} />
                                        </ListItemIcon>
                                        
                                    </CardContent>
                                    
                                </CardActionArea>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="body1" color="text.dark" sx={{marginLeft: '15px', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5px' }}>
                                            {item.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            
                        </Grid>
                    );
                })}
            </Grid>

    </> );
}
 
export default Comments;