"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "../navbar";
import { CardActionArea, CardContent, CardHeader, Grid, Card, Typography, ListItemIcon, Button, IconButton, Skeleton } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



const User = () => {
    const router = useRouter();
    const [user, setUser] = useState([{
        id: null,
        name: null,
        email: null,
        address: {
            street: null,
            suite: null,
            city: null,
            zipcode: null,
            geo: {
                lat: null,
                lng: null,
            },
        },
        phone: null,
        website: null,
        company: {
            name: null,
            catchPhrase: null,
            bs: null,
        },
    }]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        console.log(windowHeight);
        const fetchData = async () => {
          try {
            setLoading(true);
            const responseUser = await fetch(
              "https://jsonplaceholder.typicode.com/users"
            );
            const jsonUser = await responseUser.json();
            setUser(jsonUser);
            setLoading(false)
          } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <Grid container spacing={4}>
                {user.map((users, index) => {
                    return (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                            <Card sx={{ maxWidth: 340, justifyContent: "center", alignItems: "center", borderRadius: 4 }} elevation={4}>
                                <CardActionArea>
                                    {loading ? (
                                        <Skeleton animation="wave" height={40} width="80%" marginLeft="10px"/>
                                    ) : (
                                        <>
                                            <ListItemIcon
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-start', // Align to the left
                                                    marginTop: '-6px',
                                                    marginLeft: "12px"
                                                }}
                                            >
                                                <AccountCircleOutlinedIcon fontSize="large" color="error" />

                                                <CardHeader title={users.name} style={{ color: 'black' }} />
                                            </ListItemIcon>

                                            <CardContent>
                                                <Typography variant="body2" color="text.dark" sx={{ fontSize: 16, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>
                                                    Email: {users.email}
                                                    <br />
                                                    Address: {users.address.street} {users.address.suite}, {users.address.city}
                                                    <br />
                                                    Zip Code: ${users.address.zipcode}
                                                </Typography>
                                            </CardContent>

                                            <CardContent>
                                                <Typography variant="body1" gutterBottom color="text.dark" sx={{ fontSize: 16, display: 'flex', alignItems: 'start', justifyContent: 'start', marginTop: '5px' }}>
                                                    Phone no.:  {users.phone}
                                                    <br />
                                                    Website: {users.website}
                                                    <br />
                                                    Company Name: {users.company.name}
                                                </Typography>
                                            {/* <Button variant="outlined" href={`/Dashboard/Todo?userId=${router.query.userId}`} gutterBottom sx={{ marginTop: '20px' }}>{`View User's Todo's`}</Button>  */}
                                            <Button variant="outlined" onClick={() => router.push(`/Dashboard/Users/${users.id}`)} sx={{ marginTop: '20px' }}>View Task</Button>

                                            </CardContent>

                                        </>
                                    )}

                                </CardActionArea>

                            </Card>
                        </Grid>
                    );
                })}

            </Grid>

        </>
    );
}

export default User;
