import React, { useEffect } from 'react';
import WorkoutDetails from '../Components/WorkoutDetails';
import Workoutsform from '../Components/Workoutsform';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
const Home = () => {
    const {workouts,dispatch} = useWorkoutsContext();
    const {user} = useAuthContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts',{
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    },
                });
                const json = await response.json();
                if (response.ok) {

                    // setWorkouts(json.workout); 
                    dispatch({type:'SET_WORKOUTS',payload:json})
                } 
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        if(user){
            fetchWorkouts();
        }

       
    }, [dispatch,user]);

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <Workoutsform />
        </div>
    );
};

export default Home;
